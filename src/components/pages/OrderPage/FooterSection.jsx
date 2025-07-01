import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row, Typography } from "antd";
import React from "react";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterSection = () => {
  return (
    <Footer style={{ backgroundColor: "#1f1f1f", padding: "40px 50px" }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            About
          </Title>
          <Text style={{ color: "#bfbfbf", display: "block" }}>About Us</Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            How It Works
          </Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>Careers</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Support
          </Title>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            Help Center
          </Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            Safety Center
          </Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>Contact Us</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Legal
          </Title>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            Terms of Service
          </Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            Privacy Policy
          </Text>
          <Text style={{ color: "#bfbfbf", display: "block" }}>
            Cookie Policy
          </Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Follow Us
          </Title>
          <FacebookOutlined
            style={{ fontSize: "20px", color: "#bfbfbf", marginRight: "16px" }}
          />
          <TwitterOutlined
            style={{ fontSize: "20px", color: "#bfbfbf", marginRight: "16px" }}
          />
          <InstagramOutlined
            style={{ fontSize: "20px", color: "#bfbfbf", marginRight: "16px" }}
          />
          <LinkedinOutlined style={{ fontSize: "20px", color: "#bfbfbf" }} />
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          marginTop: "40px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        <Text style={{ color: "#bfbfbf" }}>
          © 2025 ShareDoo. All rights reserved.
        </Text>
      </Row>
    </Footer>
  );
};

export default FooterSection;
