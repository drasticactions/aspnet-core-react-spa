namespace AspnetFsharpReact

open System
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.DependencyInjection
open Microsoft.AspNetCore.HttpsPolicy
open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer
open Microsoft.Extensions.Configuration
open Microsoft.Extensions.DependencyInjection


type Startup() =

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    member this.ConfigureServices(services: IServiceCollection) =
        // Add framework services.
        services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1) |> ignore
        services.AddSpaStaticFiles(fun config -> 
                                        config.RootPath <- "ClientApp/build")

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    member this.Configure(app: IApplicationBuilder, env: IHostingEnvironment) =
        if (env.IsDevelopment()) then
            app.UseDeveloperExceptionPage() |> ignore
        else
            app.UseExceptionHandler("/Error") |> ignore
            app.UseHsts() |> ignore

        // app.UseHttpsRedirection() |> ignore
        app.UseStaticFiles() |> ignore
        app.UseSpaStaticFiles() |> ignore

        app.UseMvc(fun routes ->
            routes.MapRoute(
                name = "default",
                template = "{controller=Home}/{action=Index}/{id?}") |> ignore
            ) |> ignore

        app.UseSpa(fun spa ->
            spa.Options.SourcePath <- "ClientApp"
            if (env.IsDevelopment()) then
                spa.UseReactDevelopmentServer(
                    npmScript = "start") |> ignore
        ) |> ignore