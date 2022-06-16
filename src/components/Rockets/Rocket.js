import React from 'react';

export default function Rocket(props) {
  const rocket = props;
  return (

    <div className="rocket-container">
      <div className="rocket-image">
        <img className="rocket-img" src={rocket.flickr_images} alt="Rocket" />
        <div>
          <h1 className="rocket-name">{rocket.name}</h1>
          <p className="rocket-description">{rocket.description}</p>
          <button type="button" className="rocket-button">
            Reserve Rocket
          </button>
        </div>
      </div>
    </div>
  );
}
