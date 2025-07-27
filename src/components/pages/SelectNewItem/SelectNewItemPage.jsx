import { Col, Row } from "antd";
import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import SelectItem from "./selectItem";
const SelectNewItemPage = () => {
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
          <SelectItem />
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
export default SelectNewItemPage;
