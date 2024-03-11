import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../assets/home.png";

function Landingpage() {
  return (
    <>
      {/* Landing Page Content */}
      <div className="container mt-5 text-center bg-landing">
        <div className="row ">
          <div className="hero1 col-lg-12 text-light">
            <div className="row">
              <div className="col-lg-2 col-sm-1"></div>
              <div className="col-lg-5 col-xl-7 col-sm-12 col-md-12 smscreen  px-sm-3">
                <span class="sp1 my-3">EDUCATION & SCHOOL</span>
                <h1 className="h11 my-3 ">
                  Welcome to Medical Records
                  <br />
                </h1>
                <p class="p1 my-4">
                  Your trusted platform for managing medical information.
                </p>
                <Link to="/login" class="cssbuttons-io-button">
                  Get started
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </Link>

                <a class=" "></a>
              </div>
              <div className="col-lg-5 col-sm-1"></div>
            </div>
          </div>
          <div className=" row hero2 mb-5 ">
            <div className="mt-5 row d-flex flex-row container-fluid">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-md-6  col-sm-12 my-5">
                <img
                  className="container-fluid"
                  src="https://medrec-m.com/public/design/images/heading-image-n.jpg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                <h1 className="text-dark font-weight-bold">
                  A COMPHRENSHINIVE <br />
                  TEACHING APPROACH
                </h1>
                <p className="text-muted hero2Pages mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas felis <br /> felis, vulputate sit amet mauris et,
                  semper aliquam ligula. Integer efficitur tellus <br /> metus,
                  sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada
                  massa.
                </p>
                <p className="text-muted hero2Pages mt-4">
                  Maecenas felis felis, vulputate sit amet mauris et, semper
                  aliquam ligula. <br />
                  Integer efficitur tellus metus, sed feugiat leo posuere ac.
                  Morbi vitae tincidunt <br /> mi,et malesuada massa.
                </p>
                <a className="text-success hero2anchor mt-5">Learn More</a>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-center row col-12">
              <h1 className="text-dark font-weight-bold">PROGRAMS WE OFFER</h1>
              <p className="text-muted hero2Pages">
                Maecenas felis felis, vulputate sit amet mauris et, semper
                aliquam ligula. Integer efficitur tellus <br />
                metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et
                malesuada massa.
              </p>
            </div>
            <div className="col-lg-12 row gap-4 d-flex flex-row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                  <img
                    src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog1.jpg.webp"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a class="card-title hero3an">Faculty of Science </a>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a className="text-success hero2anchor">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                  <img
                    src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/blog2.jpg.webp"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a class="card-title hero3an">Faculty of Arts</a>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a className="text-success hero2anchor">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>

          <div className="col-12 row d-flex flex-row mt-5 text-muted">
            <div className="col-lg-4 text-center">
              <div>
                {" "}
                <img
                  class="container-fluid mb-3"
                  src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img1.jpg.webp"
                />
                <h3>
                  This is one step ahed to real world <br />
                  That's what make you strong
                  <br />
                  Out of comfort zone
                </h3>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div>
                {" "}
                <img
                  class="container-fluid mb-3"
                  src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img2.jpg.webp"
                />
                <h3>
                  This is one step ahed to real world <br />
                  That's what make you strong
                  <br />
                  Out of comfort zone
                </h3>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div>
                {" "}
                <img
                  class="container-fluid mb-3"
                  src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/class-img3.jpg.webp"
                />
                <h3>
                  This is one step ahed to real world <br />
                  That's what make you strong
                  <br />
                  Out of comfort zone
                </h3>
              </div>
            </div>
          </div>
          <hr />
          <div></div>
          <div className="container-fluid row bg-dark text-light mt-5 gg d-flex flex-row lol1">
            <div className="col-lg-2 col-md-1 col-8 ftimg">
              <img
                className="container-fluid"
                src="https://preview.colorlib.com/theme/universityedu/assets/img/logo/logo.png.webp"
                alt="Logo"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <h3>Resources</h3>
              <ul className="rrr">
                <li>FAQ</li>
                <li>Submit Ticket</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-2">
              <h3>Social Links</h3>
              <ul className="newsletter-container rrr">
                <li className="social-icons">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </li>
              </ul>
            </div>
            <div className="col-12 text-center mt-4 bg-dark lol2">
              <hr />
              <h5>
                Copyright &copy;2023 All Rights Reserved. This Template is made
                with love.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
