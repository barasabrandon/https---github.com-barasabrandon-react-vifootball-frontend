import React from 'react';

// Images
import Services from '../../assets/images/slider/service.jpg';

export default function OurStory() {
  return (
    <>
      <section id="ourstory" className="services-area pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-30">
                <h5 className="mb-15">Our Story</h5>
                <h3 className="title mb-15">Simple but Robust</h3>
                <p>
                  Vifootball was established in 2020 to enable football fans
                  around the world follow what their idols are doing across
                  social media platforms.
                </p>
              </div>
              {/* <!-- section title --> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="services-left mt-45">
                <div className="services">
                  <img src={Services} alt="" />
                  <a href="/#" className="main-btn mt-30">
                    Read More <i className="lni-chevron-right"></i>
                  </a>
                </div>
                {/* <!-- services btn --> */}
              </div>
              {/* <!-- services left --> */}
            </div>
            <div className="col-lg-6">
              <div className="services-right mt-45">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-sm-8">
                    <div className="single-services text-center">
                      <div className="services-icon">
                        <i className="lni-grid-alt"></i>
                      </div>
                      <div className="services-content mt-20">
                        <h5 className="title mb-10">Images </h5>
                        <p>
                          Get high pixel images of the image posts by your right
                          here on viFootball
                        </p>
                      </div>
                    </div>
                    {/* <!-- single services --> */}

                    <div className="single-services text-center mt-30">
                      <div className="services-icon">
                        <i className="lni-ruler-pencil"></i>
                      </div>
                      <div className="services-content mt-20">
                        <h5 className="title mb-10">Text Post</h5>
                        <p>
                          We arrange the diffrerent written posts by your star
                          in a convenient way.
                        </p>
                      </div>
                    </div>
                    {/* <!-- single services --> */}
                  </div>
                  <div className="col-md-6 col-sm-8">
                    <div className="single-services text-center">
                      <div className="services-icon">
                        <i className="lni-customer"></i>
                      </div>
                      <div className="services-content mt-20">
                        <h5 className="title mb-10">Videos</h5>
                        <p>
                          Like watching what your celebrity does? Enjoy watching
                          videos from different sources.
                        </p>
                      </div>
                    </div>
                    {/* <!-- single services --> */}

                    <div className="single-services text-center mt-30">
                      <div className="services-icon">
                        <i className="lni-support"></i>
                      </div>
                      <div className="services-content mt-20">
                        <h5 className="title mb-10">Info</h5>
                        <p>
                          Latest upto date information about all football
                          players across the globe.
                        </p>
                      </div>
                    </div>
                    {/* <!-- single services --> */}
                  </div>
                </div>
                {/* <!-- row --> */}
              </div>
              {/* <!-- services right --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
}
