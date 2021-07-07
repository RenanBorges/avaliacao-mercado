using avaliacao_mercado.domain.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace avaliacao_mercado.domain.repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IEntity
    {
        private readonly AppDbContext _context;
        public GenericRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<TEntity> AddEntity(TEntity product)
        {
            _context.Set<TEntity>().Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<TEntity> GetEntity(int id)
        {
            return await _context.Set<TEntity>().FindAsync(id);
        }

        public async Task<IEnumerable<TEntity>> GetEntities()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public async Task UpdateEntity(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
