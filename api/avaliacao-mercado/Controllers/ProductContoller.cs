using avaliacao_mercado.domain.models;
using avaliacao_mercado.domain.repositories;
using avaliacao_mercado.dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace avaliacao_mercado.Controllers
{
    [ApiController]
    [Route("Products")]
    public class ProductContoller : Controller
    {
        private readonly IProductRepository _repo;
        public static IWebHostEnvironment _environment;
        public ProductContoller(IProductRepository repo, IWebHostEnvironment enviroment)
        {
            _repo = repo;
            _environment = enviroment;
        }

        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult> GetProducts()
        {
            var result = await _repo.GetProducts();
            return  Ok(result) as ActionResult;
        }


        // POST: ProductContoller/Create
        [HttpPost]       
        [Produces("application/json")]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.Created)]
        public async Task<IActionResult> CreateAsync([FromForm] ProductCreate product)
        {
            try
            {

                Helpers helper = new Helpers(_environment);
                string imageName = helper.UploadedFile(product.Image);
                var result = await _repo.AddProduct(new Product()
                {
                    Name = product.Name,
                    Price = product.Price,
                    Image = imageName
                });
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
               

        // PUT: ProductContoller/Edit/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.NoContent)]
        public async Task<ActionResult> EditAsync(int id, [FromForm] ProductCreate product)
        {
            try
            {
                var prod = await _repo.GetProduct(id);
                if (prod == null) return NotFound();
                if (product.Image != null && prod.Image != product.Image.FileName)
                {
                   Helpers helper = new Helpers(_environment);
                    string imageName = helper.UploadedFile(product.Image);
                    prod.Image = imageName;
                    helper.DeleteReplacedFile(product.Image.FileName);
                }

                prod.Name = product.Name;
                prod.Price = product.Price;
                await _repo.UpdateProduct(prod);

                return NoContent();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       

        
    }
}
