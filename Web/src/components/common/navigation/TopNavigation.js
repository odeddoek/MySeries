import React, {Component, PropTypes} from 'react';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import GuestNavigation from './GuestNavigation';
import {connect} from 'react-redux';

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
    const {loggedIn} = this.props.user;
    return (
      <nav className="nav">
        <div className="nav-left">
          <a href="#" className="nav-item logo-text">MySerias</a>
        </div>

        {loggedIn
          ? <AuthenticatedNavigation toggleMenu={this.toggleMenu}/>
          : <GuestNavigation toggleMenu={this.toggleMenu}/>}
      </nav>
    );
  }
}

TopNavigation.PropTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {user: state.user};
}

export default connect(mapStateToProps)(TopNavigation);
