using DevRacing.DAL.Context.Interfaces;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Options;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DevRacing.DAL.Context
{
	public class RacingContext : IRacingContext
	{
		private const string AccountCollectionName = "accounts";
		private const string WordsCollectionName = "top1000words";

		private readonly IMongoDatabase _mongoDatabase;

		public RacingContext(IOptions<DbConfig> config)
		{
			var mongoClient = new MongoClient(config.Value.ConnectionString);
			_mongoDatabase = mongoClient.GetDatabase(config.Value.DbName);
		}

		public IMongoCollection<AccountEntity> Users => _mongoDatabase.GetCollection<AccountEntity>(AccountCollectionName);

		public IMongoCollection<WordEntity> Words => _mongoDatabase.GetCollection<WordEntity>(WordsCollectionName);
	}
}
