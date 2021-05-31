using avaliacao_mercado.domain.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace avaliacao_mercado.domain.repositories
{
    public interface IProductRepository
    {
        Task<Product> AddProduct(Product product);
        Task<IEnumerable<Product>> GetProducts();
        Task UpdateProduct(Product product);
        Task<Product> GetProduct(int id);

    }
}
