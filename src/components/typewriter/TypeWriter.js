import { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = 1000;
        const words = ['Software Developer.', 'Problem Solver.',  'Web Developer.', 'Team Player.', 'Fullstack Developer.', 'Creative Person.'];
        const word = words[index];
        
        const timeout = setTimeout(() => {
            setText(word.substring(0, isDeleting ? text.length - 1 : text.length + 1));

            if (!isDeleting && text.length === word.length) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            }
            else if (isDeleting && text.length === 0) {
                setIndex((index + 1) % words.length);
                setIsDeleting(false);
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        
        return () => clearTimeout(timeout);
    }, [text, index, isDeleting]);

    return (
        <span className='text'>
            A
            <span className='wrap'> {text}</span>
        </span>
    );
}

export default TypeWriter;