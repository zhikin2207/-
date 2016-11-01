using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DevRacing.DAL.Entities;
using DevRacing.DAL.Repositories.Interfaces;
using MongoDB.Driver;

namespace DevRacing.DAL.Repositories
{
	public class Repository<T> : IRepository<T> where T : BaseEntity
	{
		protected readonly IMongoCollection<T> _collection;

		public Repository(IMongoCollection<T> collection)
		{
			_collection = collection;
		}

		public List<T> GetAll()
		{
			return _collection.Find(item => true).ToList();
		}

		public List<T> GetList(Expression<Func<T, bool>> where)
		{
			return _collection.Find(where).ToList();
		}

		public T Get(Expression<Func<T, bool>> where)
		{
			return _collection.Find(where).FirstOrDefault();
		}

		public void Create(T entity)
		{
			_collection.InsertOne(entity);
		}
	}
}