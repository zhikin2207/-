using AutoMapper;
using DevRacing.Common.Models;
using DevRacing.DAL.Entities;

namespace DevRacing.BLL.Profiles
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{
			CreateMap<AccountEntity, Account>().ReverseMap();
		}
	}
}
