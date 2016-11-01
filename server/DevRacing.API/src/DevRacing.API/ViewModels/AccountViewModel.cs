using System.ComponentModel.DataAnnotations;

namespace DevRacing.API.ViewModels
{
	public class AccountViewModel
	{
		[Required]
		[MinLength(5)]
		public string Login { get; set; }

		[Required]
		[MinLength(5)]
		[DataType(DataType.Password)]
		public string Password { get; set; }

		[Required]
		[MinLength(5)]
		public string Name { get; set; }

		[Required]
		[DataType(DataType.EmailAddress)]
		public string Email { get; set; }
	}
}
