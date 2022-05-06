#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MyWebSite.Data;
using MyWebSite.Models;

namespace MyWebSite.Controllers
{
   /* [Route("/admin/[controller]/[action]")] */
    public class EducationController : Controller
    {
        private readonly MyWebSiteContext _context;

        public EducationController(MyWebSiteContext context)
        {
            _context = context;
        }

        // GET: Educations
        public async Task<IActionResult> Index()
        {
            return View(await _context.Education.ToListAsync());
        }

        // GET: Educations/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var education = await _context.Education.FirstOrDefaultAsync(m => m.Id == id);

            if (education == null)
            {
                return NotFound();
            }

            return View(education);
        }

        private bool EducationExists(int id)
        {
            return _context.Education.Any(e => e.Id == id);
        }
    }
}
