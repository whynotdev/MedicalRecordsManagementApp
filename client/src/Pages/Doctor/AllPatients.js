import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { FaUser, FaPhone, FaMapMarker, FaWeight, FaArrowUp, FaNotesMedical, FaHeartbeat, FaMedkit, FaBriefcaseMedical, FaAllergies, FaFileMedicalAlt, FaHospitalUser } from 'react-icons/fa';

function AllPatients() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const doctorId = user?._id;
        // console.log("getting_doctorsId", doctorId);
        dispatch(showLoading());
        const response = await axios.get(
          `/api/patient/patients?doctorId=${doctorId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
        if (response.data.success) {
          setPatients(response.data.data);
        } else {
          throw new Error(
            response.data.message || "Failed to fetch patient data"
          );
        }
      } catch (error) {
        dispatch(hideLoading());
        console.error("Error fetching patients:", error.message);
        setError(error.message || "Failed to fetch patient data");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1 className="text-center my-4">All Patients</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-danger">Error: {error}</p>}
        {!loading && patients.length === 0 && <p className="text-center">No patients found.</p>}
        <div className="row">
          {patients.map((patient, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h2 className="card-title"><FaUser /> {`${patient.firstName} ${patient.lastName}`}</h2>
                  <hr />
                  <div className="icon-text mb-2 mb-2">
                    <FaPhone  className="text-success"/><span className="p-2">{patient.phoneNumber}</span>
                  </div>
                  <div className="icon-text mb-2 mb-2">
                    <FaMapMarker  /><span className="p-2">{patient.address}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaWeight /><span className="p-2">Weight: {patient.weight}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaArrowUp /><span className="p-2">Height: {patient.height}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaNotesMedical /><span className="p-2">Medical Conditions: {patient.previousMedicalConditions}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaHeartbeat /><span className="p-2">Blood Pressure: {patient.bloodPressure}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaMedkit /><span className="p-2">Blood Group: {patient.bloodGroup}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaBriefcaseMedical /><span className="p-2">Surgeries: {patient.surgeries}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaAllergies /><span className="p-2">Allergies: {patient.allergies}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaFileMedicalAlt /><span className="p-2">Current Medications: {patient.currentMedications}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaHospitalUser /><span className="p-2">Prescription: {patient.prescription}</span>
                  </div>
                  <div className="icon-text mb-2">
                    <FaNotesMedical /><span className="p-2">Other Medical History: {patient.otherMedicalHistory}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AllPatients;
