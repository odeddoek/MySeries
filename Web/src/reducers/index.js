import {combineReducers} from 'redux';
import shows from './tvShowReducer';
import user from './userReducer'
import {routerReducer} from 'react-router-redux';
import {client} from './../apollo-client';

const rootReducer = combineReducers({shows, user, routing: routerReducer, apollo: client.reducer()});

export default rootReducer;
