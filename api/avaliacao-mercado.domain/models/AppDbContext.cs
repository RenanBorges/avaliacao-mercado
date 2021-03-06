using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace avaliacao_mercado.domain.models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :
          base(options)
        { }

        public DbSet<Product> Products { get; set; }
    }
}
