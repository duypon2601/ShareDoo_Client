import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import React from "react";

const { Footer } = Layout;

 const ConfirmSection = () => {
  return (
    <Footer style={{ backgroundColor: "#1f1f1f", padding: "40px 0" }}>
      <Row justify="center">
        <Col span={5}>
          <h3 style={{ color: "white" }}>About</h3>
          <p style={{ color: "#bfbfbf" }}>About Us</p>
          <p style={{ color: "#bfbfbf" }}>How It Works</p>
          <p style={{ color: "#bfbfbf" }}>Careers</p>
        </Col>
        <Col span={5}>
          <h3 style={{ color: "white" }}>Support</h3>
          <p style={{ color: "#bfbfbf" }}>Help Center</p>
          <p style={{ color: "#bfbfbf" }}>Safety Center</p>
          <p style={{ color: "#bfbfbf" }}>Contact Us</p>
        </Col>
        <Col span={5}>
          <h3 style={{ color: "white" }}>Legal</h3>
          <p style={{ color: "#bfbfbf" }}>Terms of Service</p>
          <p style={{ color: "#bfbfbf" }}>Privacy Policy</p>
          <p style={{ color: "#bfbfbf" }}>Cookie Policy</p>
        </Col>
        <Col span={5}>
          <h3 style={{ color: "white" }}>Follow Us</h3>
          <FacebookOutlined
            style={{ color: "#bfbfbf", fontSize: "20px", marginRight: "16px" }}
          />
          <TwitterOutlined
            style={{ color: "#bfbfbf", fontSize: "20px", marginRight: "16px" }}
          />
          <InstagramOutlined
            style={{ color: "#bfbfbf", fontSize: "20px", marginRight: "16px" }}
          />
          <LinkedinOutlined style={{ color: "#bfbfbf", fontSize: "20px" }} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col>
          <p style={{ color: "#bfbfbf", textAlign: "center" }}>
            © 2025 ShareDoo. All rights reserved.
          </p>
        </Col>
      </Row>
    </Footer>
  );
};
export default ConfirmSection;