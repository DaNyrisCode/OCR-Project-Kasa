/* eslint-disable react/prop-types */
import ArrowLeft from '../assets/SlideArrowleft.png';
import ArrowRight from '../assets/SlideArrowRight.png';
import { useState } from 'react';

//* COMPOSANT pour LOGEMENT : Caroussel
const Diapo = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;

    // Image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Image précédente
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
        );
    };

    return (
        <div className="slideshow">
            {/* Image */}
            <div className="slideshow-images">
                <img src={slides[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>

            {/* Indicateur de position */}
            <div className="indicator">
                {currentIndex + 1}/{slides.length}
            </div>

            {/* Arrows de navigation */}
            <button className="prev" onClick={prevSlide}><img src={ArrowLeft} alt="Image Precedente" /></button>

            <button className="next" onClick={nextSlide}><img src={ArrowRight} alt="Image Suivante" /></button>
        </div>
    );
};

export default Diapo;