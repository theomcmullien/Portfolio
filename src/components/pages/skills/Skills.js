import './Skills.css';
import PageLayout from '../../layouts/page_layout/PageLayout';
import Skill from '../../elements/skill/Skill';

const Skills = () => {
    return (
        <div className="skills-bg">
            <PageLayout page='skills'>
                <div className='skills-container'>
                    <Skill percent={100} skill="C#"></Skill>
                    <Skill percent={100} skill=".NET Framework"></Skill>
                    <Skill percent={100} skill="RESTful API"></Skill>
                    <Skill percent={100} skill="MS SQL Server"></Skill>
                    <Skill percent={100} skill="JavaScript"></Skill>
                    <Skill percent={100} skill="HTML"></Skill>
                    <Skill percent={100} skill="CSS"></Skill>
                    <Skill percent={100} skill="React.js"></Skill>
                    <Skill percent={100} skill="Bootstrap"></Skill>
                    <Skill percent={100} skill="Flutter/Dart"></Skill>
                    <Skill percent={100} skill="JADE"></Skill>
                    <Skill percent={100} skill="DevOps"></Skill>
                    <Skill percent={100} skill="Source Control"></Skill>
                    <Skill percent={100} skill="GitHub"></Skill>
                </div>
            </PageLayout>
        </div>
    );
}

export default Skills;

//<div class="outer-box">
//    <div class="inner-box"></div>
//    <div class="text-wrapper">
//        <p>Hover me</p>
//    </div>
//</div>