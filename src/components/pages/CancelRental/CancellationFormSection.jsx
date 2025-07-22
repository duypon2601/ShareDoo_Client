import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Alert, Button, Card, Col, Input, Row, Select, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;
const { Option } = Select;

const CancellationFormSection = () => {
  return (
    <div
      style={{
        paddingTop: 64,
        paddingBottom: 64,
        display: "flex",
        justifyContent: "center",
        background: "#f8f8f8", // hoặc để background như bạn muốn
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600 }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Cancel Rental Order
        </Title>

        {/* ✅ Product Summary Card */}
        <Card style={{ marginBottom: 24 }}>
          <Row gutter={16} align="middle">
            <Col>
              <img
                src="https://c.animaapp.com/rckUARHm/img/img@2x.png"
                alt="Product"
                style={{ width: 72, height: 72, borderRadius: 8 }}
              />
            </Col>
            <Col flex="auto">
              <Text strong style={{ display: "block" }}>Demo Product</Text>
              <Text style={{ display: "block" }}>
                Rental Period: Jan 15, 2025 – Feb 15, 2025
              </Text>
              <Text style={{ display: "block" }}>
                Order #: RNT-2025-0123
              </Text>
              <Text strong style={{ display: "block" }}>Total: $249.99</Text>
            </Col>
            <Col>
              <Button
                type="primary"
                shape="round"
                icon={<CheckCircleOutlined />}
                size="small"
              >
                Active
              </Button>
            </Col>
          </Row>
        </Card>

        {/* ✅ Form Card */}
        <Card>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Text strong>Reason for Cancellation</Text>
              <Select placeholder="Select a reason" style={{ width: "100%" }}>
                <Option value="reason1">Change of plans</Option>
                <Option value="reason2">Found alternative</Option>
              </Select>
            </Col>

            <Col span={24}>
              <Text strong>Additional Details (Optional)</Text>
              <Input.TextArea
                placeholder="Please provide any additional information..."
                rows={4}
              />
            </Col>

            <Col span={24}>
              <Alert
                message="Cancellation policies may apply. Review terms before proceeding."
                type="warning"
                showIcon
                icon={<ExclamationCircleOutlined />}
              />
            </Col>

            <Col span={24}>
              <Button type="primary" block>
                Confirm Cancellation
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default CancellationFormSection;
