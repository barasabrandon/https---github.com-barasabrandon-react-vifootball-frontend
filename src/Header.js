import React from 'react';

// CSS
import './screens/home/HomeScreen.css';
import './screens/home/HomeScreenAnimate.css';
import './screens/home/HomeScreenDefault.css';
import './screens/home/HomeScreenLineIcons.css';
import './screens/home/HomeScreenMagnificPopup.css';
import './screens/home/HomeScreenResponsive.css';
import './screens/home/HomeScreenSlick.css';
import './screens/home/BootstrapMin.css';

// Images

import Logo from './assets/images/logo.png';

export default function Header() {
  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="Logo" />
                  {/* <img src="../../assets/images/logo.png" alt="Logo" /> */}
                </a>
                {/* <!-- Logo --> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="bar-icon"></span>
                  <span className="bar-icon"></span>
                  <span className="bar-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a data-scroll-nav="0" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#product">
                        Instagram
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#service">
                        Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#showcase">
                        Tiktok
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#team">
                        Youtube
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#ourstory">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-scroll-nav="0" href="#contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                  {/* <!-- navbar nav --> */}
                </div>
              </nav>
              {/* <!-- navbar --> */}
            </div>
          </div>
          {/* 
  //   <!-- row --> */}
        </div>
        {/*
//    <!-- container --> */}
      </header>
    </>
  );
}
