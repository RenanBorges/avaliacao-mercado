using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using avaliacao_mercado.domain.models;
using avaliacao_mercado.domain.repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace avaliacao_mercado
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(optionns =>
            optionns.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            ///services.AddDbContext<TodoContext>(opt =>
           // opt.UseInMemoryDatabase("TodoList"));

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .SetIsOriginAllowed((host) => true)
                   .AllowCredentials());
            });

            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddControllers();

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen();
        }

        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Avaliacao Mercado");
                c.RoutePrefix = string.Empty;
            });

            app.UseRouting();

            app.UseCors("CorsPolicy");
            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
