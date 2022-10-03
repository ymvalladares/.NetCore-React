using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Modules
{
    public class User
    {
        [Key]
        [Column("IdUsuarios")]
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int Age { get; set; }
        public int AmountDonate { get; set; }
        public bool Terms { get; set; }
    }
}
