using System.Linq;
using DevRacing.API.Auth;
using DevRacing.API.Auth.Services.Interfaces;
using DevRacing.API.ViewModels;
using DevRacing.BLL.Services.Interfaces;
using DevRacing.Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DevRacing.API.Controllers
{
	[Route("api/[controller]")]
	public class AccountController : BaseController
	{
		private readonly IAccountService _accountService;
		private readonly ITokenService _tokenService;
		private readonly IPasswordHasher _passwordHasher;

		public AccountController(
			IAccountService accountService,
			ITokenService tokenService, 
			IPasswordHasher passwordHasher)
		{
			_accountService = accountService;
			_tokenService = tokenService;
			_passwordHasher = passwordHasher;
		}

		[HttpGet]
		[Authorize]
		public ResponseModel<AccountInfoViewModel> Get()
		{
			var login = User
				.Claims
				.FirstOrDefault(x => x.Type.Equals(JwtCustomClaimNames.Login))
				.Value;

			var account = _accountService.Get(login);

			var accountInfo = new AccountInfoViewModel
			{
				Email = account.Email,
				UserName = account.Name
			};

			return CreateResponse(accountInfo);
		}

		[HttpPost]
		[AllowAnonymous]
		public ResponseModel<string> Post(AccountViewModel accountViewModel)
		{
			if (!ModelState.IsValid)
			{
				return CreateError<string>("User data is not valid");
			}

			string secret = _passwordHasher.Hash(accountViewModel.Password, accountViewModel.Login);

			var account = new Account
			{
				Login = accountViewModel.Login,
				Secret = secret,
				Name = accountViewModel.Name,
				Email = accountViewModel.Email
			};

			_accountService.Create(account);

			var token = _tokenService.GetToken(accountViewModel.Login, secret);

			return CreateResponse(token);
		}
	}
}
