import { combineReducers } from 'redux';
import tvShowReducer from './tvShowReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  tvShowReducer,
  routing: routerReducer
});

export default rootReducer;
