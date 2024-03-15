import React from "react";
import { Col, Row, Form, Input, Select, DatePicker, Button } from "antd";
import Layout from "../../components/Layout";
import PatientsForm from "../../components/PatientsRecordForm";

const PatientsRecord = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
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
