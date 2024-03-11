// HealthTracking.js
import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Form, Input, Select } from "antd";
import {
  HeartOutlined,
  LineChartOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Layout from "../../components/Layout";

const { Meta } = Card;
const { Option } = Select;

const HealthTracking = () => {
  const [bloodPressure, setBloodPressure] = useState([]);
  const [weight, setWeight] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("bloodPressure");
  const [enteredValue, setEnteredValue] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Perform calculations or validations based on user input
    if (selectedMetric === "weight") {
      // Simple BMI calculation for weight input
      const bmi = calculateBMI(enteredValue);
      setWeight([...weight, `New Weight Data (BMI: ${bmi.toFixed(2)})`]);
    } else {
      setBloodPressure([...bloodPressure, "New Blood Pressure Data"]);
    }
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const calculateBMI = (weight) => {
    // For simplicity, using a basic BMI calculation (weight in kilograms)
    const height = 1.75; // Assume a height for the example
    return weight / (height * height);
  };

  const BloodPressureCard = () => (
    <Card
      title="Blood Pressure"
      extra={<LineChartOutlined />}
      style={{ width: 300, margin: "16px", backgroundColor: "#FFD700" }}
    >
      <Meta description="Current Blood Pressure: 120/80 mmHg" />
    </Card>
  );

  const WeightCard = () => (
    <Card
      title="Weight"
      extra={<LineChartOutlined />}
      style={{ width: 300, margin: "16px", backgroundColor: "#87CEEB" }}
    >
      <Meta description="Current Weight: 70 kg" />
    </Card>
  );

  return (
    <Layout>
      <div>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <BloodPressureCard />
          </Col>
          <Col span={12}>
            <WeightCard />
          </Col>
        </Row>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          Add Health Data
        </Button>
        <Modal
          title="Enter Health Data"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form>
            <Form.Item label="Metric">
              <Select
                defaultValue="bloodPressure"
                onChange={(value) => setSelectedMetric(value)}
              >
                <Option value="bloodPressure">Blood Pressure</Option>
                <Option value="weight">Weight</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Value">
              <Input
                type="number"
                value={enteredValue}
                onChange={(e) => setEnteredValue(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
};

export default HealthTracking;
