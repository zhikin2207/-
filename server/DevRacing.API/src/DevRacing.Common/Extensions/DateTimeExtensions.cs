using System;

namespace DevRacing.Common.Extensions
{
	public static class DateTimeExtensions
	{
		public static long ToUnixEpochDate(this DateTime date)
		{
			var universalTime = date.ToUniversalTime();
			var offset = new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero);

			return (long)Math.Round((universalTime- offset).TotalSeconds);
		}
	}
}
