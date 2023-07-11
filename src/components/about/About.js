import './About.css';

const About = () => {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const section = document.querySelector('.about-section');
        const sectionPosition = section.offsetTop;
        const windowHeight = window.innerHeight;
      
        if (scrollPosition > sectionPosition - windowHeight + 150 && scrollPosition < sectionPosition + 150) {
            section.classList.add('about-animated');
        } else {
            section.classList.remove('about-animated');
        }
    });
    return (
        <div className='about-container'>
            <h1 className='about-section'>About</h1>
        </div>
    );
}

export default About;