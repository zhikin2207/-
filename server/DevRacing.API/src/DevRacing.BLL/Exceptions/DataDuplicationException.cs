using System;
using DevRacing.Common.Exceptions;

namespace DevRacing.BLL.Exceptions
{
	public class DataDuplicationException : ControlledException
	{
		public DataDuplicationException(string message) : base(message)
		{
			
		}
	}
}