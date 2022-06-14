// API
const url = 'https://api.spacexdata.com/v3/missions';

// Actions
const SHOW_MISSIONS = 'react_group_project/missions/SHOW_MISSIONS';

// Action creators
export const showMissions = (data) => ({
  type: SHOW_MISSIONS,
  data,
});

export const fetchMissions = () => (
  (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(showMissions(json)));
  }
);

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return action.data;
    default:
      return state;
  }
};

export default missionsReducer;
