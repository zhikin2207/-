using DevRacing.BLL.Services;
using DevRacing.BLL.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace DevRacing.BLL.Profiles
{
	public class ServiceProfile
	{
		public static void Configure(IServiceCollection services)
		{
			services.AddTransient<IAccountService, AccountService>();
			services.AddTransient<ITextService, TextService>();
			services.AddTransient<IStatisticsService, StatisticsService>();
		}
	}
}
