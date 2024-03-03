import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserReg() {
  const  nav = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phoneNumber = document.getElementById("phonenumber").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let key = {
      role: role,
      name: name,
      email: email,
      password: confirmPassword,
      phonenumber: phoneNumber,
    };

    axios.post("http://localhost:8000/api/reg/user/post", key).then((res) => {
      console.log(res.data);
      if (res.data.msg === "success") {
        alert("Registered Successfully");
        nav("/login");
      } else {
        alert("Registration Error !!");
      }
    });
    // console.log('Role:', role);
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Confirm Password:', confirmPassword);
    // console.log('Phone Number:', phoneNumber);

    // Add your logic to send the registration data to the server (POST request, etc.)
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4 bg-info">
              <h2 className="mb-4 text-center">Registrate Yourself</h2>
              <form onSubmit={handleSubmit}>
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
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReg;
