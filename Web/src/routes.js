import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import NotFoundPage from './components/common/NotFoundPage';
import FindShows from './components/shows/FindShows';
import ShowsPage from './components/shows/ShowsPage';
import LoginPage from './components/user/LoginPage';
import RegisterPage from './components/user/RegisterPage';
import ShowPage from './components/show/ShowPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterPage}/>
    <Route path="show" component={ShowPage} />
    <Route path="shows" component={ShowsPage}/>
    <Route path="search" component={FindShows}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
