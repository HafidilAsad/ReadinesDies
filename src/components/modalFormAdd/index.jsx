import React from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

export default function FormAdd() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Number Dies"
          name="noDies"
          rules={[
            {
              required: true,
              message: "Please input Number Dies",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name Dies"
          name="nameDies"
          rules={[
            {
              required: true,
              message: "Please input Name Dies",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="select"
          label="Select Status"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Status",
            },
          ]}
        >
          <Select placeholder="Please select Status Dies">
            <Option value="diesok">DIES OK</Option>
            <Option value="diesng">DIES REPAIR</Option>
            <Option value="diestrial">DIES TRIAL</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
