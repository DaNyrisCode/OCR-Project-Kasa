/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>404</h1>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas</p>
            <NavLink to="/" className={'error-link'}>Retournez sur la page d'accueil</NavLink>
        </div>
    );
};

export default Error;