import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Not Found 404</h2>
      <p>Sorry, that page cannot be found.</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
