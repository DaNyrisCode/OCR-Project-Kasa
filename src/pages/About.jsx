import Banner from '../components/Banner';
import Valors from '../components/ValorsAccordion';
import img from '../assets/Img-apropos.jpg';

const About = () => {
    return (
        <main className='optimal-width'>
            <Banner img={img} />
            <Valors />
        </main>
    );
};

export default About;