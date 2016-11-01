using System;

namespace DevRacing.Common.Exceptions
{
	public class ControlledException : Exception
	{
		public ControlledException(string message) : base(message)
		{
		}
	}
}