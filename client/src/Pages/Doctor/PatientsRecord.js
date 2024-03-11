import React from "react";
import { Col, Row, Form, Input, Select, DatePicker, Button } from "antd";
import Layout from "../../components/Layout";

const { Option } = Select;

const PatientsRecord = () => {
  // const onFinish = (values) => {
  //   // Include logic to send data to the server
  //   // console.log("Received values:", values);
  //   // For demonstration purposes, you can use axios to send data to the server
  //   // axios.post("/api/submitPatientRecord", values)
  //   //   .then(response => {
  //   //     console.log("Submission successful:", response.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error("Submission error:", error);
  //   //   });
  // };

  const medicalHistoryOptions = ["None", "Previous surgeries", "Chronic conditions", "Other"];

  return (
    <Layout>
      <h1 className="page-header">Patient Record Creation</h1>
      <hr />
    </Layout>
  );
};

export default PatientsRecord;
