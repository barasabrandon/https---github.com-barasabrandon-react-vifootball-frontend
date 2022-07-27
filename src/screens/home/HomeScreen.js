import React from 'react';

// CSS
import './HomeScreen.css';
import './HomeScreenAnimate.css';
import './HomeScreenDefault.css';
import './HomeScreenLineIcons.css';
import './HomeScreenMagnificPopup.css';
import './HomeScreenResponsive.css';
import './HomeScreenSlick.css';
import './BootstrapMin.css';

// Images
import Product1 from '../../assets/images/discount-product/product-1.jpg';
import Product2 from '../../assets/images/discount-product/product-2.jpg';
import ProductP1 from '../../assets/images/product/p-1.jpg';
import ProductP2 from '../../assets/images/product/p-2.jpg';
import ProductP3 from '../../assets/images/product/p-3.jpg';
import Testmonial from '../../assets/images/testimonial/ts-bg.jpg';
import Slider from '../../components/home/Slider';
import OurStory from '../../components/home/OurStory';
import Testmonials from '../../components/home/Testmonials';
import GetInTouch from '../../components/home/GetInTouch';
import Footer from '../../Footer';

export default function HomeScreen() {
  return (
    <>
      {/* <!--====== HEADER PART ENDS ======--> */}

      {/* <!--====== SLIDER PART START ======--> */}

      <section id="home" className="slider-area pt-100">
        <div className="container-fluid position-relative">
          <div className="slider-active">
            {/*  // <!-- single slider --> */}
            <Slider />
          </div>
          {/* <!-- slider active --> */}
          <div className="slider-social">
            <div className="row justify-content-end">
              <div className="col-lg-7 col-md-6">
                <ul className="social text-right">
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
            </div>
          </div>
        </div>
        {/* <!-- container fluid --> */}
      </section>

      {/* <!--====== SLIDER PART ENDS ======-->
 
  <!--====== DISCOUNT PRODUCT PART START ======--> */}

      <section id="discount-product" className="discount-product pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-discount-product mt-30">
                <div className="product-image">
                  <img src={Product1} alt="Product" />
                </div>
                {/* <!-- product image --> */}
                <div className="product-content">
                  <h4 className="content-title mb-15">Get Twitter Posts</h4>
                  <a href="/#">
                    View Collection <i className="lni-chevron-right"></i>
                  </a>
                </div>
                {/* <!-- product content --> */}
              </div>
              {/* <!-- single discount product --> */}
            </div>
            <div className="col-lg-6">
              <div className="single-discount-product mt-30">
                <div className="product-image">
                  <img src={Product2} alt="Product" />
                </div>
                {/* <!-- product image --> */}
                <div className="product-content">
                  <h4 className="content-title mb-15">Instagram Posts</h4>
                  <a href="/#">
                    View Collection <i className="lni-chevron-right"></i>
                  </a>
                </div>
                {/* <!-- product content --> */}
              </div>
              {/* <!-- single discount product --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      {/* <!--====== DISCOUNT PRODUCT PART ENDS ======--> */}

      {/* <!--====== PRODUCT PART START ======--> */}

      <section id="product" className="product-area pt-100 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="collection-menu text-center mt-30">
                <h4 className="collection-tilte">OUR COLLECTION</h4>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="active"
                    id="v-pills-furniture-tab"
                    data-toggle="pill"
                    href="#v-pills-furniture"
                    role="tab"
                    aria-controls="v-pills-furniture"
                    aria-selected="true"
                  >
                    Twitter
                  </a>

                  <a
                    id="v-pills-decorative-tab"
                    data-toggle="pill"
                    href="#v-pills-decorative"
                    role="tab"
                    aria-controls="v-pills-decorative"
                    aria-selected="false"
                  >
                    Instagram
                  </a>

                  <a
                    id="v-pills-lighting-tab"
                    data-toggle="pill"
                    href="#v-pills-lighting"
                    role="tab"
                    aria-controls="v-pills-lighting"
                    aria-selected="false"
                  >
                    Tiktok
                  </a>

                  <a
                    id="v-pills-outdoor-tab"
                    data-toggle="pill"
                    href="#v-pills-outdoor"
                    role="tab"
                    aria-controls="v-pills-outdoor"
                    aria-selected="false"
                  >
                    Likee
                  </a>

                  <a
                    id="v-pills-storage-tab"
                    data-toggle="pill"
                    href="#v-pills-storage"
                    role="tab"
                    aria-controls="v-pills-storage"
                    aria-selected="false"
                  >
                    Others
                  </a>
                </div>
                {/* 
                      <!-- nav --> */}
              </div>
              {/* <!-- collection menu --> */}
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-furniture"
                  role="tabpanel"
                  aria-labelledby="v-pills-furniture-tab"
                >
                  <div className="product-items mt-30">
                    <div className="row product-items-active">
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Fibre Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$49.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-20%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$129.00</span>
                            <span className="discount-price">$159.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP3} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-10%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Classic Wardrobe</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$89.00</span>
                            <span className="discount-price">$129.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </div>
                  {/* <!-- product items --> */}
                </div>
                {/* <!-- tab pane --> */}

                <div
                  className="tab-pane fade"
                  id="v-pills-decorative"
                  role="tabpanel"
                  aria-labelledby="v-pills-decorative-tab"
                >
                  <div className="product-items mt-30">
                    <div className="row product-items-active">
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* 
                                    //   <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* 
                                    //   <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP3} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* 
                                    //   <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </div>
                  {/* <!-- product items --> */}
                </div>
                {/* <!-- tab pane --> */}

                <div
                  className="tab-pane fade"
                  id="v-pills-lighting"
                  role="tabpanel"
                  aria-labelledby="v-pills-lighting-tab"
                >
                  <div className="product-items mt-30">
                    <div className="row product-items-active">
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP3} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </div>
                  {/* <!-- product items --> */}
                </div>
                {/* <!-- tab pane --> */}

                <div
                  className="tab-pane fade"
                  id="v-pills-outdoor"
                  role="tabpanel"
                  aria-labelledby="v-pills-outdoor-tab"
                >
                  <div className="product-items mt-30">
                    <div className="row product-items-active">
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP3} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </div>
                  {/* <!-- product items --> */}
                </div>
                {/* <!-- tab pane --> */}

                <div
                  className="tab-pane fade"
                  id="v-pills-storage"
                  role="tabpanel"
                  aria-labelledby="v-pills-storage-tab"
                >
                  <div className="product-items mt-30">
                    <div className="row product-items-active">
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP3} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP1} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                      <div className="col-md-4">
                        <div className="single-product-items">
                          <div className="product-item-image">
                            <a href="/#">
                              <img src={ProductP2} alt="Product" />
                            </a>
                            <div className="product-discount-tag">
                              <p>-60%</p>
                            </div>
                          </div>
                          <div className="product-item-content text-center mt-30">
                            <h5 className="product-title">
                              <a href="/#">Touchwood Chair</a>
                            </h5>
                            <ul className="rating">
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                              <li>
                                <i className="lni-star-filled"></i>
                              </li>
                            </ul>
                            <span className="regular-price">$59.00</span>
                            <span className="discount-price">$69.00</span>
                          </div>
                        </div>
                        {/* <!-- single product items --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </div>
                  {/* <!-- product items --> */}
                </div>
                {/* <!-- tab pane --> */}
              </div>
              {/* <!-- tab content -->  */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      {/* <!--====== PRODUCT PART ENDS ======--> */}

      {/* <!--====== SERVICES PART START ======--> */}
      <OurStory />

      {/* <!--====== SERVICES PART ENDS ======--> */}

      {/* <!--====== TESTIMONIAL PART START ======--> */}

      <section id="testimonial" className="testimonial-area pt-200">
        <div
          className="testimonial-bg bg_cover"
          style={{
            backgroundImage: `${Testmonial}`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="testimonial-content">
                <div className="testimonial-active">
                  {/* <!-- single testimonial --> */}
                  <div className="single-testimonial">
                    <i className="lni-quotation"></i>
                    <p className="mb-30">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit,
                      sed do eiusmod tempor inc ididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <h6 className="title">Lisa White</h6>
                    <span>- Designer, Walmart</span>
                  </div>
                  {/* <!-- single testimonial --> */}
                </div>
                {/* <!-- testimonial active --> */}
              </div>
              {/* <!-- testimonial content --> */}
            </div>
            <div className="col-lg-7 col-md-4">
              <div className="testimonial-play text-right d-none d-md-block">
                <a
                  className="Video-popup"
                  href="https://www.youtube.com/watch?v=l8ccw7BMrMA"
                >
                  <i className="lni-play"></i>
                </a>
              </div>
              {/* <!-- testimonial play --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      {/* <!--====== TESTIMONIAL PART ENDS ======--> */}

      {/* <!--======  Testmonials PART START ======--> */}

      <Testmonials />

      {/* <!--======  Testmonials PART ENDS ======--> */}

      {/* <!--====== CONTACT PART START ======--> */}

      <GetInTouch />

      {/* <!--====== CONTACT PART ENDS ======--> */}

      {/* <!--====== FOOTER PART START ======--> */}

      <Footer />

      {/* <!--====== FOOTER PART ENDS ======--> */}

      {/* <!--====== BACK TO TOP PART START ======--> */}

      <a href="/#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      {/* <!--====== BACK TO TOP PART ENDS ======--> */}
    </>
  );
}
