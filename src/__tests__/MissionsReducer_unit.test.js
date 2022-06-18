import missionsReducer, { showMissions, joinMission, leaveMission } from '../Redux/missions/missions';
import missionsApiData from '../__testData__/missionsApiData';

const apiData = missionsApiData;

describe('SHOW_MISSIONS action', () => {
  it('Should update the state with API data', () => {
    // Fire showMissions to the missionReducer
    expect(missionsReducer(apiData, showMissions(apiData)))
      // Expect the state to be updated with the apiData
      .toEqual(apiData);
  });
});

describe('JOIN_MISSION action', () => {
  it('Should update the state with correct id to reserved: true', () => {
    // Mission id to test
    const missionId = 'CE91D46';
    // Fire joinMission to the missionReducer with the above id
    expect(missionsReducer(apiData, joinMission(missionId)))
      // Expect the state of the correct id to be updated with reserved property to true
      // And expect the states of the other id's to remain the same
      .toEqual(apiData.map((d) => (d.mission_id === missionId ? { ...d, reserved: true } : d)));
  });
});

describe('LEAVE_MISSION action', () => {
  it('Should update the state with correct id to reserved: false', () => {
    // Mission id to test
    const missionId = 'FE3533D';
    // Fire leaveMission to the missionReducer with the above id
    expect(missionsReducer(apiData, leaveMission(missionId)))
      // Expect the state of the correct id to be updated with reserved property to false
      // And expect the states of the other id's to remain the same
      .toEqual(apiData.map((d) => (d.mission_id === missionId ? { ...d, reserved: false } : d)));
  });
});
