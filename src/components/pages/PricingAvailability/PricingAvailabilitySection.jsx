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
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Row align="middle" gutter={12}>
          <Col>
            <Avatar
              src="/img/ShareDoo.png"
              size={48}
              shape="circle"
              style={{ backgroundColor: "#fff" }}
            />
          </Col>
          <Col>
            <Text strong style={{ fontSize: "20px", color: "#1f1f1f" }}>
              ShareDoo
            </Text>
          </Col>
        </Row>

        <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Header>

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

      {/* ✅ FOOTER */}
      <Footer
        style={{
          backgroundColor: "#1f2937",
          color: "#9ca3af",
          padding: "40px 0",
        }}
      >
        <Row justify="center" gutter={[32, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              About
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              How It Works
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Support
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Help Center
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Safety Center
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Contact Us
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Legal
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Terms of Service
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Privacy Policy
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Cookie Policy
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Follow Us
            </Title>
            <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
              <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
              <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
              <InstagramOutlined
                style={{ fontSize: "20px", color: "#9ca3af" }}
              />
            </div>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            marginTop: "32px",
            borderTop: "1px solid #374151",
            paddingTop: "16px",
          }}
        >
          <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
            © 2025 ShareDoo. All rights reserved.
          </Text>
        </Row>
      </Footer>
    </Layout>
  );
};

export default PricingAvailabilitySection;
