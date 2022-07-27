import React from 'react';

// Images

import Logo from './assets/images/logo.png';
import FooterContactInfo from './components/FooterContactInfo';

export default function Footer() {
  return (
    <>
      <section id="footer" className="footer-area">
        <div className="container">
          <div className="footer-widget pt-75 pb-120">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-7">
                <div className="footer-logo mt-40">
                  <a href="/#">
                    <img src={Logo} alt="Logo" />
                  </a>
                  <p className="mt-10">
                    Get Tweets, Instagram Posts, Tiktok Videos and images,
                    Facebook Posts, And many other social media Platforms from
                    footballers around the globe.
                  </p>
                  <ul className="footer-social mt-25">
                    <li>
                      <a href="/#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="lni-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- footer logo --> */}
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5">
                <div className="footer-link mt-50">
                  <h5 className="f-title">Services</h5>
                  <ul>
                    <li>
                      <a href="/#">Instagram Posts</a>
                    </li>
                    <li>
                      <a href="/#">Twitter Posts</a>
                    </li>
                    <li>
                      <a href="/#">Tiktok Posts</a>
                    </li>
                    <li>
                      <a href="/#">Youtube Posts</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- footer link --> */}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="footer-link mt-50">
                  <h5 className="f-title">Help</h5>
                  <ul>
                    <li>
                      <a href="/#">Help Center</a>
                    </li>
                    <li>
                      <a href="/#">Contact Us</a>
                    </li>
                    <li>
                      <a href="/#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- footer link --> */}
              </div>
              <div className="col-lg-4 col-md-5 col-sm-7">
                <FooterContactInfo />
                {/* <!-- footer link --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- footer widget --> */}
          <div className="footer-copyright pt-15 pb-15">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p>
                    Design by{' '}
                    <a
                      href="https://brandon-wanambisi-655ef.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Brandon Wanambisi
                    </a>
                  </p>
                </div>
                {/* <!-- copyright --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!--  footer copyright --> */}
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
}
