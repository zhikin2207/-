using DevRacing.DAL.Entities;

namespace DevRacing.DAL.Repositories.Interfaces
{
	public interface IAccountRepository : IRepository<AccountEntity>
	{
		AccountEntity Get(string login, string secret);

		bool Exist(string login);

		AccountEntity Get(string login);
	}
}