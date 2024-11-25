/* eslint-disable react/prop-types */

const Banner = ({ img, text }) => {
    return (
        <div className="banner">
            <img src={img} alt="Image bannière" />
            {text && <h1 className='banner-text'>{text}</h1>}
        </div>
    );
};

export default Banner;