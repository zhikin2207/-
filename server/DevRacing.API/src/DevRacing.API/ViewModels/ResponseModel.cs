namespace DevRacing.API.ViewModels
{
	public class ResponseModel<T>
	{
		public T Data { get; set; }

		public ResponseStatus Status { get; set; }

		public string Message { get; set; }
	}
}