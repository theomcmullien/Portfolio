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
            <div className='nav-header slide-right'>
                <span className='name'>Theo McMullien</span>
            </div>
            <ul className='slide-right'>
                <li>
                    <Link className={activeItem === 'section1' ? 'link active' : 'link'} to="home" smooth={true} duration={0}>
                        <i className="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section2' ? 'link active' : 'link'} to="about" smooth={true} duration={0}>
                        <i className="fa-solid fa-user"></i>
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section3' ? 'link active' : 'link'} to="skills" smooth={true} duration={0}>
                        <i className="fa-solid fa-award"></i>
                        <span>Skills</span>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section4' ? 'link active' : 'link'} to="education" smooth={true} duration={0}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span>Education</span>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section5' ? 'link active' : 'link'} to="experience" smooth={true} duration={0}>
                        <i className="fa-solid fa-briefcase"></i>
                        <span>Experience</span>
                    </Link>
                </li>
                <li>
                    <Link className={activeItem === 'section6' ? 'link active' : 'link'} to="contact" smooth={true} duration={0}>
                        <i className="fa-solid fa-phone"></i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
            <div className='nav-footer slide-right pb-3'>
                <h6 className='mb-3'>&copy; Copyright 2023</h6>
                <h6 className='fst-italic'>Designed by Theo McMullien</h6>
            </div>
        </nav>
    );
}

export default SideNavBar;