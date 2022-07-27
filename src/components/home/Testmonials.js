import React from 'react';

// Images
import Admin from '../../assets/images/blog/admin.jpg';
import BlogB2 from '../../assets/images/blog/b-2.jpg';
import BlogB1 from '../../assets/images/blog/b-1.jpg';
import BlogB3 from '../../assets/images/blog/b-3.jpg';

export default function Testmonials() {
  const data = [
    {
      id: 1,
      name: 'Brandon Wanambisi',
      text: ' It has absloutely made my work of traversing different social media platforms easier',
      avatar: BlogB1,
      likes: 30,
      Date: '5 JULY, 2021',
    },
    {
      id: 2,
      name: 'Evans Juma',
      text: ' Its access speed is much faster hence save on time.',
      avatar: BlogB2,
      likes: 68,
      Date: '15 JANUARY, 2022',
    },
    {
      id: 3,
      name: 'Jennifer Leima.',
      text: ' Amazing platform',
      avatar: BlogB3,
      likes: 7,
      Date: '14 FEB, 2022',
    },
  ];

  return (
    <>
      <section id="blog" className="blog-area pt-125">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-25">
                <h3 className="title mb-15">TestMonials</h3>
                <p>Here from others!</p>
              </div>
              {/* <!-- section title --> */}
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row justify-content-center">
            {data.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="single-blog mt-30">
                  <div className="blog-image">
                    <img src={item.avatar} alt="Blog" />
                  </div>
                  <div className="blog-content">
                    <div className="content">
                      <h4 className="title">
                        <a href="/#">{item.text}</a>
                      </h4>
                      <span>{item.date}</span>
                    </div>
                    <div className="meta d-flex justify-content-between align-items-center">
                      <div className="meta-admin d-flex align-items-center">
                        <div className="image">
                          <a href="/#">
                            <img src={Admin} alt="Admin" />
                          </a>
                        </div>
                        <div className="admin-title">
                          <h6 className="title">
                            <a href="/#">{item.name}</a>
                          </h6>
                        </div>
                      </div>
                      {/* <!-- meta admin --> */}
                      <div className="meta-icon">
                        <ul>
                          <li>
                            <a href="/#">
                              <i className="lni-share"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span>
                                <i className="lni-heart"></i>
                              </span>
                              <span className="m-1">{item.likes}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- meta icon --> */}
                    </div>
                    {/* <!-- meta --> */}
                  </div>
                </div>
                {/* <!-- single blog --> */}
              </div>
            ))}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
}
