using DevRacing.API.Auth.Models;

namespace DevRacing.API.Auth.Services.Interfaces
{
	public interface ITokenService
	{
		string GetToken(string login, string secret);
	}
}