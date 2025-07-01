import { Col, Layout, Row } from "antd";
import React from "react";

const { Footer } = Layout;

export const FooterSection = () => {
  return (
    <Footer style={{ backgroundColor: "#1f2937", padding: "40px 0" }}>
      <Row justify="center">
        <Col span={20}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>
              <h2
                style={{ color: "white", fontSize: "18px", fontWeight: "600" }}
              >
                RentHub
              </h2>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Your trusted platform for renting tech equipment.
              </p>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h2
                style={{ color: "white", fontSize: "18px", fontWeight: "600" }}
              >
                Quick Links
              </h2>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>About Us</p>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>How it Works</p>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>Support</p>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h2
                style={{ color: "white", fontSize: "18px", fontWeight: "600" }}
              >
                Legal
              </h2>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Privacy Policy
              </p>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Terms of Service
              </p>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Cookie Policy
              </p>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <h2
                style={{ color: "white", fontSize: "18px", fontWeight: "600" }}
              >
                Follow Us
              </h2>
              <div style={{ display: "flex", gap: "16px" }}>
                <img
                  src="https://c.animaapp.com/wFDyQwSi/img/frame-12.svg"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="https://c.animaapp.com/wFDyQwSi/img/frame-13.svg"
                  alt="Twitter"
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="https://c.animaapp.com/wFDyQwSi/img/frame-14.svg"
                  alt="Instagram"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              marginTop: "40px",
              borderTop: "1px solid #374151",
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              © 2025 RentHub. All rights reserved.
            </p>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};
