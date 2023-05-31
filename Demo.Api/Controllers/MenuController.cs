using Demo.Api.DBContext;
using Demo.Api.Interface;
using Demo.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuRepository _IMenuRepository;
        public MenuController(IMenuRepository IMenuRepository)
        {

            _IMenuRepository = IMenuRepository;
        }

        [HttpGet]
        [Route("GetMenu")]
        public async Task<ActionResult<IEnumerable<TreeMenuModel>>> GetMenu()
        {
           var getList = await _IMenuRepository.GetMenu();
            return Ok(getList);
        }
        [HttpPost]
        [Route("Add")]
        public async Task<IActionResult> Add(Menu menu)
        {
            var result = await _IMenuRepository.InsertMenu(menu);
            return Ok();
        }


        [HttpPost]
        [Route("Updated")]
        public async Task<ActionResult<Menu>> Updated(Menu menu)
        {
            await _IMenuRepository.UpdateMenu(menu);
            return Ok();
        }

        [HttpPost]
        [Route("Delete")]
        public async Task<ActionResult> Delete(Menu  menu)
        {
            await _IMenuRepository.DeleteMenu(menu.Id);
            return Ok();
        }
    }
}
