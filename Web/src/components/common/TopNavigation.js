import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class TopNavigation extends Component {

  toggleMenu() {
    let toggle = document.querySelector(".nav-toggle");
    let menu = document.querySelector(".nav-menu");
    toggle.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a href="#" className="nav-item logo-text">MySerias</a>
        </div>
        <span id="nav-toggle" className="nav-toggle" onClick={this.toggleMenu.bind(this)}>
          <span/>
          <span/>
          <span/>
          <span/>
        </span>

        <div id="nav-menu" className="nav-right nav-menu">
          <IndexLink to="/" className="nav-item">Home</IndexLink>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/shows" className="nav-item">Shows list</Link>
          <Link to="/about" className="nav-item">About</Link>
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
