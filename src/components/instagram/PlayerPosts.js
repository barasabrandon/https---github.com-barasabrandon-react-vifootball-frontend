import React from 'react';

import FootballFieldGrass from '../../assets/images/football-field.jpg';
import serviceImage from '../../assets/images/services/service.jpg';
import testingVideo from '../../assets/videos/testingVideo.mp4';
import TypeOfPost from './TypeOfPost';

export default function PlayerPosts({ playerName }) {
  const dummyDataText = [
    {
      id: 1,
      nameOfPlayer: 'Rahim Sterling',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quismagnam praesentium odio animi, debitis des',
      likes: 489,
      followers: '2M',
    },
    {
      id: 2,
      nameOfPlayer: 'Thiago Silva',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quismagnam praesentium odio animi, debitis des',
      likes: 1000,
      followers: '4M',
    },
    {
      id: 3,
      nameOfPlayer: 'Eduardo Mendy',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quismagnam praesentium odio animi, debitis des',
      likes: 6748,
      followers: '7M',
    },
  ];
  const dummyDataVideo = [
    {
      id: 1,
      videoUrl: testingVideo,
      likes: 489,
      followers: '2M',
    },
    {
      id: 2,
      videoUrl: testingVideo,
      likes: '&M',
      followers: '3M',
    },
    {
      id: 3,
      videoUrl: testingVideo,
      likes: 578,
      followers: '70M',
    },
  ];

  const dummyDataImages = [
    {
      id: 1,
      imageUrl: serviceImage,
    },
    {
      id: 2,
      imageUrl: serviceImage,
    },
    {
      id: 3,
      imageUrl: serviceImage,
    },
    {
      id: 5,
      imageUrl: serviceImage,
    },
    {
      id: 6,
      imageUrl: serviceImage,
    },
  ];

  return (
    <div className="players-posts-container">
      {/* Player's Name */}
      <div className="player-name-container">
        <h5>{playerName} </h5>
      </div>
      {/* Player's Text Post */}
      <div>
        <TypeOfPost text="Text Posts" />
        <div className="instagram-container-content">
          {dummyDataText?.map(
            ({ id, nameOfPlayer, text, likes, followers }) => (
              <div className="instagram-container-content-card-text">
                <img
                  src={FootballFieldGrass}
                  alt="Football Field"
                  className="instagram-container-content-card-text"
                />
                <div className="instagram-container-content-card-text-overlay">
                  <div>
                    <p className="instagram-container-content-card-text-overlay-p">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quis magnam praesentium odio animi, debitis des
                    </p>
                  </div>
                  <div className="instagram-container-content-card-text-overlay-footer">
                    <div>Likes: 200</div>
                    <div>Followers: 5900</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Player's Video Post */}
      <div>
        <TypeOfPost text="Video Posts" />
        <div className="instagram-container-content">
          {dummyDataVideo?.map(({ id, videoUrl, likes, followers }) => (
            <div className="instagram-container-content-card" key={id}>
              <div className="instagram-video-container">
                <video
                  className="instagram-video"
                  src={videoUrl}
                  //   autoPlay
                  loop
                />
              </div>
              <div className="instagram-video-play">Play</div>
              <div className="instagram-video-stats">
                <div>
                  <div>Lyk </div>
                  <div>{likes}</div>
                </div>
                <div>
                  <div>Fol </div>
                  <div>{followers}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <TypeOfPost text="Image Posts" />
        <div className="instagram-container-content">
          {dummyDataImages?.map(({ id, imageUrl }) => (
            <div className="instagram-container-content-card" key={id}>
              <img className="instagram-post-image" src={imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
