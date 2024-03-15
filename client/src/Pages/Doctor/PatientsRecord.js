import React from "react";
import { Col, Row, Form, Input, Select, DatePicker, Button } from "antd";
import Layout from "../../components/Layout";

const PatientsRecord = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission here
    console.log("Form values:", values);
  };

  return (
    <Layout>
      <h1 className="page-header">Patient Record Creation</h1>
      <hr />
      
    </Layout>
  );
};

export default PatientsRecord;
