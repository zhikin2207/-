using System;
using DevRacing.Common.Exceptions;

namespace DevRacing.API.Auth.Exceptions
{
	public class AuthException : ControlledException
	{
		public AuthException(string message) : base(message)
		{
		}
	}
}