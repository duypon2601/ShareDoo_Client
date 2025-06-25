import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { Avatar, Button, Col, Layout, Row, Typography } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const Succes = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* ✅ HEADER */}
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "72px",
        }}
      >
        <Row align="middle" gutter={12} style={{ flex: 1 }}>
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
      <Content>
        <Row
          justify="center"
          align="middle"
          style={{ minHeight: "80vh", padding: "0 16px" }}
        >
          <Col style={{ textAlign: "center", maxWidth: "400px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                backgroundColor: "#e6f4ea",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckOutlined style={{ fontSize: "28px", color: "#1f1f1f" }} />
            </div>

            <Title level={4} style={{ fontWeight: 700 }}>
              Your item has been successfully listed!
            </Title>
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: 32 }}
            >
              You can now manage your listing in your profile.
            </Text>

            <Button
              type="primary"
              block
              size="large"
              style={{
                backgroundColor: "#a1bfa7",
                borderColor: "#a1bfa7",
                color: "#fff",
                marginBottom: 12,
                fontWeight: "bold",
              }}
            >
              View My Listing
            </Button>

            <Button
              type="default"
              block
              size="large"
              style={{
                borderColor: "#a1bfa7",
                color: "#a1bfa7",
                fontWeight: "bold",
              }}
            >
              List Another Item
            </Button>
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
              <FacebookOutlined
                style={{ fontSize: "20px", color: "#9ca3af" }}
              />
              <TwitterOutlined
                style={{ fontSize: "20px", color: "#9ca3af" }}
              />
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

export default Succes;
