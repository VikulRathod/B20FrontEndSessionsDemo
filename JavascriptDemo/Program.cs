var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//    app.UseExceptionHandler("/Error");
//}

// app.UseDefaultFiles();

FileServerOptions options = new FileServerOptions();
options.DefaultFilesOptions.DefaultFileNames = new[] { "regularexpressions.html" };

app.UseFileServer(options);
app.UseStaticFiles();

//app.UseRouting();

//app.UseAuthorization();

//app.MapRazorPages();

app.Run();
