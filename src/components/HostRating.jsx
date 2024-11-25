/* eslint-disable react/prop-types */
import raitingfull from '../assets/star-active.png';
import raitingempty from '../assets/star-inactive.png';

const HostRating = ({ name, picture, rating }) => {
  // Sépare le nom et le prénom
  const [firstName, lastName] = name ? name.split(" ") : ["", ""];

  // Converti la note en nombre
  const starArray = Array(5).fill(false);
  starArray.fill(true, 0, rating);

  return (
    <div className="host">
      <div className="host-profil">
        <p>{firstName}<br />{lastName}</p>
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

