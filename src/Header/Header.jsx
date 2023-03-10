import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div id="preloder">
        <div class="loader"></div>
      </div>

      <div class="humberger__menu__overlay"></div>
      <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
          <a href="#">
            <img src={process.env.PUBLIC_URL + "img/logo.png"} alt="" />
          </a>
        </div>
        {/* <div class="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-heart"></i> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div class="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div> */}
        <div class="humberger__menu__widget">
          <div class="header__top__right__language">
            <img src={process.env.PUBLIC_URL + "img/language.png"} alt="" />
            <div>English</div>
            <span class="arrow_carrot-down"></span>
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div class="header__top__right__auth">
            <a href="#">
              <i class="fa fa-user"></i> Login
            </a>
          </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
          <ul>
            <li class="active">
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./shop-grid.html">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul class="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="./shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="./checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
          <a href="https://www.facebook.com/SolutionInfinite-102347662448181/">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/solutioninfinite2022/">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
        <div class="humberger__menu__contact">
          <ul>
            <li>
              <i class="fa fa-envelope"></i> services@solutioninfinite.in
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="header__top__left">
                  <ul>
                    <li>
                      <i class="fa fa-envelope"></i> services@solutioninfinite.in
                    </li>
                    <li>Free Listing For Advertise</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="header__top__right">
                  <div class="header__top__right__social">
                    <a href="https://www.facebook.com/SolutionInfinite-102347662448181/">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/solutioninfinite2022/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                  <div class="header__top__right__language">
                    <img src={process.env.PUBLIC_URL + "img/language.png"} alt="" />
                    <div>English</div>
                    <span class="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div class="header__top__right__auth">
                    <a href="#">
                      <i class="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="header__logo">
                <a href="./index.html">
                  <img src={process.env.PUBLIC_URL + "img/logo.png"} alt="" style={{ "width": "180px" }} />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <nav class="header__menu">
                <ul>
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                    <ul class="header__menu__dropdown">
                      <li>
                        <a href="#">Advertisings</a>
                      </li>
                      <li>
                        <a href="#">Go Live</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <a href="#">Blog</a>
                  </li> */}
                  {/* <li>
                    <a href="#">Contact</a>
                  </li> */}
                </ul>
              </nav>
            </div>
            {/* <div class="col-lg-3">
              <div class="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div class="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div> */}
          </div>
          <div class="humberger__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
