import React from "react";

export default function Hero2() {
  return (
    <>
       <header className="hiro-header home-header" id="top">
      

        <div className="container wow fadeInUp">
          <div
            id="hiroHeaderCarousel"
            className="hiro-header-carousel carousel slide"
            data-ride="carousel"
            data-interval={3500}
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={1}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                     “Invest for the long haul. Don't get too greedy and don't get too scared.”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/img/person-6.jpg"
                      alt="Remarkable Digital Products"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={2}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                      “Money is always eager and ready to work for anyone who is ready to employ it.”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/img/person-6.jpg"
                      alt="<span>Remarkable Digital Products</span>"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <h1
                      className="carousel-item-title"
                      data-animation="animated fadeInRight"
                      data-number={3}
                    >
                      <span>Professional Crypto/Forex Expert</span>
                    </h1>
                    <p
                      className="carousel-item-description"
                      data-animation="animated fadeInRight"
                    >
                      “Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble”
                    </p>
                    <a
                      href="#!"
                      className="carousel-item-link link-hover-fx"
                      data-animation="animated fadeInRight"
                    >
                      READ MORE
                    </a>
                    <ul
                      className="carousel-item-social-links nav"
                      data-animation="animated fadeInRight"
                    >
                      <li>
                        <a href="https://t.me/Experthelen" className="link-hover-fx">
                          Telegram
                        </a>
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          TWITTER
                        </a> */}
                      </li>
                      <li>
                        {/* <a href="#!" className="link-hover-fx">
                          BEHANCE
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/img/person-6.jpg"
                      alt="Remarkable Digital Products"
                      className="img-fluid w-100 rounded"
                      width="372px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#hiroHeaderCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#hiroHeaderCarousel" data-slide-to={1} />
              <li data-target="#hiroHeaderCarousel" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </header>
    </>
  );
}
