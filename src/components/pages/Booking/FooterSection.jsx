import { Col, Layout, Row } from "antd";
import React from "react";

const { Footer } = Layout;

export const FooterSection = () => {
  return (
    <Footer style={{ backgroundColor: "#1f2937", padding: "40px 0" }}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
            RentHub
          </div>
          <p style={{ color: "#9ca3af" }}>
            The trusted platform for peer-to-peer rentals
          </p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div style={{ color: "white", fontWeight: "600" }}>Quick Links</div>
          <div style={{ color: "#9ca3af" }}>
            <p>About Us</p>
            <p>How it Works</p>
            <p>Trust & Safety</p>
            <p>Contact</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div style={{ color: "white", fontWeight: "600" }}>Legal</div>
          <div style={{ color: "#9ca3af" }}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <div style={{ color: "white", fontWeight: "600" }}>Follow Us</div>
          <div>
            <img
              src="https://c.animaapp.com/MTOlWwgI/img/frame-4.svg"
              alt="Facebook"
              style={{ marginRight: "10px" }}
            />
            <img
              src="https://c.animaapp.com/MTOlWwgI/img/frame-5.svg"
              alt="Twitter"
              style={{ marginRight: "10px" }}
            />
            <img
              src="https://c.animaapp.com/MTOlWwgI/img/frame-6.svg"
              alt="Instagram"
              style={{ marginRight: "10px" }}
            />
            <img
              src="https://c.animaapp.com/MTOlWwgI/img/frame-7.svg"
              alt="LinkedIn"
            />
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          marginTop: "20px",
          borderTop: "1px solid #374151",
          paddingTop: "20px",
        }}
      >
        <Col>
          <p style={{ color: "#9ca3af", textAlign: "center" }}>
            © 2025 RentHub. All rights reserved.
          </p>
        </Col>
      </Row>
    </Footer>
  );
};
