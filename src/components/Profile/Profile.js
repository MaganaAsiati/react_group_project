import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';
import ProfileMissions from './profile_components/ProfileMissions';

export default function Profile() {
  const missionData = useSelector((state) => state.missionsReducer);

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-sub-section profile-rockets">
          <h2>My Rockets</h2>
          <hr />
        </div>
        <div className="profile-sub-section profile-missions">
          <h2>My Missions</h2>
          <hr />
          {missionData.filter((data) => data.reserved)
            .map((filteredData) => (
              <ProfileMissions
                key={filteredData.mission_id}
                missionName={filteredData.mission_name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
