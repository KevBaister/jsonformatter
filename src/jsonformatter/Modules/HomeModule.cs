using Nancy;

namespace jsonformatter.Modules
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = _ => View["index.htm"];
        }
    }
}