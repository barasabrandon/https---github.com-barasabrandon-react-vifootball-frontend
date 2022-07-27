import React from 'react';

export default function GetInTouch() {
  return (
    <>
      {' '}
      <section id="contact" className="contact-area pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact-title text-center">
                <h2 className="title">Get In Touch</h2>
              </div>
              {/* <!-- contact title --> */}
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="contact-box mt-70">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-info pt-25">
                  <h4 className="info-title">Contact Info</h4>
                  <ul>
                    <li>
                      <div className="single-info mt-30">
                        <div className="info-icon">
                          <i className="lni-phone-handset"></i>
                        </div>
                        <div className="info-content">
                          <p>+25 4734 56789</p>
                        </div>
                      </div>
                      {/* <!-- single info --> */}
                    </li>
                    <li>
                      <div className="single-info mt-30">
                        <div className="info-icon">
                          <i className="lni-envelope"></i>
                        </div>
                        <div className="info-content">
                          <p>info@vifootball.com</p>
                        </div>
                      </div>
                      {/* <!-- single info --> */}
                    </li>
                    <li>
                      <div className="single-info mt-30">
                        <div className="info-icon">
                          <i className="lni-home"></i>
                        </div>
                        <div className="info-content">
                          <p>209, Envato Labs, Amkura Alis ,Nakuru</p>
                        </div>
                      </div>
                      {/* <!-- single info --> */}
                    </li>
                  </ul>
                </div>
                {/* <!-- contact info --> */}
              </div>
              <div className="col-lg-8">
                <div className="contact-form">
                  <h5>Send Message</h5>
                  <form
                    id="contact-form"
                    action="assets/contact.php"
                    method="post"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-form form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            data-error="Name is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        {/* <!-- single form --> */}
                      </div>
                      <div className="col-lg-6">
                        <div className="single-form form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            data-error="Valid email is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        {/* <!-- single form --> */}
                      </div>
                      <div className="col-lg-12">
                        <div className="single-form form-group">
                          <textarea
                            name="message"
                            placeholder="Enter Your Message"
                            data-error="Please,leave us a message."
                            required="required"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                        {/* <!-- single form --> */}
                      </div>
                      <p className="form-message"></p>
                      <div className="col-lg-12">
                        <div className="single-form form-group">
                          <button className="main-btn" type="submit">
                            SEND MESSAGE
                          </button>
                        </div>
                        {/* <!-- single form --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}
                  </form>
                </div>
                {/* <!-- row --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- contact box --> */}
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
}
