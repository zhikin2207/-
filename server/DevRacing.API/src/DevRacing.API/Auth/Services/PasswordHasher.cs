using System;
using System.Text;
using DevRacing.API.Auth.Services.Interfaces;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace DevRacing.API.Auth.Services
{
	public class PasswordHasher : IPasswordHasher
	{
		public string Hash(string login, string password)
		{
			byte[] salt = Encoding.UTF8.GetBytes(login);

			string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
				password: password,
				salt: salt,
				prf: KeyDerivationPrf.HMACSHA1,
				iterationCount: 10000,
				numBytesRequested: 256 / 8));

			return hashed;
		}
	}
}
