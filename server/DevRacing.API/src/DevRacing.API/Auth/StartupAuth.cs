using System;
using System.Text;
using DevRacing.API.Auth.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace DevRacing.API.Auth
{
	public static class StartupAuth
	{
		public static void ConfigureAuth(IApplicationBuilder app, IConfigurationRoot configuration)
		{
			var jwtAppSettingOptions = configuration.GetSection(nameof(JwtIssuerOptions));

			var secretKey = jwtAppSettingOptions[nameof(JwtIssuerOptions.SecretKey)];
			var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuerSigningKey = true,
				IssuerSigningKey = signingKey,
				ValidateIssuer = true,
				ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],
				ValidateAudience = true,
				ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],
				ValidateLifetime = true,
				ClockSkew = TimeSpan.Zero
			};

			app.UseJwtBearerAuthentication(new JwtBearerOptions
			{
				AutomaticAuthenticate = true,
				AutomaticChallenge = true,
				TokenValidationParameters = tokenValidationParameters
			});
		}

		public static void ConfigureServicesAuth(IServiceCollection services, IConfigurationRoot configuration)
		{
			var jwtAppSettingOptions = configuration.GetSection(nameof(JwtIssuerOptions));
			var secretKey = jwtAppSettingOptions[nameof(JwtIssuerOptions.SecretKey)];
			var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));

			services.Configure<JwtIssuerOptions>(jwtAppSettingOptions);
			services.Configure<JwtIssuerOptions>(options =>
			{
				options.SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
			});

			services.AddAuthorization(options =>
			{
				// TODO: Add policies to enum
				//options.AddPolicy("TestClaimOnly", policy => policy.RequireAuthenticatedUser());
			});
		}
	}
}
