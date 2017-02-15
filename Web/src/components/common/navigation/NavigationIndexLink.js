import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';

const NavigationIndexLink = ({to, pageName}) => {
  return (
    <IndexLink to={to} className="nav-item">{pageName}</IndexLink>
  );
};

NavigationIndexLink.propTypes = {
  to: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
};

export default NavigationIndexLink;
