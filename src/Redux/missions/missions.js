import { MISSIONS_URL } from '../../url_config';

// Actions
const SHOW_MISSIONS = 'react_group_project/missions/SHOW_MISSIONS';
const JOIN_MISSION = 'react_group_project/missions/JOIN_MISSION';
const LEAVE_MISSION = 'react_group_project/missions/LEAVE_MISSION';

// Action creators
export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});

export const fetchMissions = () => (
  (dispatch) => {
    fetch(MISSIONS_URL)
      .then((response) => response.json())
      .then((json) => dispatch(showMissions(json)));
  }
);

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    case JOIN_MISSION:
      return state.map((m) => (m.mission_id === action.id ? { ...m, reserved: true } : m));
    case LEAVE_MISSION:
      return state.map((m) => (m.mission_id === action.id ? { ...m, reserved: false } : m));
    default:
      return state;
  }
};

export default missionsReducer;
