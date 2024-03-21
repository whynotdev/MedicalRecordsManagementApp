import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
function AllPatients() {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const dispatch = useDispatch();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const doctorId = user?._id;
        // console.log("gaaaaaaa", doctorId);
        //  "65eed1973b5b2d9076fb7741";
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
        <h1>All Patients</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && patients.length === 0 && <p>No patients found.</p>}
        <div className="row">
          {patients.map((patient, index) => (
            <div className="card" key={index}>
              <h2>{`${patient.firstName} ${patient.lastName}`}</h2>
              <p>Age: {patient.age}</p>
              <p>Phone Number: {patient.phoneNumber}</p>
              <p>Address: {patient.address}</p>
              {/* Display other patient information */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AllPatients;
