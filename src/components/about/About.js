import './About.css';

const About = () => {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const section = document.querySelector('.about-slide-left');
        const sectionPosition = section.offsetTop;
        const windowHeight = window.innerHeight;
      
        if (scrollPosition > sectionPosition - windowHeight + 150 && scrollPosition < sectionPosition + 200) {
            section.classList.add('about-animated');
        }
        else {
            section.classList.remove('about-animated');
        }
    });
    return (
        <div className='about-bg'>
            <div className='about-container about-slide-left'>
                <h1 className='about-heading'>About</h1>
                <h2 className='about-subheading'>
                    <span>I am a </span>
                    <span>Software Developer</span>
                </h2>
                <div className="about-text">
                    <p>Hi! I'm Theo, a passionate and motivated Bachelor of Information Technology graduate.</p>
                    <p>My three years of studying has provided me with a strong foundation of knowledge in software development, design fundamentals, web development and advanced programming.</p>
                    <p>Achieving team awards during my study, I have proven my ability to perform well in team-oriented projects, communicating ideas, providing critical feedback and contributing to the success of the projects.</p>
                    <p>Always willing to learn and try new ideas to further develop my skills. I am eager to start my journey of continuous learning as a Software Developer.</p>
                </div>
                <a href='/resume.pdf' download class="about-link">Download Resume</a>
            </div>
        </div>
    );
}

export default About;