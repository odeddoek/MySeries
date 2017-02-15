import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const NavigationLink = ({to, pageName}) => {
  return (
    <Link to={to} className="nav-item">{pageName}</Link>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired
};

export default NavigationLink;
