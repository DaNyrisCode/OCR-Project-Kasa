import { useLocation } from 'react-router-dom';
import img from '../assets/Img-home.jpg';
import img2 from '../assets/Img-apropos.jpg';

const Banner = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';

    return (
        <div className="banner optimal-width">
            {isHomePage && (
                <>
                    <img src={img} alt="Image page d'accueil" />
                    <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
                </>
            )}
            {isAboutPage && (
                <img src={img2} alt="Image page à propos" />
            )}
        </div>
    );
};

export default Banner;