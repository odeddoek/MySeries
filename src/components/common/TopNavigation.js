import React from 'react';
import {Link, IndexLink} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class TopNavigation extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <a href="#" className="nav-item logo-text">MySerias</a>
          </div>
          <span className="nav-toggle">
            <span/>
            <span/>
            <span/>
          </span>

          <div className="nav-right nav-menu">
            <IndexLink to="/" className="nav-item">Home</IndexLink>
            <Link to="/shows" className="nav-item">Shows list</Link>
            <Link to="/about" className="nav-item">About</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNavigation;
