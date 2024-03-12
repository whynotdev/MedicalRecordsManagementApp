import React, { useState } from "react";

const BloodPressureChecker = () => {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    // Convert input values to numbers
    const systolicValue = parseInt(systolic, 10);
    const diastolicValue = parseInt(diastolic, 10);

    // Check blood pressure category
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
    <div
      className=" container card m-2 p-4 bg-landing"
    >
      <h1 className="page-title ">Blood Pressure Checker</h1>
      <div>
        <label className="mb-2">Systolic (Top number): </label>
        <br></br>
        <input
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 mt-2">Diastolic (Bottom number): </label>
        <br></br>
        <input
          className="mb-2"
          type="number"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
        />
      </div>
      <button onClick={handleCheck} className="primary-button">
        Check Blood Pressure
      </button>
      <br />
      {result && (
        <div>
          <h2 className="page-title">Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default BloodPressureChecker;
