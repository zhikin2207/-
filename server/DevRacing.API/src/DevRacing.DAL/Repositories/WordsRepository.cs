using System;
using System.Collections.Generic;
using DevRacing.DAL.Context.Interfaces;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Repositories.Interfaces;
using MongoDB.Driver;

namespace DevRacing.DAL.Repositories
{
	public class WordsRepository : Repository<WordEntity>, IWordsRepository
	{
		public WordsRepository(IRacingContext context) : base(context.Words)
		{
		}

		public List<WordEntity> GetRandom(int count)
		{
			var random = new Random();
			var words = new List<WordEntity>(count);

			do
			{
				var randomWord = _collection
					.Find(x => x.Random >= random.Next())
					.SortBy(x => x.Random)
					.Limit(1)
					.FirstOrDefault();

				if (randomWord != null)
				{
					words.Add(randomWord);
				}
			} while (words.Count < count);

			return words;
		}
	}
}