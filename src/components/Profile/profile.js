import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMissions from './profile_components/ProfileMissions';

export default function Profile() {
  const missionData = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <div>
        <h2>My Rockets</h2>
      </div>
      <div>
        <h2>My Missions</h2>
        {missionData.filter((data) => data.reserved)
          .map((filteredData) => (
            <ProfileMissions
              key={filteredData.mission_id}
              missionName={filteredData.mission_name}
            />
          ))}
      </div>
    </div>
  );
}
