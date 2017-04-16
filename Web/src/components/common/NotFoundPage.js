import React from 'react';
import {Link} from 'react-router';

const NotFoundPage = () => {
  return (
    <section className="section">
      <div className="container content">
        <h4>
          404 Page Not Found
        </h4>
        <Link to="/">
          Go back to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
