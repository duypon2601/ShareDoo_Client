import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterProfile = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#1f2937",
        color: "#9ca3af",
        padding: "40px 0",
        overflowX: "hidden",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
      >
        <Row gutter={[32, 24]} justify="space-between">
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
              <InstagramOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
            </div>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            marginTop: "32px",
            borderTop: "1px solid #374151",
            paddingTop: "16px",
            textAlign: "center",
          }}
        >
          <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
            © 2025 ShareDoo. All rights reserved.
          </Text>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterProfile;
