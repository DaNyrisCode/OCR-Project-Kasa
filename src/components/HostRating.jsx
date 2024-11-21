/* eslint-disable react/prop-types */
import raitingfull from '../assets/star-active.png';
import raitingempty from '../assets/star-inactive.png';

const HostRating = ({ name, picture, rating }) => {
  // Converti la note en nombre
  const starArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    starArray[i] = true;
  }

  return (
    <div className="host">
        <div className="host-profil">
            <p>{name}</p>
            <div className="host-photo">
                <img src={picture} alt={name} className="host-picture" />
            </div>
        </div>
      <div className="host-rating">
        {starArray.map((filled, index) => (
          <img
            key={index}
            src={filled ? raitingfull : raitingempty}
            alt="star"
            className="star-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default HostRating;
