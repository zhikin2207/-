using System;
using AutoMapper;
using DevRacing.BLL.Exceptions;
using DevRacing.BLL.Services.Interfaces;
using DevRacing.Common.Models;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Repositories.Interfaces;

namespace DevRacing.BLL.Services
{
	public class AccountService : IAccountService
	{
		private readonly IAccountRepository _accountRepository;
		private readonly IMapper _mapper;

		public AccountService(IAccountRepository accountRepository, IMapper mapper)
		{
			_accountRepository = accountRepository;
			_mapper = mapper;
		}

		public Account Get(string login)
		{
			var accountEntity = _accountRepository.Get(login);

			if (accountEntity == null)
			{
				return null;
			}

			return _mapper.Map<Account>(accountEntity);
		}

		public Account Get(string login, string secret)
		{
			var accountEntity = _accountRepository.Get(login, secret);

			if (accountEntity == null)
			{
				return null;
			}

			return _mapper.Map<Account>(accountEntity);
		}

		public void Create(Account account)
		{
			var accountExists = _accountRepository.Exist(account.Login);

			if (accountExists)
			{
				throw new DataDuplicationException("Login is in use");
			}

			var accountEntity = _mapper.Map<AccountEntity>(account);
			_accountRepository.Create(accountEntity);
		}
	}
}