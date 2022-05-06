using Microsoft.AspNetCore.Mvc;
using MyWebSite.Models;
using MyWebSite.Data;


namespace MyWebSite.Controllers
{
    public class ContactController : Controller
    {
        private readonly MyWebSiteContext _context;
        public ContactController(MyWebSiteContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult LeaveMessage(string fullName, string email, string message)
        {

            _context.Message.Add(new Message()
                {
                    FullName = fullName,
                    Email = email,
                    Body = message,
                    CreatedAt = DateTime.Now
                }
            );
            try
            {
                _context.SaveChanges();
                ViewData["msg"] = $"Message from {fullName}, {email} sent successfully. <br /> Message: {message}";
            }
            catch (Exception ex)
            {

                ViewData["msg"] = $"Something went wrong. {ex.Message}";
            }


            return View();

        }
    }
}
