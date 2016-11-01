using System.Linq;
using DevRacing.BLL.Services.Interfaces;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Repositories.Interfaces;

namespace DevRacing.BLL.Services
{
	public class TextService : ITextService
	{
		private readonly IWordsRepository _wordsRepository;

		public TextService(IWordsRepository wordsRepository)
		{
			_wordsRepository = wordsRepository;
		}

		public string Get(int wordsCount)
		{
			var words = _wordsRepository.GetRandom(wordsCount);

			return string.Join(" ", words.Select(w => w.Value));
		}
	}
}