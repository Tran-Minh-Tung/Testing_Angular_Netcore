using Demo.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Api.Interface
{
    public interface IMenuRepository
    {
        Task<IEnumerable<TreeMenuModel>> GetMenu();
        Task<Menu> InsertMenu(Menu objMenu);
        Task<Menu> UpdateMenu(Menu objMenu);
        Task<bool> DeleteMenu(long ID);
    }
}
