import { Col, Row } from "antd";
import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
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
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MainContentSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};
export default ListNewItemPage;
