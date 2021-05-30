using avaliacao_mercado.domain.models;
using avaliacao_mercado.domain.repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace avaliacao_mercado.Controllers
{
    [ApiController]
    [Route("Products")]
    public class ProductContoller : Controller
    {
        private readonly IProductRepository _repo;
        public ProductContoller(IProductRepository repo)
        {
            _repo = repo;    
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
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
               

        // PUT: ProductContoller/Edit/5
        [HttpPut]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
       

        
    }
}
