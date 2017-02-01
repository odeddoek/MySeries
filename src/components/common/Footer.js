import React from 'react';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>MySerias</strong> by <a href="#">Oded Dwek</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
