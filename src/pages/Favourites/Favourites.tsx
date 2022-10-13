import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import './Favourites.css';

const Favourites = () => {
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <ImageSlider></ImageSlider>
    </div>
  );
};

export default Favourites;
