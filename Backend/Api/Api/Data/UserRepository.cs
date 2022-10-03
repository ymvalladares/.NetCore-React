using Api.Interfaces;
using Api.Modules;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data
{
    //genera el constructor y llama el dataContext
    //genera el controlador 
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dataContext;

        public UserRepository(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public void Add(User user)
        {
            dataContext.Add(user);
        }

        public void Delete(User user)
        {
            dataContext.Remove(user);
        }

        public async Task<List<User>> GetAllUserAsync()
        {
            var query = await dataContext.User.ToListAsync();
            return query;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            var query = await dataContext.User.Where(user => user.Id == id).FirstOrDefaultAsync();
            return query;
        }

        public async Task<bool> SaveAllAsync()
        {
            return await dataContext.SaveChangesAsync() > 0;
        }

        public void Update(User user)
        {
            dataContext.Entry(user).State = EntityState.Modified;
        }
    }
}
