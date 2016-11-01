using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace DevRacing.API.Utils
{
	public static class ServiceCollectionExtensions
	{
		public static IMapper AddMapper(this IServiceCollection serviceCollection, params Profile[] profiles)
		{
			var config = new MapperConfiguration(x =>
			{
				profiles.ToList().ForEach(x.AddProfile);
			});

			var mapper = config.CreateMapper();

			serviceCollection.AddTransient(serviceProvider => mapper);

			return mapper;
		}
	}
}