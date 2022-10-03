using Api.Data;
using Api.Interfaces;
using Api.Modules;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Controllers
{
    //genera la base del controlador
    public class UserController : BaseController
    {
        private readonly IUserRepository userRepository;
        private readonly DataContext dataContext;

        public UserController(IUserRepository userRepository, DataContext dataContext)
        {
            this.userRepository = userRepository;
            this.dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUser()
        {
            var query = await userRepository.GetAllUserAsync();
            if (query == null) return BadRequest("Imposible to read dates");
            return Ok(query);
        }
        [HttpGet("ById/{id}")]
        public async Task<ActionResult<User>> GetUserByIdAsync(int id)
        {
            var user = await userRepository.GetUserByIdAsync(id);
            return Ok(user);
        }
        [HttpPost("add")]
        public async Task<ActionResult> AddUser(User user)
        {
            if (await UserExist(user.Email)) return BadRequest("User exist already");
            userRepository.Add(user);
            if (await userRepository.SaveAllAsync()) return Ok(user);
            return BadRequest("Imposible add to user");
        }
        [HttpDelete("delete/{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var query = await userRepository.GetUserByIdAsync(id);

            if (query != null)
            {
                userRepository.Delete(query);
                if (await userRepository.SaveAllAsync()) return NoContent();
            }
            return BadRequest("Imposible to delete user");
            
        }
        [HttpPut("update")]
        public async Task<ActionResult> UpdateNote(User user)
        {
            var query = await userRepository.GetUserByIdAsync(user.Id);
            if (query != null)
            {
                query.AmountDonate += user.AmountDonate;
                userRepository.Update(query);

                if (await userRepository.SaveAllAsync()) return NoContent();
            }
            return BadRequest("Failed to update user");
        }
        private async Task<bool> UserExist(string email)
        {
            return await dataContext.User.AnyAsync(x => x.Email == email.ToLower());
        }
    }
}
