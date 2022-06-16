import PropTypes from 'prop-types';

const ProfileRocket = ({ name }) => (
  <div className="profile-item">
    { name }
  </div>
);

ProfileRocket.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileRocket;
