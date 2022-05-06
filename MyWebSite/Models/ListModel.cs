using System.ComponentModel.DataAnnotations;

namespace MyWebSite.Models
{
    public class ListModel
    {
        public IList<Portfolio> PortfolioModel { get; set; }
        public IList<Education> EducationModel { get; set; }
        public IList<Skill> SkillModel { get; set; }


    }
}