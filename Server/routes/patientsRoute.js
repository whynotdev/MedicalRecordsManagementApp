const express = require("express");
const router = express.Router();
const PatientRecord = require("../models/patientsModel");
const authMiddleware = require("../middlewares/authMiddleware");

// POST request to create a new patient record
router.post("/create-patient-record", authMiddleware, async (req, res) => {
  try {
    // Extract userId and doctorId from the request body
    const { userId, doctorId, ...patientData } = req.body;

    // Create a new patient record object with userId and doctorId
    const newPatientRecord = new PatientRecord({
      userId,
      doctorId,
      ...patientData,
    });

    // Save the new patient record to the database
    await newPatientRecord.save();

    res.status(201).json({
      success: true,
      message: "Patient record created successfully",
      data: newPatientRecord,
    });
  } catch (error) {
    console.error("Error creating patient record:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// Add more routes for retrieving, updating, or deleting patient records if needed

module.exports = router;