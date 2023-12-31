﻿#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyWebSite.Models;


namespace MyWebSite.Data
{
    // public class MyWebSiteContext : DbContext 
    public class MyWebSiteContext : IdentityDbContext<IdentityUser> 
    {
        public MyWebSiteContext(DbContextOptions<MyWebSiteContext> options) : base(options)
        {
        }

        public DbSet<Education> Education { get; set; }

        public DbSet<Portfolio> Portfolio { get; set; }

        public DbSet<Skill> Skill { get; set; }

        public DbSet<Message> Message { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }


}
