import { Col, Row } from "antd";
import React from "react";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
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
          <HeaderProfile />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <SelectItem />
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
export default SelectNewItemPage;