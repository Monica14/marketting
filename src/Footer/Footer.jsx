import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Footer.css";
import SharedJS from "../Shared/SharedJS";

const Footer = (props) => {
  return (
    <>
      <footer class="footer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__about__logo">
                  <a href="./index.html">
                    <img src={process.env.PUBLIC_URL + "img/logofooter.png"} alt="" />
                  </a>
                </div>
                <ul>
                  <li>Address: Baner, Pune</li>
                  <li>Phone: +91 87669422618</li>
                  <li>Email: services@solutioninfinite.in</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div class="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">About Our Site</a>
                  </li>
                  <li>
                    <a href="#">Advertise with Us</a>
                  </li>
                  <li>
                    <a href="#">Join Sales</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Feedback</a>
                  </li>
                  <li>
                    <a href="#">Complaints</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Jobs & Careers</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" class="site-btn">
                    Subscribe
                  </button>
                </form>
                <div class="footer__widget__social">
                  <a href="https://www.facebook.com/SolutionInfinite-102347662448181/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/solutioninfinite2022/">
                    <i class="fa fa-instagram"></i>
                  </a>
                  {/* <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="footer__copyright">
                <div class="footer__copyright__text">
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | by{" "}
                    <a href="#" target="_blank">
                      SolutionInfinite
                    </a>
                  </p>
                </div>
                {/* <div class="footer__copyright__payment">
                  <img src={process.env.PUBLIC_URL + "img/payment-item.png"} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <SharedJS />
    </>
  );
};

export default Footer;
