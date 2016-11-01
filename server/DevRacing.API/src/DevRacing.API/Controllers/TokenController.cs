using DevRacing.API.Auth;
using DevRacing.API.Auth.Models;
using DevRacing.API.Auth.Services.Interfaces;
using DevRacing.API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DevRacing.API.Controllers
{
	[Route("api/[controller]")]
	public class TokenController : BaseController
	{
		private readonly ITokenService _tokenService;
		private readonly IPasswordHasher _passwordHasher;

		public TokenController(ITokenService tokenService, IPasswordHasher passwordHasher)
		{
			_tokenService = tokenService;
			_passwordHasher = passwordHasher;
		}

		[HttpPost]
		[AllowAnonymous]
		public ResponseModel<string> Post(Credentials credentials)
		{
			if (!ModelState.IsValid)
			{
				return CreateError<string>("Credentials is not valid");
			}

			string secret = _passwordHasher.Hash(credentials.Password, credentials.Login);
			var token = _tokenService.GetToken(credentials.Login, secret);

			return CreateResponse(token);
		}
	}
}
