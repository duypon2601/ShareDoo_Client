import { Col, Row } from "antd";
import React from "react";
import  HeaderSection  from "./HeaderSection";
import  MainContentSection  from "./MainContentSection";
import ConfirmSection from "./ConfirmSection";

 const ConfirmPage = () => {
  return (
    <Row data-model-id="31:1805">
      <Col span={24}>
        <HeaderSection />
      </Col>
      <Col span={24}>
        <MainContentSection />
      </Col>
      <Col span={24}>
        <ConfirmSection />
      </Col>
    </Row>
  );
};
export default ConfirmPage;