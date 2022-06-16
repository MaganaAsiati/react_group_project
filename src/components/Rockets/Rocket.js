import React from 'react';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { bookingAction, cancelBookingAction } from '../../Redux/Rockets/rocket';

export default function Rocket(props) {
  const rocket = props;
  const dispatch = useDispatch();

  const bookRocket = () => {
    dispatch(bookingAction(rocket.id));
  };

  const cancelBooking = () => {
    dispatch(cancelBookingAction(rocket.id));
  };
  return (
    <div className="rocket-container">
      <div className="rocket-image">
        <img className="rocket-img" src={rocket.flickr_images} alt="Rocket" />
      </div>
      <div className="rocket-right">
        <h1 className="rocket-name">{rocket.name}</h1>
        <p className="rocket-description">
          {rocket.reserved && (
            <span className="reverted">
              Reserved
            </span>
          )}
          {rocket.description}
        </p>

        {rocket.reserved ? (
          <button
            type="button"
            onClick={cancelBooking}
            className="cancelBookingAction"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            onClick={bookRocket}
            className="bookingAction"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}
