/* eslint-disable react/prop-types */
import LocationTags from './LocationTags';
import HostRating from './HostRating';

const MainComponentRental = ({ title, location, tags, name, picture, rating }) => {
    return (
      <section className="rental-section">
        <LocationTags 
          title={title} 
          location={location} 
          tags={tags} 
        />
        <HostRating 
          name={name} 
          picture={picture} 
          rating={rating} 
        />
      </section>
    );
  };

export default MainComponentRental;
