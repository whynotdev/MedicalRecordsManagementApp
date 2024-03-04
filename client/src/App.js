import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import UserReg from "./Components/UserReg";
import UserLogin from "./Components/UserLogin";
import PatientDashboard from "./Pages/PatientsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/register" element={<UserReg />} />
        <Route path="/Patients" element={<PatientDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
