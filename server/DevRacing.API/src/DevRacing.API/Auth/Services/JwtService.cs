using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using DevRacing.API.Auth.Exceptions;
using DevRacing.API.Auth.Models;
using DevRacing.API.Auth.Services.Interfaces;
using DevRacing.BLL.Services.Interfaces;
using DevRacing.Common.Extensions;
using Microsoft.Extensions.Options;

namespace DevRacing.API.Auth.Services
{
	public class JwtService : ITokenService
	{
		private readonly JwtIssuerOptions _jwtOptions;
		private readonly IAccountService _accountService;

		public JwtService(IAccountService accountService, IOptions<JwtIssuerOptions> jwtOptions)
		{
			_accountService = accountService;
			_jwtOptions = jwtOptions.Value;
		}

		public string GetToken(string login, string secret)
		{
			var identity = GetClaimsIdentity(login, secret);

			var jwt = GetSecurityToken(login, identity);

			var securityTokenHandler = new JwtSecurityTokenHandler();
			var encodedJwt = securityTokenHandler.WriteToken(jwt);

			return encodedJwt;
		}

		private ClaimsIdentity GetClaimsIdentity(string login, string secret)
		{
			var account = _accountService.Get(login, secret);

			if (account == null)
			{
				throw  new AuthException("User does not exist");
			}

			var claimsIdentity = new ClaimsIdentity(new[]
			{
				new Claim(JwtCustomClaimNames.UserName, account.Name),
				new Claim(JwtCustomClaimNames.Email, account.Email),
				new Claim(JwtCustomClaimNames.Login, account.Login)
			});

			return claimsIdentity;
		}

		private JwtSecurityToken GetSecurityToken(string login, ClaimsIdentity identity)
		{
			var claims = new[]
			{
				new Claim(JwtRegisteredClaimNames.Sub, login),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToUnixEpochDate().ToString(), ClaimValueTypes.Integer64),
				identity.FindFirst(JwtCustomClaimNames.UserName),
				identity.FindFirst(JwtCustomClaimNames.Email),
				identity.FindFirst(JwtCustomClaimNames.Login)
			};

			var jwt = new JwtSecurityToken(
				issuer: _jwtOptions.Issuer,
				audience: _jwtOptions.Audience,
				claims: claims,
				notBefore: _jwtOptions.NotBefore,
				expires: _jwtOptions.Expiration,
				signingCredentials: _jwtOptions.SigningCredentials);

			return jwt;
		}
	}
}
