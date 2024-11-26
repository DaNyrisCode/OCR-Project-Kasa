import data from '../data/rental.json';
import { Link } from 'react-router-dom';

//* COMPOSANT pour HOME : Cards des logements
const RentalGrid = () => {
  return (
    <div className="rental-grid">
      {data.map(rental => (
        <Link to={`/logement/${rental.id}`} key={rental.id} className="rental-card">
          <img src={rental.cover} alt={rental.title} className="rental-image" />
          <div className="rental-title">{rental.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default RentalGrid;
