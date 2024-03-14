import React, { useState } from "react";
import bookimg from "../assets/bloodtracker.png";
const BloodPressureChecker = () => {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
  
    const systolicValue = parseInt(systolic, 10);
    const diastolicValue = parseInt(diastolic, 10);

  
    if (systolicValue < 120 && diastolicValue < 80) {
      setResult(
        "Normal blood pressure. Maintain or adopt a healthy lifestyle."
      );
    } else if (
      systolicValue >= 120 &&
      systolicValue <= 129 &&
      diastolicValue < 80
    ) {
      setResult(
        "Elevated blood pressure. Maintain or adopt a healthy lifestyle."
      );
    } else if (
      (systolicValue >= 130 && systolicValue <= 139) ||
      (diastolicValue >= 80 && diastolicValue <= 89)
    ) {
      setResult(
        "Stage 1 high blood pressure. Maintain or adopt a healthy lifestyle. Talk to your provider about taking one or more medications."
      );
    } else if (systolicValue >= 140 || diastolicValue >= 90) {
      setResult(
        "Stage 2 high blood pressure. Maintain or adopt a healthy lifestyle. Talk to your provider about taking more than one medication."
      );
    } else {
      setResult("Invalid input. Please enter valid numbers.");
    }
  };

  return (
    <div className="container card m-2 p-4">
      <center>
        <h1 className="page-title mb-4">BLOOD PRESSURE CHECKER</h1>

        <div className="row">
        
          <div className="col-md-6 mb-4">
            <img
              src={bookimg}
              alt="Blood Pressure Checker"
              className="img-fluid"
            />
          </div>

        
          <div className="col-md-6 mt-5">
            <div className="mb-3">
              <label className="mb-2">Systolic (Top number): </label>
              <br />
              <input
                type="number"
                placeholder=""
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="mb-1 mt-2">Diastolic (Bottom number): </label>
              <br />
              <input
                className="mb-2"
                type="number"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
              />
            </div>

            <center>
              <button onClick={handleCheck} className="primary-button">
                Check Blood Pressure
              </button>
            </center>

            <br />

            {result && (
              <div>
                <h2 className="page-title mt-4">Result:</h2>
                <p>{result}</p>
              </div>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};

export default BloodPressureChecker;
