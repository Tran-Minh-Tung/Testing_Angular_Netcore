using Demo.Api.DBContext;
using Demo.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Api.Interface
{
    public class MenuRepository : IMenuRepository
    {
        private readonly MyDbContext _context;
        public MenuRepository(MyDbContext context)
        {
            _context = context;
        }
        public async Task<bool> DeleteMenu(long ID)
        {
            var item =  _context.Menu.Find(ID);
            if (item != null)
            {
                var listNodeCha =  _context.Menu.ToListAsync().Result.Where(item =>item.IdNodeCha == ID).ToList();
                if(listNodeCha.Count != 0)
                {
                    foreach(var i in listNodeCha)
                    {
                        _context.Menu.Remove(i);
                    }
                }
                _context.Menu.Remove(item);
               await _context.SaveChangesAsync();
               return  true;
            }
            return false;
        }

        public async Task<IEnumerable<TreeMenuModel>> GetMenu()
        {
            var list = await _context.Menu.ToListAsync();
            var rq = createNodeTree(list);
            return rq;
        }
        private List<TreeMenuModel> createNodeTree(List<Menu> menu)
        {
            List<TreeMenuModel> trees = new List<TreeMenuModel>();
            foreach(var item in menu)
            {
                if(item.IdNodeCha == 0)
                {
                    trees.Add(new TreeMenuModel
                    {
                        Id = item.Id,
                        Name = item.Name
                    });
                }
                else
                {
                    CreateNode(trees, item);
                }
            }
            return trees;
        }

        private void CreateNode(List<TreeMenuModel> nodes, Menu parent)
        {
            foreach (var node in nodes)
            {
                if (node.Id == parent.IdNodeCha)
                {
                    node.Children.Add(new TreeMenuModel { Id = parent.Id, Name = parent.Name });
                }
                else
                {
                    CreateNode(node.Children, parent);
                }
            }
        }

        public async Task<Menu> InsertMenu(Menu objMenu)
        {
            _context.Menu.Add(objMenu);
            await _context.SaveChangesAsync();
            return objMenu;
        }

        public async Task<Menu> UpdateMenu(Menu objMenu)
        {
            if(objMenu != null)
            {
                var item = _context.Menu.Find(objMenu.Id);
                if(item != null)
                {
                    item.Name = objMenu.Name;
                    _context.Menu.Update(item);
                    await _context.SaveChangesAsync();
                }
            }
            return objMenu;
        }
    }
}
