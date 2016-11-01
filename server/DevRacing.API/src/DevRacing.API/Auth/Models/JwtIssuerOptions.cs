using System;
using Microsoft.IdentityModel.Tokens;

namespace DevRacing.API.Auth.Models
{
	public class JwtIssuerOptions
	{
		// iss
		public string Issuer { get; set; }

		// aud
		public string Audience { get; set; }

		// nbf
		public DateTime NotBefore { get; set; } = DateTime.UtcNow;

		// iat
		public DateTime IssuedAt { get; set; } = DateTime.UtcNow;

		public TimeSpan ValidFor { get; set; } = TimeSpan.FromDays(15);

		// exp
		public DateTime Expiration => IssuedAt.Add(ValidFor);

		public string SecretKey { get; set; }

		public SigningCredentials SigningCredentials { get; set; }
	}
}