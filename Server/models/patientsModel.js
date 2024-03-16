const mongoose = require("mongoose");

const patientRecordSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  weight: Number,
  height: Number,
  bloodPressure: String,
  bloodGroup: String,
  previousMedicalConditions: String,
  disabilities: String,
  surgeries: String,
  allergies: String,
  currentMedications: String,
  prescription: String,
  otherMedicalHistory: String,
  testResultName: String,
  testResultStatus: String,
  testDescription: String,
});

const PatientModel = mongoose.model("patients", patientRecordSchema);

module.exports = PatientModel;
