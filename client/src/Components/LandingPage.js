import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

const LandingPage = () => {
  // const backgroundImage = {
  //   backgroundImage: 'url("https://wallpaperset.com/w/full/1/d/a/221583.jpg")',
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };
  // style={backgroundImage}
  return (
   
    <div className="landing-page-container" >
      <div className="text-center mt-5 landing-page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="landing-page-title">
                Welcome to Your Healthcare Application
              </h1>
              <p className="landing-page-description">
                Providing personalized healthcare solutions for admins, doctors,
                and patients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5 offset-md-3">
            <div className="buttons-container d-flex justify-content-between">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-success">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default LandingPage;
