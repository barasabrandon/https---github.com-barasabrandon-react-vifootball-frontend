import React from 'react';

export default function FooterContactInfo() {
  return (
    <>
      <div className="footer-info mt-50">
        <h5 className="f-title">Contact Info</h5>
        <ul>
          <li>
            <div className="single-footer-info mt-20">
              <span>Phone :</span>
              <div className="footer-info-content">
                <p>+2547 43145612</p>
                <p>+2547 43145612</p>
              </div>
            </div>
            {/* <!-- single footer info --> */}
          </li>
          <li>
            <div className="single-footer-info mt-20">
              <span>Email :</span>
              <div className="footer-info-content">
                <p>barasabrandon@gmail.com</p>
                <p>info@campusexams.co.ke</p>
              </div>
            </div>
            {/* <!-- single footer info --> */}
          </li>
          <li>
            <div className="single-footer-info mt-20">
              <span>Address :</span>
              <div className="footer-info-content">
                <p>39000 Test, Eldoret,Uasi Ngishu</p>
              </div>
            </div>
            {/* <!-- single footer info --> */}
          </li>
        </ul>
      </div>
    </>
  );
}
