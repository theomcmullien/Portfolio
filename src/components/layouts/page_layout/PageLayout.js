import { useEffect, useState } from 'react';
import './PageLayout.css';

const PageLayout = ({ page, children }) => {
    const [slide, setSlide] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (page) {
            setSlide(`${page}-slide`);
            setTitle(page[0].toUpperCase() + page.substring(1));
        }
    }, [page]);

    useEffect(() => {
        if (slide) {
            const section = document.querySelector(`.${slide}`);
            setTimeout(() => {
                section.style.transition = 'all 1s';
            }, 100);
        }
    }, [slide]);

    useEffect(() => {
        const handleScroll = () => {
            if (slide) {
                const section = document.querySelector(`.${slide}`);
                const scrollPosition = window.scrollY;
                const sectionPosition = section.offsetTop;
                const windowHeight = window.innerHeight;
                const inPosition = scrollPosition > sectionPosition - windowHeight + 150 && scrollPosition < sectionPosition + 400;
                
                if (inPosition) section.classList.add('layout-animated');
                else section.classList.remove('layout-animated');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [slide]);

    return (
        <div className={`layout-container ${slide}`}>
            <h1 className='layout-heading'>{title}</h1>
            {children}
        </div>
    );
}

export default PageLayout;