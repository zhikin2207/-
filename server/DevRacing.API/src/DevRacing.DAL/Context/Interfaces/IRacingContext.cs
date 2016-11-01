using DevRacing.DAL.Entities;
using MongoDB.Driver;

namespace DevRacing.DAL.Context.Interfaces
{
	public interface IRacingContext
	{
		IMongoCollection<AccountEntity> Users { get; }
		IMongoCollection<WordEntity> Words { get; }
	}
}