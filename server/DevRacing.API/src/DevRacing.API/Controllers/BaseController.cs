using DevRacing.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DevRacing.API.Controllers
{
	public class BaseController : Controller
	{
		public ResponseModel<T> CreateResponse<T>(T data)
		{
			return new ResponseModel<T>
			{
				Data = data,
				Status = ResponseStatus.Ok
			};
		}

		public ResponseModel<T> CreateResponse<T>(T data, ResponseStatus status)
		{
			return new ResponseModel<T>
			{
				Data = data,
				Status = status
			};
		}

		public ResponseModel<T> CreateError<T>(string message)
		{
			return new ResponseModel<T>
			{
				Message = message,
				Status = ResponseStatus.Error
			};
		}
	}
}
