import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../components/footer";
export function ContactPage() {
  return (
    <>
      <div className="king col-lg-12 text-light text-center">
        <h1 className="h11 my-3 ">
          Contact Us
          <br />
        </h1>
        <p class="p1 my-4">
          This is a one of popular university in this region.
          <br /> reputed positions This is a one of popular university in this
          region.
        </p>
      </div>

      <div className="container-fluid row d-flex flex-row map01">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 ">
          <div className="mt-5 mb-5">
            <iframe
              className="map1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4481599267224!2d77.61918447581077!3d12.94314951549992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1143faf54fe7%3A0xcd637c9daad0a2b0!2sKGiSL%20MicroCollege!5e0!3m2!1sen!2sin!4v1703479004307!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div></div>
      </div>
      <div>
        <div className="container-fluid row">
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h1> Get In Touch</h1>
            <textarea
              className="mb-5 mt-5 col-11 gap-1 p-5"
              placeholder="Enter a Message"
            ></textarea>{" "}
            <br /> <br />
            <input
              className="col-6 p-4"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="col-5 ms-1 p-4"
              type="email"
              placeholder="Enter your email"
            />{" "}
            <br /> <br />
            <input
              className="col-lg-11 p-4"
              type="text"
              placeholder="Enter your subject "
            />{" "}
            <br /> <br />
            <button type="button" class="btn btn-outline-success">
              S E N D
            </button>
          </div>
          <div className="col-lg-3 mt-5">
            <div className="row container-fluid mt-5">
              <div className="col-3 mt-4">
                <FontAwesomeIcon
                  className="container-fluid"
                  icon={faBuilding}
                />
              </div>
              <div className="col-9">
                <h3>Bangalore, karnataka</h3>
                <h4 className="text-muted">kormangala-595004</h4>
              </div>
            </div>
            <div className="row container-fluid">
              <div className="col-3 mt-4">
                <FontAwesomeIcon
                  className="container-fluid"
                  icon={faMobileScreenButton}
                />
              </div>
              <div className="col-9">
                <h3>-981 805 9564</h3>
                <h4 className="text-muted">Mon to Fri 9am to 6pm</h4>
              </div>
            </div>
            <div className="row container-fluid">
              <div className="col-3 mt-4">
                <FontAwesomeIcon
                  className="container-fluid"
                  icon={faEnvelope}
                />
              </div>
              <div className="col-9">
                <h3>support@kgisl.com</h3>
                <h4 className="text-muted">Send us your query at anytime</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <FooterComp/>
    </>
  );
}
