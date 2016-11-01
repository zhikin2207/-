using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DevRacing.DAL.Entities
{
	public class BaseEntity
	{
		[BsonId]
		public ObjectId Id { get; set; }
	}
}
