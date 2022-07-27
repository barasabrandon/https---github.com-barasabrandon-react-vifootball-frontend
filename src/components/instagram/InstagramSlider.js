import React from 'react';

// Images
import PlayerInstagramImage from '../../assets/images/players/kovacic.jpeg';

export default function InstagramSlider() {
  return (
    <div className="instagram-container-slider">
      <img
        src={PlayerInstagramImage}
        alt="PlayerInstagramImage"
        className="instagram-container-slider-image-overlay"
      />
      <div className="instagram-container-slider-text-container">
        <div className="instagram-container-slider-text">
          <span>Player-Like-Icon </span>
          <span> Christiano Ronaldo</span>
        </div>
        <div className="instagram-container-slider-text">
          <span>Club Icon </span>
          <span> Manchester United </span>
        </div>
        <div className="instagram-container-slider-text">
          <span>Position Icon </span>
          <span>Forward</span>
        </div>
      </div>
    </div>
  );
}
