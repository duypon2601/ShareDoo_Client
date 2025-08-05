import React from "react";
import { Col, Row } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import UserDetailsSection from "./UserDetailsSection";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <Row gutter={[0, 32]}>
          <Col span={24}>
            <UserDetailsSection />
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
