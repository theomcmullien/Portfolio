import { useEffect, useState } from 'react';
import './PageLayout.css';

const PageLayout = ({ page, height, children }) => {
    const [slide, setSlide] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(`.${slide}`);
            const scrollPosition = window.scrollY;
            const sectionPosition = section.offsetTop;
            const windowHeight = window.innerHeight;
            let inPosition = scrollPosition > sectionPosition - windowHeight + 150 && scrollPosition < sectionPosition + 800;
            
            inPosition = true; //temporary

            if (inPosition) {
            section.classList.add('layout-animated');
            } else {
                section.classList.remove('layout-animated');
            }
        };

        if (page) {
            setSlide(`${page}-slide`);
            setTitle(page[0].toUpperCase() + page.substring(1));
        }

        if (slide) {
            const section = document.querySelector(`.${slide}`);
            setTimeout(() => {
                section.style.transition = 'all 1s';
            }, 100);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page, slide]);

    return (
        <div className={`layout-container ${slide}`}>
            <h1 className='layout-heading'>{title}</h1>
            {children}
        </div>
    );
}

export default PageLayout;