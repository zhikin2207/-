using DevRacing.API.Auth;
using DevRacing.API.Auth.Services;
using DevRacing.API.Auth.Services.Interfaces;
using DevRacing.API.Filters;
using DevRacing.API.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using DevRacing.Profiles;

namespace DevRacing.API
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddOptions();
			services.AddMapper(MapperProfiles.GetAll());

			StartupAuth.ConfigureServicesAuth(services, Configuration);
			ServicesProfile.Configure(Configuration, services);

			services.AddTransient<ITokenService, JwtService>();
			services.AddSingleton<IPasswordHasher, PasswordHasher>();

			services.AddMvc(options =>
			{
				options.Filters.Add(new ExceptionFilter());
			});
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			StartupAuth.ConfigureAuth(app, Configuration);

			app.UseCors(builder => builder
				.AllowAnyHeader()
				.AllowAnyMethod()
				.AllowAnyOrigin()
				.AllowCredentials());

			app.UseMvc();
		}
	}
}
