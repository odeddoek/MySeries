import React, {PropTypes} from 'react';
import TopNavigation from './common/TopNavigation';
import Footer from './common/Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation/>
        <section className="section">
          <div className="container content">
            {this.props.children}
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
