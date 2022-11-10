import React from "react";

export default function Grid() {
  return (
    <>
      <section className="mx-4">
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Latest</h2>
          <div>
            <a href="category.html" className="more">
              View more.
            </a>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-lg-4">
              <div className="post-entry-1 lg">
                <a href="single-post.html">
                  <img
                    src="assets/img/garnacho.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Football</span>{" "}
                  <span className="mx-1">•</span> <span>Nov 10th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">Garnacho was electric</a>
                </h2>
                <p className="mb-4 d-block">
                  Garnacho had more standing ovations in his half-an-hour than
                  an actor during awards season. To add to his goal in San
                  Sebastian were two assists, the first a winning one for Bruno
                  Fernandes.
                </p>
                <div className="d-flex align-items-center author">
                  <div className="photo">
                    <img
                      src="assets/img/person-1.jpg"
                      alt
                      className="img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">Cameron Williamson</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col border-start custom-border">
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-2.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Sport</span>{" "}
                  <span className="mx-1">•</span> <span>Jul 5th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    Let’s Get Back to Work, New York
                  </a>
                </h2>
              </div>
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-5.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Food</span>{" "}
                  <span className="mx-1">•</span> <span>Jul 17th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    How to Avoid Distraction and Stay Focused During Video
                    Calls?
                  </a>
                </h2>
              </div>
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-7.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Design</span>{" "}
                  <span className="mx-1">•</span> <span>Mar 15th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    Why Craigslist Tampa Is One of The Most Interesting Places
                    On the Web?
                  </a>
                </h2>
              </div>
            </div>
            <div className="col border-start custom-border">
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-3.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Business</span>{" "}
                  <span className="mx-1">•</span> <span>Jul 5th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    6 Easy Steps To Create Your Own Cute Merch For Instagram
                  </a>
                </h2>
              </div>
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-6.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Tech</span>{" "}
                  <span className="mx-1">•</span> <span>Mar 1st '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    10 Life-Changing Hacks Every Working Mom Should Know
                  </a>
                </h2>
              </div>
              <div className="post-entry-1">
                <a href="single-post.html">
                  <img
                    src="assets/img/post-landscape-8.jpg"
                    alt
                    className="img-fluid"
                  />
                </a>
                <div className="post-meta">
                  <span className="date">Travel</span>{" "}
                  <span className="mx-1">•</span> <span>Jul 5th '22</span>
                </div>
                <h2>
                  <a href="single-post.html">
                    5 Great Startup Tips for Female Founders
                  </a>
                </h2>
              </div>
            </div>
            {/* Trending Section */}
            <div className="col-lg-4">
              <div className="trending">
                <h3>Trending</h3>
                <ul className="trending-post">
                  <li>
                    <a href="single-post.html">
                      <span className="number">1</span>
                      <h3>
                        The Best Homemade Masks for Face (keep the Pimples Away)
                      </h3>
                      <span className="author">Jane Cooper</span>
                    </a>
                  </li>
                  <li>
                    <a href="single-post.html">
                      <span className="number">2</span>
                      <h3>
                        17 Pictures of Medium Length Hair in Layers That Will
                        Inspire Your New Haircut
                      </h3>
                      <span className="author">Wade Warren</span>
                    </a>
                  </li>
                  <li>
                    <a href="single-post.html">
                      <span className="number">3</span>
                      <h3>
                        13 Amazing Poems from Shel Silverstein with Valuable
                        Life Lessons
                      </h3>
                      <span className="author">Esther Howard</span>
                    </a>
                  </li>
                  <li>
                    <a href="single-post.html">
                      <span className="number">4</span>
                      <h3>
                        9 Half-up/half-down Hairstyles for Long and Medium Hair
                      </h3>
                      <span className="author">Cameron Williamson</span>
                    </a>
                  </li>
                  <li>
                    <a href="single-post.html">
                      <span className="number">5</span>
                      <h3>
                        Life Insurance And Pregnancy: A Working Mom’s Guide
                      </h3>
                      <span className="author">Jenny Wilson</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* End Trending Section */}
          </div>
          {/* <div className="row">
            <div className="col-sm">col-sm</div>
            <div className="col-sm">col-sm</div>
            <div className="col-sm">col-sm</div>
          </div> */}
        </div>
      </section>
      <section id="posts">
        <div className="row">
          <div className="col-md-8">
            <div className="pb-3">.col-md-8</div>
            <div className="row">
              <div className="col-md-6">.col-md-6</div>
              <div className="col-md-6">.col-md-6</div>
            </div>
          </div>
          <div className="col-md-4">.col-md-4</div>
        </div>

        {/* Gallery */}
        <div className="row  mx-4">
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Gallery</h2>
          <div>
            <a href="category.html" className="more">
              View more.
            </a>
          </div>
        </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
        {/* Gallery */}
      </section>
    
    </>
  );
}
