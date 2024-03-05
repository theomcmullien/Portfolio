import { useEffect, useState } from 'react';
import './PageLayout.css';

const PageLayout = ({ page, children }) => {
    const [pageClass, setPageClass] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const pageMap = {
            about: 'about-slide',
            skills: 'skills-slide',
            education: 'education-slide',
            experience: 'experience-slide',
            contact: 'contact-slide'
        };

        setPageClass(pageMap[page] || '');
        setTitle(page[0].toUpperCase() + page.substring(1))

        const handleScroll = () => {
            const section = document.querySelector(`.${pageMap[page]}`);
            if (!section) return;
            const scrollPosition = window.scrollY;
            const sectionPosition = section.offsetTop;
            const windowHeight = window.innerHeight;
            const inPosition = scrollPosition > sectionPosition - windowHeight + 150 && scrollPosition < sectionPosition + 200;
            
            if (inPosition) section.classList.add('layout-animated');
            else section.classList.remove('layout-animated');
        };

        window.addEventListener('scroll', handleScroll);

        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll(`.${pageMap[page]}`);
            elements.forEach(element => {
                element.classList.add('transition-enabled');
            });
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);
    
    return (
        <div className={`layout-container ${pageClass}`}>
            <h1 className='layout-heading'>{title}</h1>
            {children}
        </div>
    );
}

export default PageLayout;