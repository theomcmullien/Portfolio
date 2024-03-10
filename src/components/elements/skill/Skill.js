import './Skill.css';

const Skill = ({ skill, percent }) => {
    return (
        <div className="skill-container">
            <div className="group">
                <div className="title-container">
                    <p className='title'>{skill}</p>
                    <span className='percentage'>{percent}%</span>
                </div>
                <div className="bar"></div>
            </div>
            <div className="icon"></div>
        </div>
    );
};

export default Skill;