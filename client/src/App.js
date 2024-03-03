import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import LandingPage from "./Components/LandingPage";

import UserReg from "./Components/UserReg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<UserReg />} />
      </Routes>
    </Router>
  );
}

export default App;
