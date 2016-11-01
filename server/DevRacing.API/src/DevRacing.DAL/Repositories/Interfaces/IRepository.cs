using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DevRacing.DAL.Entities;

namespace DevRacing.DAL.Repositories.Interfaces
{
	public interface IRepository<T>
	{
		List<T> GetList(Expression<Func<T, bool>> where);
		T Get(Expression<Func<T, bool>> where);
		void Create(T entity);
		List<T> GetAll();
	}
}