using System;
using System.Net.Http;
using DevRacing.API.ViewModels;
using DevRacing.Common.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DevRacing.API.Filters
{
	public class ExceptionFilter : IExceptionFilter
	{
		public void OnException(ExceptionContext context)
		{
			ControlledException exception = context.Exception as ControlledException;

			if (exception != null)
			{
				var response = new ResponseModel<string>
				{
					Status = ResponseStatus.Error,
					Message = context.Exception.Message
				};

				context.Result = new JsonResult(response);
				context.ExceptionHandled = true;
			}
		}
	}
}