import React from 'react';

// Images
import Slider1 from '../../assets/images/slider/1.jpg';

export default function Slider() {
  return (
    <>
      <div className="single-slider">
        <div className="slider-bg">
          <div className="row no-gutters align-items-center ">
            <div className="col-lg-4 col-md-5">
              <div className="slider-product-image d-none d-md-block">
                <img src={Slider1} alt="Slider" />
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="slider-product-content">
                <h1
                  className="slider-title mb-10"
                  data-animation="fadeInUp"
                  data-delay="0.3s"
                >
                  <span>ViFootball</span>
                </h1>
                <p
                  className="mb-25"
                  data-animation="fadeInUp"
                  data-delay="0.9s"
                >
                  Get Tweets, Instagram Posts, Tiktok Videos and images,
                  Facebook Posts, <br />
                  And many other social media Platforms from footballers around
                  the globe.
                </p>
                <a
                  className="main-btn"
                  href="/#"
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                >
                  Explore More <i className="lni-chevron-right"></i>
                </a>
              </div>
              {/* 
                //   <!-- slider product content --> */}
            </div>
          </div>
          {/* 
        //   <!-- row --> */}
        </div>
        {/*
    //    <!-- container --> */}
      </div>
    </>
  );
}
