import { Col, Row } from "antd";
import React from "react";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
import MainContentSection from "./MainContenSection";
const ListNewItemPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col span={24}>
          <HeaderProfile />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MainContentSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FooterProfile />
        </Col>
      </Row>
    </div>
  );
};
export default ListNewItemPage;