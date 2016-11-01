using MongoDB.Bson.Serialization.Attributes;

namespace DevRacing.DAL.Entities
{
	public class AccountEntity : BaseEntity
	{
		[BsonElement("login")]
		public string Login { get; set; }

		[BsonElement("secret")]
		public string Secret { get; set; }

		[BsonElement("name")]
		public string Name { get; set; }

		[BsonElement("email")]
		public string Email { get; set; }
	}
}
