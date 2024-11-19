import data from '../data/rental.json';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
//import Diapo from '../components/Slideshow';

const Logement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState({});

    useEffect(() => {
        const find = data.find(logement => logement.id === id);
        setLogement(find);
    }, [])

    /*return (
        <main className='optimal-width'>
            <Diapo slides={logement.pictures} />
            <h1>{logement.title}</h1>
        </main>
    ); */
};

export default Logement;