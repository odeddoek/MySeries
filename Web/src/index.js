/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import '../node_modules/bulma/css/bulma.css';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import {syncHistoryWithStore} from 'react-router-redux';
import {loadShows} from './actions/tvShowActions';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

const store = configureStore();
store.dispatch(loadShows());

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' }),
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <ApolloProvider client={client} store={store}>
  <Router history={history} routes={routes}/>
</ApolloProvider>, document.getElementById('app'));
