import React, { useEffect } from 'react';
import './Rocket.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../Redux/Rockets/rocket';
import Rocket from './Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  return (
    <div className="Rockets-container">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          flickr_images={rocket.flickr_images}
          name={rocket.name}
          reserved={rocket?.reserved}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default Rockets;
