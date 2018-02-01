using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using travelLog.Models;
using Microsoft.EntityFrameworkCore;

namespace travelLog.Controllers
{
    public class HomeController : Controller
    {
        private travelLogContext _context;

        public HomeController(travelLogContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IEnumerable<Trip> Get()
        {
            List<Trip> Trips = _context.Trips.OrderByDescending(s => s.startDate).ToList();
            return Trips;
        }

        [HttpGet]
        [Route("api/[controller]/{num}")]
        public IEnumerable<Post> GetPosts(int num) 
        {
            List<Post> Post = _context.Posts.Where(p => p.tripid == num).Include(p => p.Trip).OrderBy(pt => pt.eventDate).ToList();
            return Post;
        }
    }
}