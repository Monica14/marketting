import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="hero__categories">
                <div class="hero__categories__all">
                  <i class="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Photography</a>
                  </li>
                  <li>
                    <a href="#">Flowers</a>
                  </li>
                  <li>
                    <a href="#">Pooja Saman</a>
                  </li>
                  <li>
                    <a href="#">Ocasion Base Grocery</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Beauty</a>
                  </li>
                  <li>
                    <a href="#">Caterers</a>
                  </li>
                  <li>
                    <a href="#">Hospitals</a>
                  </li>
                  <li>
                    <a href="#">House Keeping</a>
                  </li>
                  <li>
                    <a href="#">Real Estate</a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#">
                    <div class="hero__search__categories">
                      All Categories
                      <span class="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" class="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div class="hero__search__phone">
                  <div class="hero__search__phone__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="hero__search__phone__text">
                    <h5>+91 8766942261</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div class="hero__item set-bg" data-setbg={process.env.PUBLIC_URL + "img/hero/banner22.png"}>
                <div class="hero__text">
                <span>FRUIT FRESH</span>
                  <h3>
                    Join Us and get <br />below benifits
                  </h3>
                  <ul>
                    <li>Free business Listing.</li>
                    <li>Get your catalog live with dedicated <br />website.</li>
                    <li>Get more customers for your business.</li>
                    <li>Grow your business.</li>
                  </ul>
                  {/* <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" class="primary-btn">
                    SHOP NOW
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="categories">
        <div class="container">
          <div class="row">
            <div class="categories__slider owl-carousel">
              <div class="col-lg-3">
                <div
                  class="categories__item set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/categories/cat-1.png"}
                >
                  <h5>
                    <a href="#">Flowers</a>
                  </h5>
                </div>
              </div>
              <div class="col-lg-3">
                <div
                  class="categories__item set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/categories/cat-2.png"}
                >
                  <h5>
                    <a href="#">Photography</a>
                  </h5>
                </div>
              </div>
              <div class="col-lg-3">
                <div
                  class="categories__item set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/categories/cat-3.jpg"}
                >
                  <h5>
                    <a href="#">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div class="col-lg-3">
                <div
                  class="categories__item set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/categories/cat-4.png"}
                >
                  <h5>
                    <a href="#">Pooja Grocery</a>
                  </h5>
                </div>
              </div>
              <div class="col-lg-3">
                <div
                  class="categories__item set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/categories/cat-5.png"}
                >
                  <h5>
                    <a href="#">Beauty Service</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="featured spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Featured Product</h2>
              </div>
              <div class="featured__controls">
                <ul>
                  <li class="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".beauty">Beauty</li>
                  <li data-filter=".flowers">Flowers</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".photography">Photography</li>
                  <li data-filter=".poojasaman">Pooja Grocery</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row featured__filter">
            <div class="col-lg-3 col-md-4 col-sm-6 mix beauty">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-1.png"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-globe"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Beauty Service</a>
                  </h6>
                  <h5>INR 500/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix photography">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-2.png"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Photography</a>
                  </h6>
                  <h5>INR 7000/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix flowers">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-3.png"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Flowers</a>
                  </h6>
                  <h5>INR 500/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-4.jpg"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                   
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Vegetables</a>
                  </h6>
                  <h5>INR 70/-</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix poojasaman">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-5.png"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Pooja Grocery</a>
                  </h6>
                  <h5>INR 100/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-6.jpg"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Vegetables</a>
                  </h6>
                  <h5>INR 100/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-7.jpg"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Fruits</a>
                  </h6>
                  <h5>INR 100/- Starting</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables">
              <div class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg={process.env.PUBLIC_URL + "img/featured/feature-8.jpg"}
                >
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                      <i class="fa fa-globe"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Fruits</a>
                  </h6>
                  <h5>INR 100/- Starting</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="banner__pic">
                <img src={process.env.PUBLIC_URL + "img/banner/banner-1.jpg"} alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="banner__pic">
                <img src={process.env.PUBLIC_URL + "img/banner/banner-2.jpg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="latest-product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Latest Services</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                  <div class="latest-prdouct__slider__item">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Top Rated Services</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                    </div>
                  <div class="latest-prdouct__slider__item">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="latest-product__text">
                <h4>Review Services</h4>
                <div class="latest-product__slider owl-carousel">
                  <div class="latest-prdouct__slider__item">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                       </div>
                  <div class="latest-prdouct__slider__item">
                  <div class="latest-prdouct__slider__item">
                    <a href="http://firstchoiceservice.tech/themes/photography/" class="latest-product__item" target="_new">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-1.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sandeep Photography</h6>
                        <h6>Category - Photography</h6>
                        <span>INR 5000/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-2.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Arnavi Creation</h6>
                        <h6>Category - Flower</h6>
                        <span>INR 2500/- Starting</span>
                      </div>
                    </a>
                    <a href="#" class="latest-product__item">
                      <div class="latest-product__item__pic">
                        <img src={process.env.PUBLIC_URL + "img/latest-product/lp-3.png"} alt="" />
                      </div>
                      <div class="latest-product__item__text">
                        <h6>Sadafule Flower</h6>
                        <h6>Category - Pooja Grocery</h6>
                        <span>INR 100/- Starting</span>
                      </div>
                    </a>
                  </div>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="from-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={process.env.PUBLIC_URL + "img/blog/blog-1.jpg"} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Cooking tips make cooking simple</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={process.env.PUBLIC_URL + "img/blog/blog-2.jpg"} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">6 ways to prepare breakfast for 30</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={process.env.PUBLIC_URL + "img/blog/blog-3.jpg"} alt="" />
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li>
                      <i class="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i class="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Visit the clean farm in the US</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default Home;
