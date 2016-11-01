using DevRacing.API.ViewModels;
using DevRacing.BLL.Services.Interfaces;
using DevRacing.Common.Models;
using DevRacing.Common.Models.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DevRacing.API.Controllers
{
	[Route("api/[controller]")]
	public class TextController : BaseController
	{
		private readonly ITextService _textService;

		public TextController(ITextService textService)
		{
			_textService = textService;
		}

		[HttpGet]
		[AllowAnonymous]
		[Route("top15words")]
		public ResponseModel<Text> Top15(GameMode mode = GameMode.Normal)
		{
			Text text = new Text
			{
				Value = _textService.Get(15),
				Name = "top-15-words"
			};

			return CreateResponse(text);
		}
	}
}
