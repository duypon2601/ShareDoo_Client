import {
  CreditCardOutlined,
  LockOutlined,
  SafetyOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import React from "react";

const { Title, Text, Paragraph } = Typography;

const OrderSummarySection = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: "16px" }}>
      <Col span={16}>
        <Card
          bordered={false}
          style={{ boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a" }}
        >
          <Title level={3}>Order Summary</Title>
          <Row gutter={[16, 16]} align="middle">
            <Col span={4}>
              <img
                src="https://c.animaapp.com/LMGcYQ4G/img/dall-e-2025-02-24-22-50-40---a-minimalistic-and-modern-logo-desi@2x.png"
                alt="Dalle"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Col>
            <Col span={16}>
              <Title level={5}>Demo Product</Title>
              <Text>Rental Period: 7 days</Text>
              <br />
              <Text>Quantity: 1</Text>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}>
              <Text>$299.00</Text>
            </Col>
          </Row>
          <Divider />
          <Row justify="space-between">
            <Text>Subtotal</Text>
            <Text>$299.00</Text>
          </Row>
          <Row justify="space-between">
            <Text>Tax</Text>
            <Text>$29.90</Text>
          </Row>
          <Row justify="space-between">
            <Title level={5}>Total</Title>
            <Title level={5}>$328.90</Title>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          bordered={false}
          style={{ boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a" }}
        >
          <Title level={3}>Payment Method</Title>
          <Radio.Group style={{ width: "100%" }}>
            <Radio
              style={{ display: "block", height: "58px", lineHeight: "58px" }}
              value="card"
            >
              <CreditCardOutlined style={{ marginRight: "8px" }} />
              Credit/Debit Card
              <span style={{ float: "right" }}>
                <img
                  src="https://c.animaapp.com/LMGcYQ4G/img/frame.svg"
                  alt="Visa"
                  style={{ width: "27px", marginRight: "8px" }}
                />
                <img
                  src="https://c.animaapp.com/LMGcYQ4G/img/frame-1.svg"
                  alt="MasterCard"
                  style={{ width: "27px", marginRight: "8px" }}
                />
                <img
                  src="https://c.animaapp.com/LMGcYQ4G/img/frame-2.svg"
                  alt="Amex"
                  style={{ width: "27px" }}
                />
              </span>
            </Radio>
            <Radio
              style={{ display: "block", height: "58px", lineHeight: "58px" }}
              value="paypal"
            >
              <DollarOutlined style={{ marginRight: "8px" }} />
              PayPal
              <img
                src="https://c.animaapp.com/LMGcYQ4G/img/frame-3.svg"
                alt="PayPal"
                style={{ float: "right", width: "18px" }}
              />
            </Radio>
            <Radio
              style={{ display: "block", height: "58px", lineHeight: "58px" }}
              value="cash"
            >
              Cash on Pickup
            </Radio>
          </Radio.Group>
        </Card>
        <Button
          type="primary"
          block
          style={{
            marginTop: "16px",
            backgroundColor: "#a1bfa7",
            borderColor: "#a1bfa7",
          }}
        >
          Pay Now $328.90
        </Button>
        <Row justify="center" align="middle" style={{ marginTop: "16px" }}>
          <SafetyOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
          <LockOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
          <Paragraph style={{ textAlign: "center", marginTop: "8px" }}>
            Your payment is secured with SSL encryption
          </Paragraph>
        </Row>
      </Col>
    </Row>
  );
};

export default OrderSummarySection;
