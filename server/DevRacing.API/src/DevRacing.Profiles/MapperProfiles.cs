using AutoMapper;
using BllMappingProfile = DevRacing.BLL.Profiles.MapperProfile;

namespace DevRacing.Profiles
{
	public static class MapperProfiles
	{
		public static Profile[] GetAll()
		{
			return new Profile[]
			{
				new BllMappingProfile()
			};
		}
	}
}