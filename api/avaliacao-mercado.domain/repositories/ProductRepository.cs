using avaliacao_mercado.domain.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace avaliacao_mercado.domain.repositories
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        private readonly AppDbContext context;
        public ProductRepository(AppDbContext context): base(context)
        {
            this.context = context;
        }

        //just an example to express de flexibility of this aproach
        async Task<Product> get(int id)
        {
            return await context.Products.FindAsync(id);
        }
    }
}
