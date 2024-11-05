import data from '../data/rental.json';
import '../styles/main.css';

const RentalGrid = () => {
  return (
    <div className="rental-grid">
      {data.map(rental => (
        <div key={rental.id} className="rental-card">
          <img src={rental.cover} alt={rental.title} className="rental-image" />
          <div className="rental-title">{rental.title}</div>
        </div>
      ))}
    </div>
  );
};

export default RentalGrid;
