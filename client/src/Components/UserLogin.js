import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function UserLogin() {
  const nav = useNavigate();
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/reg/user/login",
        {
          role: role,
          email: email,
          password: password,
        }
      );

      console.log(response.data);

      if (response.data.msg === "success") {
        alert("Logged in Successfully");
        nav("/Patients");
      } else {
        // Handle other success scenarios if needed
        alert("Login Error: Unexpected response");
      }
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        // Server responded with a status other than 200
        if (error.response.status === 400) {
          // Invalid credentials
          setError(
            "Invalid credentials. Please check your email and password."
          );
        } else {
          // Other server-side error
          setError("Server error. Please try again later.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("Network error. Please check your internet connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Unexpected error. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow p-4 bg-info">
              <h2 className="mb-4 text-center">Welcome Back!!</h2>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="role">Select Role:</label>
                  <select
                    className="form-control"
                    id="role"
                    name="role"
                    required
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Don't have an account? <Link to="/Register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
