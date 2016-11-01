using DevRacing.Common.Models;

namespace DevRacing.BLL.Services.Interfaces
{
	public interface IAccountService
	{
		Account Get(string login, string secret);

		void Create(Account account);

		Account Get(string login);
	}
}