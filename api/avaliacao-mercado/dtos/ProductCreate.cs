using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace avaliacao_mercado.dtos
{
    public class ProductCreate
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "price")]
        public decimal Price { get; set; }

        [DataMember(Name = "image")]
        public IFormFile Image { get; set; }
    }
}
