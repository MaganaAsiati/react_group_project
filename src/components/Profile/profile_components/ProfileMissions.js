import PropTypes from 'prop-types';

const ProfileMissions = ({ missionName }) => (
  <div className="profile-item">
    {missionName}
  </div>
);

ProfileMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default ProfileMissions;
