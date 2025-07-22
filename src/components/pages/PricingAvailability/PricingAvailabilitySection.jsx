import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Input,
  Layout,
  Progress,
  Row,
  Switch,
  Typography,
} from "antd";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const PricingAvailabilitySection = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* ✅ CUSTOM HEADER */}
      

      {/* ✅ CONTENT */}
      <Content style={{ padding: "40px 20px", flex: 1 }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Row justify="space-between" style={{ marginBottom: 12 }}>
              <Col>
                <Title level={4} style={{ margin: 0 }}>
                  List Your Item
                </Title>
              </Col>
              <Col>
                <Text type="secondary">Step 3 of 4</Text>
              </Col>
            </Row>
            <Progress percent={75} showInfo={false} strokeColor="#10b981" />

            <div
              style={{
                background: "#ffffff",
                padding: 24,
                borderRadius: 12,
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                marginTop: 24,
              }}
            >
              <Title level={4}>Pricing & Availability</Title>

              {/* Rental Price */}
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: "block", marginBottom: 8 }}>
                  Rental Price
                </Text>
                <div style={{ display: "flex", gap: 8 }}>
                  <Button>Daily</Button>
                  <Button type="primary">Weekly</Button>
                  <Button>Monthly</Button>
                </div>
              </div>
              <Input prefix="$" placeholder="Enter price per day" />

              {/* Deposit */}
              <Row
                justify="space-between"
                align="middle"
                style={{ marginTop: 24 }}
              >
                <Col>
                  <Text>Security Deposit</Text>
                </Col>
                <Col>
                  <Text type="secondary">Required</Text> <Switch />
                </Col>
              </Row>
              <Input
                prefix="$"
                placeholder="Enter deposit amount"
                style={{ marginTop: 8 }}
              />

              {/* Pickup location */}
              <div style={{ marginTop: 24 }}>
                <Text>Pickup Location</Text>
                <Input
                  prefix={
                    <img
                      src="https://c.animaapp.com/Z30SZNMY/img/frame.svg"
                      alt="location"
                      style={{ width: 16, marginRight: 4 }}
                    />
                  }
                  placeholder="Enter address"
                />
              </div>
              <div
                style={{
                  marginTop: 12,
                  height: 200,
                  borderRadius: 8,
                  backgroundImage:
                    "url(https://c.animaapp.com/Z30SZNMY/img/img.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Buttons */}
              <Row justify="space-between" style={{ marginTop: 24 }}>
                <Button icon={<LeftOutlined />}>Back</Button>
                <Button
                  icon={<RightOutlined />}
                  type="primary"
                  style={{
                    backgroundColor: "#10b981",
                    borderColor: "#10b981",
                  }}
                >
                  Next
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>

     
    </Layout>
  );
};

export default PricingAvailabilitySection;
