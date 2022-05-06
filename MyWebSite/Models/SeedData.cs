using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MyWebSite.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Bogus;

namespace MyWebSite.Models
{
    public static class SeedData
    {
        private static Skill[] AddSkill()
        {
            return new Skill[]
            {
                new Skill
                {
                    Name = "C#",
                    Percentage = 90
                },
                new Skill
                {
                    Name = "Jade",
                    Percentage = 90
                },
                new Skill
                {
                    Name = "HTML",
                    Percentage = 70
                },
                new Skill
                {
                    Name = ".NET Core",
                    Percentage = 70
                },
                new Skill
                {
                    Name = "CSS",
                    Percentage = 50
                },
                new Skill
                {
                    Name = "SQL",
                    Percentage = 75
                },
                new Skill
                {
                    Name = "JavaScript",
                    Percentage = 20
                },
                new Skill
                {
                    Name = "Flutter",
                    Percentage = 55
                },
            };
        }
        private static Portfolio[] AddPortfolio()
        {
            return new Portfolio[] {
                new Portfolio
                {
                    Title = "Northstar Booking - Flight Booking App",
                    Description = "Northstar Booking is an application which allows passengers across New Zealand to book flights. The application consists of both a visual interface for users to interact with and a database which stores data for the app",
                    Pic = "/pic/cases/Jade480.png"
                },
                new Portfolio
                {
                    Title = "PanGains - Mobile App",
                    Description = "PanGains is a mobile app designed for people in need of a sustainable method of tracking routines, exercises, and the overall progression being made from going to the gym. The app encourages users to get into a routine of going to the gym a set number of days each week",
                    Pic = "/pic/cases/PanGains480.png"
                },
            };
        }
        private static Education[] AddEducation()
        {

            return new Education[] {
                new Education
                {
                    Title = "Bachelor of IT",
                    Location = "Invercargill, New Zealand",
                    Duration = "2020-Now",
                    Description = "Two years as a Bacholor of IT student has provided a strong foundation of knowledge in software development and design fundamentals, web and advanced programming. A proven ability in researching and developing within team oriented projects providing the ability to work well in a team environment. Expertise in the use of Flutter, C#, SQL, HTML and CSS along with a robust understanding of Jade development, winning the Top Jade Programmer - Year 2 Information Technology award of 2021"

                },
            };
        }
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MyWebSiteContext(serviceProvider.GetRequiredService<DbContextOptions<MyWebSiteContext>>())){

                if (!context.Skill.Any())
                    context.Skill.AddRange(AddSkill());
                if (!context.Education.Any())
                    context.Education.AddRange(AddEducation());
                if (!context.Portfolio.Any())
                    context.Portfolio.AddRange(AddPortfolio());
                
                context.SaveChanges();
            }
        }
    }
}