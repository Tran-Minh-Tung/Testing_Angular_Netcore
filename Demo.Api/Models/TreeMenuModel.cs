using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Api.Models
{
    public class TreeMenuModel
    {
        public long Id { get; set; }
        
        public string Name { get; set; }

        public List<TreeMenuModel> Children { get; set; } = new List<TreeMenuModel>();
    }
}
