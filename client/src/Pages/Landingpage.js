import React from "react";
import { Link } from "react-router-dom";

import FooterComp from "../components/footer";

function Landingpage() {
  return (
    <>
      <div className="container mt-5 text-center bg-landing">
        <div className="row">
          <div className="hero1 col-lg-12 text-light">
            <div className="row">
              <div className="col-lg-2 col-sm-1"></div>
              <div className="col-lg-8 col-sm-10 col-md-10 mx-auto px-sm-3">
                <span className="sp1 my-3">MEDICAL RECORD MANAGEMENT</span>
                <h1 className="h11 my-3">
                  Welcome to MED+
                  <br />
                </h1>
                <p className="p1 my-4">
                  Your trusted platform for managing medical records.
                </p>
                <Link to="/login" className="cssbuttons-io-button">
                  Get started
                  <div className="icon">
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
              </div>
              <div className="col-lg-2 col-sm-1"></div>
            </div>
          </div>
          <div className=" row hero2 mb-5 ">
            <div className="mt-5 row d-flex flex-row container-fluid">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 col-md-6 col-sm-12 my-5">
                <img
                  className="img-fluid"
                  src="https://medrec-m.com/public/design/images/heading-image-n.jpg"
                  alt="Medical Records"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                <h1 className="text-dark font-weight-bold">
                  Comprehensive Medical Record Management
                </h1>
                <p className="text-muted hero2Pages mt-4">
                  MED+ provides a secure and efficient platform for managing
                  comprehensive medical records. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p className="text-muted hero2Pages mt-4">
                  Our system ensures the confidentiality and accessibility of
                  patient information, making healthcare management streamlined
                  and effective.
                </p>
                <Link to="#" className="text-success hero2anchor mt-5">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* maincontent */}
          <div className="">
            <div className="text-center row col-12">
              <h1 className="text-dark font-weight-bold">WHAT WE SERVE</h1>
              <p className="text-muted hero2Pages">
                Explore our diverse range of educational programs designed to
                meet your needs.
              </p>
            </div>
            <div className="col-lg-12 row gap-4 d-flex flex-row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                  <img
                    src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="card-img-top"
                    alt="Medical Record Management"
                  />
                  <div class="card-body">
                    <h5 class="card-title hero3an">
                      Medical Record Management System
                    </h5>
                    <p class="card-text">
                      Welcome to MED+, where we offer a state-of-the-art Medical
                      Record Management System. Streamline healthcare processes,
                      ensure data security, and provide optimal patient care
                      with our innovative solutions.
                    </p>
                    <a className="text-success hero2anchor" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 card hero3cd">
                <div class="card mb-3 mt-3">
                  <img
                    src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="card-img-top"
                    alt="Health Informatics"
                  />
                  <div class="card-body">
                    <h5 class="card-title hero3an">
                      Health Informatics Program
                    </h5>
                    <p class="card-text">
                      Dive into the dynamic field of health informatics with our
                      comprehensive program. Learn how to leverage technology to
                      manage healthcare data, improve patient outcomes, and
                      contribute to the evolution of healthcare systems.
                    </p>
                    <a className="text-success hero2anchor" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>

          {/* footer */}
         <FooterComp/>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
