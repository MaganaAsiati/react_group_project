import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './Rockets/rocket';

const reducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
