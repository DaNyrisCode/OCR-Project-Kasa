/* eslint-disable react/prop-types */

const LocationTags = ({ title, location, tags }) => {
    return (
        <div className="location-tags">
            <h1>{title}</h1>
            <h2>{location}</h2>

            <div className="tags">
                {tags && tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LocationTags;
