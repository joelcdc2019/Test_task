using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;


namespace WeatherForcastWebAPI.Controllers
{
    [RoutePrefix("api/employee")]
    public class EmployeeController : ApiController
    {

        [HttpGet]
        [Route("getlist")]

        public IHttpActionResult GetList()
        {
            try
            {
              var client = new RestClient("https://api.github.com/");
              var request = new RestRequest("users");
              var response = client.Execute(request);
              string rawresponse = response.Content;
              var  result = JsonConvert.DeserializeObject<dynamic>(rawresponse);
       
                return Ok(result);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

      
    }
}
