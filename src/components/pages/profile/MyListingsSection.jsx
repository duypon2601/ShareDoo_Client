import { Card, Col, Row } from "antd";
import React from "react";

const stats = [
  {
    icon: "https://c.animaapp.com/LQrXRuVX/img/frame-1.svg",
    value: "24",
    label: "Total Rentals",
  },
  {
    icon: "https://c.animaapp.com/LQrXRuVX/img/frame-2.svg",
    value: "12",
    label: "Items Listed",
  },
  {
    icon: "https://c.animaapp.com/LQrXRuVX/img/frame-3.svg",
    value: "4.8/5",
    label: "Average Rating",
  },
];

const MyListingsSection = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: "24px" }} justify="center">
      {stats.map((item, idx) => (
        <Col xs={24} sm={12} md={8} key={idx}>
          <Card
            bordered={false}
            style={{
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.06)",
              height: "100%",
            }}
          >
            <Row align="middle">
              <Col>
                <img
                  alt="icon"
                  src={item.icon}
                  style={{ width: 32, height: 32 }}
                />
              </Col>
              <Col style={{ marginLeft: 12 }}>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#111827" }}>
                  {item.value}
                </div>
                <div style={{ color: "#6b7280" }}>{item.label}</div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MyListingsSection;
