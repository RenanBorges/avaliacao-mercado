using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace avaliacao_mercado
{
    public class Helpers
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        public Helpers(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }
        public string UploadedFile(IFormFile img)
        {
            string uniqueFileName = null;

            if (img != null)
            {
                string uploadsFolder = Path.Combine(webHostEnvironment.WebRootPath, "images");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }
                uniqueFileName = Guid.NewGuid().ToString() + "_" + img.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    img.CopyTo(fileStream);
                }
            }
            return uniqueFileName;
        }

        public void DeleteReplacedFile(string img)
        {
            string filePath = Path.Combine(webHostEnvironment.WebRootPath, "images") + "/" + img;
            if (img != null && File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }
    }
}
