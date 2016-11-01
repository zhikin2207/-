using DevRacing.API.ViewModels;
using DevRacing.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevRacing.API.Controllers
{
	[Route("api/[controller]")]
	public class StatisticsController : BaseController
	{
		[HttpPost]
		public ResponseModel<bool> Post(TypedLetter[] typedLetters)
		{
			return CreateResponse(true);
		}
	}
}