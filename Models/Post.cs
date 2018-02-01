using System;
using System.Collections.Generic;

namespace travelLog.Models
{
    public class Post: BaseEntity
    {
        public int postid { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Type { get; set; }
        public DateTime eventDate { get; set; }
        public int tripid { get; set; }
        public Trip Trip { get; set; }
    }
}