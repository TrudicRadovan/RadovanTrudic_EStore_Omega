import React from 'react';
import LoginFormik from '../Login/LoginFormik';
import './Favourites.css';

const Favourites = () => {
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <LoginFormik></LoginFormik>
    </div>
  );
};

export default Favourites;
