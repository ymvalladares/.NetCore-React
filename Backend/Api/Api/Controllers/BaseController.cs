using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    //hereda del ControllerBase
    [ApiController]
    [Route("user/[controller]")]
    public class BaseController : ControllerBase
    {
    }
}
