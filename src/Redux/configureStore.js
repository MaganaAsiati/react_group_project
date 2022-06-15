import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './Rockets/rocket';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
