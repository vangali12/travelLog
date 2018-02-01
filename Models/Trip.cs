using System;
using System.Collections.Generic;

namespace travelLog.Models
{
    public class Trip: BaseEntity
    {
        public int tripid { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Description { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
    }
    
}