import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

export const FooterSection = () => {
  return (
    <div className="bg-gray-800">
      <Row justify="center" style={{ padding: "40px 0" }}>
        <Col span={6}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
            RentHub
          </div>
          <p style={{ color: "gray", marginTop: "12px" }}>
            Your trusted platform for renting tech equipment.
          </p>
        </Col>
        <Col span={6}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
            Quick Links
          </div>
          <div style={{ marginTop: "12px" }}>
            <p style={{ color: "gray" }}>About Us</p>
            <p style={{ color: "gray" }}>How it Works</p>
            <p style={{ color: "gray" }}>Support</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
            Legal
          </div>
          <div style={{ marginTop: "12px" }}>
            <p style={{ color: "gray" }}>Privacy Policy</p>
            <p style={{ color: "gray" }}>Terms of Service</p>
            <p style={{ color: "gray" }}>Cookie Policy</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
            Follow Us
          </div>
          <div style={{ marginTop: "12px" }}>
            <FacebookOutlined
              style={{ fontSize: "24px", color: "gray", marginRight: "16px" }}
            />
            <TwitterOutlined
              style={{ fontSize: "24px", color: "gray", marginRight: "16px" }}
            />
            <InstagramOutlined style={{ fontSize: "24px", color: "gray" }} />
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{ borderTop: "1px solid gray", padding: "20px 0" }}
      >
        <p style={{ color: "gray" }}>© 2025 RentHub. All rights reserved.</p>
      </Row>
    </div>
  );
};
