import './Skills.css';
import PageLayout from '../../layouts/page_layout/PageLayout';
import { useEffect } from 'react';

const Skills = () => {
    const skills = [
        { percent: 80, image: 'net_framework.png', name: '.NET Framework' },
        { percent: 95, image: 'ms_sql_server.png', name: 'MS SQL Server' },
        { percent: 90, image: 'csharp.png', name: 'C#' },
        { percent: 85, image: 'rest_api.png', name: 'REST API' },
        { percent: 85, image: 'javascript.png', name: 'JavaScript' },
        { percent: 75, image: 'devops.png', name: 'DevOps' },
        { percent: 75, image: 'react.png', name: 'React.js' },
        { percent: 80, image: 'github.png', name: 'GitHub' },
        { percent: 90, image: 'html.png', name: 'HTML' },
        { percent: 75, image: 'source_control.png', name: 'Source Control' },
        { percent: 75, image: 'css.png', name: 'CSS' },
        { percent: 60, image: 'flutter.png', name: 'Flutter/Dart' },
        { percent: 70, image: 'bootstrap.png', name: 'Bootstrap' },
        { percent: 85, image: 'jade.png', name: 'JADE' }
    ];

    useEffect(() => {
        skills.forEach((data, index) => {
            const bar = document.getElementById(`bar-${index}`);
            if (bar) bar.style.width = `${data.percent}%`;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='skills-bg'>
            <PageLayout page='skills'>
                <div className='skills-container'>
                    {
                        skills.map((data, index) => (
                            <div className='skill-item'>
                                <img className='icon' src={`images/skills_icons/${data.image}`} alt='Skill Icon' />
                                <div className='group'>
                                    <span className='title'>{data.name}</span>
                                    <div className='bar' id={`bar-${index}`}>
                                        <span className='percent-text'>{data.percent}%</span>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
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