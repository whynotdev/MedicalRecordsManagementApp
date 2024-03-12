import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row text-light mt-5 d-flex flex-row bg-ft ">
          <div className="col-lg-2 col-md-1 col-8 mx-auto ">
            <h1 className="logo">MED+</h1>
          </div>
          <div className="col-lg-2 col-md-3 col-6 mt-md-0 mt-4 mx-auto">
            <h3 className="text-light ft">Quick Links</h3>
            <ul className="list-unstyled rrr">
              <li className="ft">
                <Link to={"/"} className="text-light">
                  FAQ
                </Link>
              </li>
              <li className="ft">
                <Link to={"/"} className="text-light">
                  Blogs
                </Link>
              </li>
              <li className="ft ">
                <Link to={"/contactUs"} className="text-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3 col-6 mt-md-0 mt-4 mx-auto">
            <h3 className="text-light ft">Follow Us</h3>
            <ul className="list-unstyled newsletter-container rrr d-flex flex-row">
              <li className="social-icons">
                <a
                  className="text-light"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  className="text-light"
                  href="https://www.instagram.com/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  className="text-light"
                  href="https://www.linkedin.com/in/arif-afajal-395a80167/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  className="text-light"
                  href="https://youtu.be/t8a7XO7MuQE?si=TqUtHDDZNFWlx1zo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center mt-4 py-3">
            <hr className="bg-light" />
            <h5 className="text-white">
              Copyright &copy;2024 All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComp;
