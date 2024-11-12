/* eslint-disable react/prop-types */
import { useState } from 'react';
import arrow from '../assets/Arrow.png';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={toggleContent}>
                {title}
                {/* Image de l'Arrow */}
                <img
                    src={arrow}
                    alt="flèche"
                    className={`arrow ${isOpen ? 'open' : ''}`}
                />
            </button>
            {isOpen && <div className="accordion-content">{content}</div>} {/* Contenu de l'élément */}
        </div>
    );
};

export default AccordionItem;
