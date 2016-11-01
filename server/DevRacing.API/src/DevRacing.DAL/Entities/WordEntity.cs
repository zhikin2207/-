using MongoDB.Bson.Serialization.Attributes;

namespace DevRacing.DAL.Entities
{
	public class WordEntity : BaseEntity
	{
		[BsonElement("value")]
		public string Value { get; set; }

		[BsonElement("random")]
		public int Random { get; set; }
	}
}