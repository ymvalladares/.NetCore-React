using Api.Modules;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Interfaces
{
    //Agrega el repositorio y agrega la interface en el startup
    public interface IUserRepository
    {
        void Update(User user);
        void Delete(User user);
        void Add(User user);

        Task<bool> SaveAllAsync();
        Task<List<User>> GetAllUserAsync();
        Task<User> GetUserByIdAsync(int id);
    }
}
