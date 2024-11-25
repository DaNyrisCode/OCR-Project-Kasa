import Banner from '../components/Banner';
import RentalGrid from '../components/RentalGrid';
import img from '../assets/Img-home.jpg';

const Home = () => {
    return (
        <main className='optimal-width'>
            <Banner img={img} text="Chez vous, partout et ailleurs" />
            <RentalGrid />
        </main>
    );
};

export default Home;