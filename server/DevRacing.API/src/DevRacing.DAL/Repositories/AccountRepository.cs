using DevRacing.DAL.Context;
using DevRacing.DAL.Context.Interfaces;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Repositories.Interfaces;
using MongoDB.Driver;

namespace DevRacing.DAL.Repositories
{
	public class AccountRepository : Repository<AccountEntity>, IAccountRepository
	{
		public AccountRepository(IRacingContext context) : base(context.Users)
		{
		}

		public AccountEntity Get(string login, string secret)
		{
			login = login.ToLower();
			secret = secret.ToLower();

			return Get(a => a.Login.ToLower() == login && a.Secret.ToLower() == secret);
		}

		public AccountEntity Get(string login)
		{
			login = login.ToLower();

			return Get(a => a.Login.ToLower() == login);
		}

		public bool Exist(string login)
		{
			login = login.ToLower();

			return Get(a => a.Login == login) != null;
		}
	}
}
