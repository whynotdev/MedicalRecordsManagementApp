import React from "react";
import { Col, Row, Form, Input, Button } from "antd";
import Layout from "../../components/Layout";
import PatientsForm from "../../components/PatientsRecordForm";
import axios from "axios";
import { toast } from "react-hot-toast";

const PatientsRecord = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/patient/create-patient-record", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        toast.success("Patient record created successfully");
        // Handle success as needed
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
