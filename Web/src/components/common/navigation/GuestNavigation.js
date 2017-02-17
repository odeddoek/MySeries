import React, {PropTypes} from 'react';
import NavigationLink from './NavigationLink';
import NavigationIndexLink from './NavigationIndexLink';

const GuestNavigation = ({toggleMenu}) => {

  return (
    <div>
      <span id="nav-toggle" className="nav-toggle" onClick={toggleMenu}>
        <span/>
        <span/>
        <span/>
      </span>

      <div id="nav-menu" className="nav-right nav-menu">
        <NavigationIndexLink to="/" pageName="Home"/>
        <NavigationLink to="/login" pageName="Login"/>
        <NavigationLink to="/register" pageName="Register"/>
        <NavigationLink to="/about" pageName="About"/>
      </div>
    </div>
  );
};

GuestNavigation.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default GuestNavigation;
