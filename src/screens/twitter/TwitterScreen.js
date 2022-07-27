import React from 'react';

// CSS
import './TwitterScreen.css';

// Image
import AdminPic from '../../assets/images/blog/admin.jpg';

export default function TwitterScreen() {
  return (
    <>
      <div className="twitter-container">
        <div className="twitter-content-container">
          {/* Player List Container */}
          <div className="twitter-players-list-container">
            <div className="twitter-single-player-list-search-container">
              <div>
                <input
                  className="twitter-player-search-input"
                  type="text"
                  placeholder="Search..."
                />
                {/* Search Text field */}
              </div>
              <div className="twitter-players-list-container-avatar">
                <img
                  className="twitter-players-list-avatar"
                  src={AdminPic}
                  alt="player img"
                />
              </div>
            </div>

            <div className="twitter-players">
              <div className="twitter-player-list-container">
                <div className="twitter-single-player-list-details">
                  <div className="twitter-players-list-container-avatar">
                    <img
                      className="twitter-players-list-avatar"
                      src={AdminPic}
                      alt="player img"
                    />
                  </div>
                  <div>Sterling@sterling7</div>
                </div>
                <div className="twitter-single-player-list-details">
                  <div className="twitter-players-list-container-avatar">
                    <img
                      className="twitter-players-list-avatar"
                      src={AdminPic}
                      alt="player img"
                    />
                  </div>
                  <div>Sterling@sterling7</div>
                </div>
                <div className="twitter-single-player-list-details">
                  <div className="twitter-players-list-container-avatar">
                    <img
                      className="twitter-players-list-avatar"
                      src={AdminPic}
                      alt="player img"
                    />
                  </div>
                  <div>Sterling@sterling7</div>
                </div>
                <div className="twitter-single-player-list-details">
                  <div className="twitter-players-list-container-avatar">
                    <img
                      className="twitter-players-list-avatar"
                      src={AdminPic}
                      alt="player img"
                    />
                  </div>
                  <div>Sterling@sterling7</div>
                </div>
                <div className="twitter-single-player-list-details">
                  <div className="twitter-players-list-container-avatar">
                    <img
                      className="twitter-players-list-avatar"
                      src={AdminPic}
                      alt="player img"
                    />
                  </div>
                  <div>Sterling@sterling7</div>
                </div>
              </div>
            </div>
          </div>
          <div className="twitter-tweets-container">
            <p>Tweets</p>
            <hr />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              excepturi voluptatum dignissimos quibusdam minus sit repellat
              velit, magni corporis est, volupt
            </div>
            <hr />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              excepturi voluptatum dignissimos quibusdam minus sit repellat
              velit, magni corporis est, volupt
            </div>
            <hr />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              excepturi voluptatum dignissimos quibusdam minus sit repellat
              velit, magni corporis est, volupt
            </div>
            <hr />
          </div>
          {/* Player Profile Info */}
          <div className="twitter-player-profile">
            <div className="twitter-player-profile-avatar-container">
              <img
                className="twitter-player-profile-avatar"
                src={AdminPic}
                alt="player img"
              />
            </div>
            <div className="twitter-player-profile-name">Rahim Sterling</div>
            <div className="twitter-player-profile-stats">
              <div className="twitter-player-profile-followers">
                9M followers
              </div>
              <div className="twitter-player-profile-retweets">
                789 Retweets
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ex maxime, porro reiciendis veritatis unde quas
                reprehenderit necessitatibus iusto iure. Facere similique quae
                recusandae vitae ipsum alias consectetur at delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="twitter-small-screen-footer-container">
        <div className="twitter-small-screen-footer-content">
          <div>Home</div>
          <div>Profile</div>
          <div>Search</div>
        </div>
      </div>
    </>
  );
}
