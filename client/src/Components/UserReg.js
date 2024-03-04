import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserReg() {
  const nav = useNavigate();
  const [inviteCode, setInviteCode] = useState("");
  const [doctorId, setDoctorId] = useState(""); // New state for doctor ID
  const [key, setKey] = useState("");

  // const inviteCodes= {
  //   admin: "",
  //   // Add more roles and corresponding codes if needed
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = key.role;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const gender = document.querySelector('input[name="gender"]:checked').value; 
    const dob = document.getElementById("dob").value;
    
    console.log("Role:", role);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone Number:", phoneNumber);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (role === "admin" && inviteCode !== "ADMINCODE") {
      alert("Invalid admin invite code");
      return;
    }

    setKey((prevKey) => ({
      ...prevKey,
      role: role,
      name: name,
      email: email,
      password: confirmPassword,
      phonenumber: phoneNumber,
      dob: dob,
      gender: gender,
    }));

    axios
      .post("http://localhost:8000/api/reg/user/post", key)
      .then((res) => {
        console.log(res.data);

        if (res.data.msg === "success") {
          alert("Registered Successfully");
          nav("/login");
        } else {
          alert("Registration Error !!");
        }
      })
      .catch((error) => {
        console.error("Error:", error.response);
        alert("Registration Error: " + error.response.data.message);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4 bg-info">
              <h2 className="mb-4 text-center">Register Yourself</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Select Role:</label>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="admin"
                      name="role"
                      value="admin"
                      className="form-check-input"
                      onChange={(e) => setKey({ ...key, role: e.target.value })}
                    />
                    <label htmlFor="admin" className="form-check-label">
                      Admin
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="doctor"
                      name="role"
                      value="doctor"
                      className="form-check-input"
                      onChange={(e) => setKey({ ...key, role: e.target.value })}
                    />
                    <label htmlFor="doctor" className="form-check-label">
                      Doctor
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="patient"
                      name="role"
                      value="patient"
                      className="form-check-input"
                      onChange={(e) => setKey({ ...key, role: e.target.value })}
                    />
                    <label htmlFor="patient" className="form-check-label">
                      Patient
                    </label>
                  </div>
                </div>

                {key.role === "admin" && (
                  <div className="form-group">
                    <label htmlFor="inviteCode">Admin Invite Code:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inviteCode"
                      name="inviteCode"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="uemail">Email:</label>
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
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phonenumber">Phone Number:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phonenumber"
                    name="phonenumber"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <div className="form-check form-check-inline mt-3">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>

                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReg;
