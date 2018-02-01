using Microsoft.EntityFrameworkCore;
 
namespace travelLog.Models
{
    public class travelLogContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public travelLogContext(DbContextOptions<travelLogContext> options) : base(options) { }
        public DbSet <Trip> Trips { get; set; }
        public DbSet <Post> Posts { get; set; }
    }
}