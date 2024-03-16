import React from "react";
import { Col, Row, Form, Input, Button } from "antd";
import Layout from "../../components/Layout";
import PatientsForm from "../../components/PatientsRecordForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PatientsRecord = () => {
  const { userId, doctorId } = useParams();
  // console.log(userId, doctorId);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      // console.log("userId:", userId);
      // console.log("doctorId:", doctorId);
      const data = {
        ...values,
        userId: userId,
        doctorId: doctorId,
      };
      const response = await axios.post(
        "/api/patient/create-patient-record",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Patient record created successfully");
        navigate("/");
      } else {
        toast.error("Failed to create patient record");
      }
    } catch (error) {
      console.error("Error creating patient record:", error);
      toast.error("Failed to create patient record");
    }
  };

  return (
    <Layout>
      <h1 className="page-header">Patient Record Creation</h1>
      <hr />
      <PatientsForm onFinish={onFinish} />
    </Layout>
  );
};

export default PatientsRecord;
