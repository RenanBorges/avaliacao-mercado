using System.Collections.Generic;
using System.Threading.Tasks;

namespace avaliacao_mercado.domain.repositories
{
   public interface IGenericRepository<TEntity> where TEntity : class, IEntity
    {
        Task<TEntity> AddEntity(TEntity product);
        Task<IEnumerable<TEntity>> GetEntities();
        Task UpdateEntity(TEntity product);
        Task<TEntity> GetEntity(int id);
    }

    public interface IEntity
    {
        int Id { get; set; }
    }
}
