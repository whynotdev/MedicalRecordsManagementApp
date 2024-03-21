const express = require("express");
const router = express.Router();
const PatientRecord = require("../models/patientsModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create-patient-record", authMiddleware, async (req, res) => {
  try {
    const { userId, doctorId, ...patientData } = req.body;

    const newPatientRecord = new PatientRecord({
      userId,
      doctorId,
      ...patientData,
    });

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

//get patients record
router.get("/patients", authMiddleware, async (req, res) => {
  try {
    // Extract the doctorId from the request query parameters
    const doctorId = req.query.doctorId;

    // Find all patient records where doctorId matches the provided doctorId
    const patientRecords = await PatientRecord.find({ doctorId });

    // Send the patient records as a response
    res.status(200).json({
      success: true,
      message: "Patient records retrieved successfully",
      data: patientRecords,
    });
  } catch (error) {
    console.error("Error retrieving patient records:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
