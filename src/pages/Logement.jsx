import data from '../data/rental.json';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Diapo from '../components/Slideshow';
import MainComponentRental from '../components/MainComponentRental';

const Logement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState({});

    useEffect(() => {
        const find = data.find(logement => logement.id === id);
        setLogement(find);
    }, [id])

    return (
        <main className='optimal-width'>
            <Diapo slides={logement.pictures || []} />
            <MainComponentRental 
                title={logement.title} 
                location={logement.location} 
                tags={logement.tags} 
                name={logement.host?.name} 
                picture={logement.host?.picture} 
                rating={logement.rating}
            />
        </main>
    ); 
};

export default Logement;