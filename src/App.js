import './App.css';
import { Element } from 'react-scroll';
import SideNavBar from './components/sidenavbar/SideNavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='app-container'>
      <SideNavBar />
      <div className='content-container'>
        <Element id='section1' name="home" className="section">
          <Home />
        </Element>
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
  );
}

export default App;