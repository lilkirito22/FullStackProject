﻿namespace FullStack.API.Models
{
    public class Employee
    {
        public Guid Id { get; set; }

        public string name { get; set; }
        public string email { get; set; }
        public long phone { get; set; }
        public long salary { get; set; }
        public string departament { get; set; }


    }
}
