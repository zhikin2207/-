using DevRacing.DAL.Context;
using DevRacing.DAL.Context.Interfaces;
using DevRacing.DAL.Options;
using DevRacing.DAL.Repositories;
using DevRacing.DAL.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DevRacing.DAL
{
	public class ServicesProfile
	{
		public static void Configure(IConfigurationRoot configurationRoot, IServiceCollection services)
		{
			services.Configure<DbConfig>(configurationRoot.GetSection("DbConfig"));
			services.AddTransient<IRacingContext, RacingContext>();
			services.AddTransient<IAccountRepository, AccountRepository>();
			services.AddTransient<IWordsRepository, WordsRepository>();
		}
	}
}
