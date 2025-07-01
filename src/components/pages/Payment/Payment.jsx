import React from "react";
import { Col, Row } from "antd";
import HeaderSection from "./HeaderSection";
import OrderSummarySection from "./OrderSummarySection";

const Payment = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        minHeight: "100vh",
        paddingBottom: "24px",
      }}
    >
      <Row>
        <Col span={24}>
          <HeaderSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <OrderSummarySection />
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
