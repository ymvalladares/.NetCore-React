using Api.Modules;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class DataContext : DbContext
    {
        //solo se añade en el startup el servicio de conexion con la base de datos
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
    }
}
