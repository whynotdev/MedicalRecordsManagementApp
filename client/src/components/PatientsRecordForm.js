import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
  Upload,
} from "antd";
import { Option } from "antd/lib/mentions";
import moment from "moment";
import React from "react";
// import { UploadOutlined } from "@ant-design/icons";

function PatientsForm({ onFinish, initialValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initialValues,
        ...(initialValues && {
          timings: [
            moment(initialValues?.timings[0], "HH:mm"),
            moment(initialValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">Personal Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Gender"
            name="gender"
            rules={[{ required: true }]}
          >
            <Input placeholder="Gender" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Age"
            name="age"
            rules={[{ required: true }]}
          >
            <Input placeholder="Age" type="number" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Medical History</h1>

      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Doctor Name"
            name="doctorName"
            rules={[{ required: true, message: "Please enter doctor's name" }]}
          >
            <Input placeholder="Doctor Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Weight" name="weight">
            <Input placeholder="Weight" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Height" name="height">
            <Input placeholder="Height" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Blood Pressure" name="bloodPressure">
            <Input placeholder="Blood Pressure" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Blood Group" name="bloodGroup" className="input">
            <Select placeholder="Select Blood Group">
              <Option value="A+">A+</Option>
              <Option value="A-">A-</Option>
              <Option value="B+">B+</Option>
              <Option value="B-">B-</Option>
              <Option value="AB+">AB+</Option>
              <Option value="AB-">AB-</Option>
              <Option value="O+">O+</Option>
              <Option value="O-">O-</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            label="Previous Medical Conditions"
            name="previousMedicalConditions"
          >
            <Input.TextArea
              rows={4}
              placeholder="Previous Medical Conditions"
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Disabilities" name="disabilities">
            <Input.TextArea rows={4} placeholder="Disabilities" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Surgeries" name="surgeries">
            <Input.TextArea rows={4} placeholder="Surgeries" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Allergies" name="allergies">
            <Input.TextArea rows={4} placeholder="Allergies" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Current Medications" name="currentMedications">
            <Input.TextArea rows={4} placeholder="Current Medications" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Prescription" name="prescription">
            <Input.TextArea rows={4} placeholder="Prescription" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            label="Any Other Medical History"
            name="otherMedicalHistory"
          >
            <Input.TextArea rows={4} placeholder="Any Other Medical History" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Test Result Name" name="testResultName">
            <Input placeholder="Test Result Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Positive/Negative" name="testResultStatus">
            <Select placeholder="Select">
              <Select.Option value="positive">Positive</Select.Option>
              <Select.Option value="negative">Negative</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item label="Write About Test" name="testDescription">
            <Input.TextArea rows={4} placeholder="Write about the test" />
          </Form.Item>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default PatientsForm;
