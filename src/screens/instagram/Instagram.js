import React from 'react';

import './Instagram.css';
import PlayerPosts from '../../components/instagram/PlayerPosts';
import InstagramSlider from '../../components/instagram/InstagramSlider';
export default function Instagram() {
  const playersDummyData = [
    { id: 1, name: 'Rahim Sterling' },
    { id: 2, name: 'Kai Havertz' },
    { id: 3, name: 'Trevor Chalobah' },
  ];
  return (
    <div className="instagram-container">
      {/* Slider Container */}
      <InstagramSlider />

      {/* Player Container */}
      {playersDummyData?.map(({ id, name }) => (
        <>
          {' '}
          <hr />
          <PlayerPosts key={id} playerName={name} />
        </>
      ))}
      <hr />
    </div>
  );
}
