namespace DevRacing.API.Auth.Services.Interfaces
{
	public interface IPasswordHasher
	{
		string Hash(string login, string password);
	}
}