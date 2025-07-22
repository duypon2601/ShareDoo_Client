import React from "react";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Progress,
  Row,
  Typography,
} from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Select } from "antd";

const { Title, Text } = Typography;

const MainContentSection = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "calc(100vh - 140px)", // Trừ chiều cao header + footer
        boxSizing: "border-box",
      }}
    >
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16} xl={12}>
          <div
            style={{
              background: "#fff",
              padding: 32,
              borderRadius: 12,
              boxShadow:
                "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Row justify="space-between" align="middle" style={{ marginBottom: 12 }}>
              <Col>
                <Title level={2} style={{ marginBottom: 0 }}>
                  List Your Item
                </Title>
              </Col>
              <Col>
                <Text type="secondary">Step 1 of 4</Text>
              </Col>
            </Row>

            <Progress percent={25} showInfo={false} style={{ marginBottom: 24 }} />

            <Title level={4}>Basic Information</Title>
            <Form layout="vertical">
              <Form.Item
                label="Item Name"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="Enter item name" />
              </Form.Item>

              <Form.Item
  label="Category"
  name="categories"
  required
  tooltip="You can select multiple categories or type your own"
>
  <Select
    mode="tags"
    placeholder="Select or type categories"
    style={{ width: "100%" }}
    options={[
      { label: "Books", value: "books" },
      { label: "Electronics", value: "electronics" },
      { label: "Clothing", value: "clothing" },
      { label: "Event Supplies", value: "event_supplies" },
      { label: "Sports Equipment", value: "sports_equipment" },
      { label: "Other", value: "other" }, // vẫn giữ lại Other
    ]}
  />
</Form.Item>

              <Form.Item
                label="Description"
                required
                tooltip="This is a required field"
              >
                <Input.TextArea
                  placeholder="Describe your item (max 500 characters)"
                  maxLength={500}
                  showCount
                  style={{ width: "100%" }}
                />
              </Form.Item>

              <Row justify="space-between" align="middle">
                <Col>
                  <Button type="text">Cancel</Button>
                </Col>
                <Col>
                  <Button type="primary" icon={<RightOutlined />}>
                    Next
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainContentSection;
