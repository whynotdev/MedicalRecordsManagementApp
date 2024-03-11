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

      <Form
        form={form}
        name="patientsRecordForm"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        {/* Personal Information Section */}
        <h2>Personal Information</h2>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name={["personal_info", "name"]}
              rules={[{ required: true, message: "Please enter the name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Date of Birth"
              name={["personal_info", "dob"]}
              rules={[{ required: true, message: "Please select the date of birth" }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Gender"
              name={["personal_info", "gender"]}
              rules={[{ required: true, message: "Please select the gender" }]}
            >
              <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Contact Details"
              name={["personal_info", "contact_details"]}
              rules={[{ required: true, message: "Please enter contact details" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address"
              name={["personal_info", "address"]}
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          {/* Add more personal information fields as needed */}
        </Row>

        {/* Medical History Section */}
        <h2>Medical History</h2>
        <Form.List name="medical_history">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Row key={key} gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Condition"
                      name={[name, "condition"]}
                      fieldKey={[fieldKey, "condition"]}
                      rules={[{ required: true, message: "Please enter the condition" }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Medication"
                      name={[name, "medication"]}
                      fieldKey={[fieldKey, "medication"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Date Diagnosed"
                      name={[name, "date_diagnosed"]}
                      fieldKey={[fieldKey, "date_diagnosed"]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Height"
                      name={[name, "height"]}
                      fieldKey={[fieldKey, "height"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Weight"
                      name={[name, "weight"]}
                      fieldKey={[fieldKey, "weight"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  {/* Add more medical history fields as needed */}
                  <Col span={2}>
                    <Button type="danger" onClick={() => remove(name)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()}>
                  Add Medical History
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* Submit Button */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default PatientsRecord;
