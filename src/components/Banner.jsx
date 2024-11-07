import img from '../assets/Img-home.jpg';

const Banner = () => {
    return (
        <div className="banner">
            <img src={img} alt="Image page d'accueil" />
            <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;