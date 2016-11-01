using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevRacing.Common.Models.Enums;

namespace DevRacing.API.ViewModels
{
	public class StatisticsViewModel
	{
		public string GameName { get; set; }

		public GameMode Mode { get; set; }
	}
}
