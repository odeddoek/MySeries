import { combineReducers } from 'redux';
import shows from './tvShowReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  shows,
  routing: routerReducer
});

export default rootReducer;
