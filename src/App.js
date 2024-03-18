import './App.css';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import SideNavBar from './components/side_nav_bar/SideNavBar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Education from './components/pages/education/Education';
import Experience from './components/pages/experience/Experience';
import Contact from './components/pages/contact/Contact';

const App = () => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setHide(window.innerWidth < (1920/1.5) || window.innerHeight < (1080/1.5));
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return hide ? (<p>You thought I made it responsive 😂</p>) : (
        <div className='app-container'>
            <SideNavBar />
            <div className='content-container'>
                <Element id='section1' name="home" className="section">
                    <Home />
                </Element>
                <div className='sub-content-container'>
                    <Element id='section2' name="about" className="section">
                        <About />
                    </Element>
                    <Element id='section3' name="skills" className="section">
                        <Skills />
                    </Element>
                    <Element id='section4' name="education" className="section">
                        <Education />
                    </Element>
                    <Element id='section5' name="experience" className="section">
                        <Experience />
                    </Element>
                    <Element id='section6' name="contact" className="section">
                        <Contact />
                    </Element>
                </div>
            </div>
        </div>
    );
}

export default App;
