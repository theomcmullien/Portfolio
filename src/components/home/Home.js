import './Home.css';
import TypeWriter from '../../components/typewriter/TypeWriter';

const Home = () => {
    return (
        <div className='home-bg-container'>
            <div className='home-container slide-left'>
                <h2 className='mb-3'>Hello</h2>
                <h1 className='mb-3'>I'm Theo McMullien</h1>
                <TypeWriter />
            </div>
        </div>
    );
}

export default Home;