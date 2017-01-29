import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import TopNavigation from './common/TopNavigation';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TopNavigation/>
        <section className="section">
          {this.props.children}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
