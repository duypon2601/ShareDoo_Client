import React from "react";
import { Col, Row } from "antd";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
import ProfileSection from "./ProfileSection";
import UserDetailsSection from "./UserDetailsSection";

const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff", // Xóa viền bằng cách set nền trắng toàn màn
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <HeaderProfile />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        <Row gutter={[0, 32]}>
          <Col span={24}>
            <ProfileSection />
          </Col>
          <Col span={24}>
            <UserDetailsSection />
          </Col>
        </Row>
      </div>

      <FooterProfile />
    </div>
  );
};

export default Main;
