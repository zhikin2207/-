using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using BllProfile = DevRacing.BLL.Profiles.ServiceProfile;
using DalProfile = DevRacing.DAL.ServicesProfile;

namespace DevRacing.Profiles
{
	public static class ServicesProfile
	{
		public static void Configure(IConfigurationRoot configuration, IServiceCollection services)
		{
			BllProfile.Configure(services);
			DalProfile.Configure(configuration, services);
		}
	}
}
