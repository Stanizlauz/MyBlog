import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Slide() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <section>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="">
                    <a
                      href="single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: 'url("assets/img/iphone14.jpg")',
                      }}
                    >
                      <div className="img-bg-inner">
                        <h2>
                        The iPhone 14 Pro and Pro Max
                        </h2>
                        <p>
                        Apple says strict covid restrictions at the company’s China-based factory are causing it to operate at ‘at significantly reduced capacity.’
                        </p>
                      </div>
                    </a>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="">
                    <a
                      href="single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: 'url("assets/img/person-6.jpg")',
                      }}
                    >
                      <div className="img-bg-inner">
                        <h2>
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quidem neque est mollitia! Beatae minima
                          assumenda repellat harum vero, officiis ipsam magnam
                          obcaecati cumque maxime inventore repudiandae quidem
                          necessitatibus rem atque.
                        </p>
                      </div>
                    </a>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="">
                    <a
                      href="single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: 'url("assets/img/post-landscape-1.jpg")',
                      }}
                    >
                      <div className="img-bg-inner">
                        <h2>
                          ASUU ON THE VERGE OF ANOTHER SHUTDOWN
                        </h2>
                        <p>
                          Such is Life!
                        </p>
                      </div>
                    </a>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="">
                    <a
                      href="single-post.html"
                      className="img-bg d-flex align-items-end"
                      style={{
                        backgroundImage: 'url("assets/img/post-landscape-8.jpg")',
                      }}
                    >
                      <div className="img-bg-inner">
                        <h2>
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quidem neque est mollitia! Beatae minima
                          assumenda repellat harum vero, officiis ipsam magnam
                          obcaecati cumque maxime inventore repudiandae quidem
                          necessitatibus rem atque.
                        </p>
                      </div>
                    </a>
                  </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}
