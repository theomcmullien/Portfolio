import './SideNavBar.css';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const SideNavBar = () => {
    const [activeItem, setActiveItem] = useState('section1');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop - 100) {
                    setActiveItem(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <div className='nav-header'>
                <h4>Theo McMullien</h4>
            </div>
            <ul>
                <li>
                    <Link className={activeItem === 'section1' ? 'link active' : 'link'} to="home" smooth={true} duration={0}>
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section2' ? 'link active' : 'link'} to="about" smooth={true} duration={0}>
                        <i className="fa-solid fa-user"></i>
                        <p>About</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section3' ? 'link active' : 'link'} to="skills" smooth={true} duration={0}>
                        <i className="fa-solid fa-award"></i>
                        <p>Skills</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section4' ? 'link active' : 'link'} to="education" smooth={true} duration={0}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <p>Education</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section5' ? 'link active' : 'link'} to="experience" smooth={true} duration={0}>
                        <i className="fa-solid fa-briefcase"></i>
                        <p>Experience</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section6' ? 'link active' : 'link'} to="contact" smooth={true} duration={0}>
                        <i className="fa-solid fa-phone"></i>
                        <p>Contact</p>
                    </Link>
                </li>
            </ul>
            <div className='nav-footer pb-3'>
                <h6 className='mb-3'>&copy; Copyright 2023</h6>
                <h6 className='fst-italic'>Designed by Theo McMullien</h6>
            </div>
        </nav>
    );
}

export default SideNavBar;