using System.Collections.Generic;
using DevRacing.DAL.Entities;

namespace DevRacing.DAL.Repositories.Interfaces
{
	public interface IWordsRepository
	{
		List<WordEntity> GetRandom(int count);
	}
}