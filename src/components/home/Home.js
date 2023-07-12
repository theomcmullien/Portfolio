import './Home.css';
import TypeWriter from '../../components/typewriter/TypeWriter';

const Home = () => {
    return (
        <div className='home-bg-container'>
            <div className='home-container'>
                <div className='home-group slide-left'>
                    <h2 className='hover-grow mb-3'>Hello</h2>
                    <h1 className='hover-grow mb-3'>I'm Theo McMullien</h1>
                    <TypeWriter className='hover-grow' />
                </div>
            </div>
        </div>
    );
}

export default Home;