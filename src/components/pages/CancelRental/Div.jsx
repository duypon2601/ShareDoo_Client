import { Col, Row } from "antd";
import React from "react";

import  CancellationFormSection  from "./CancellationFormSection";
import  HeaderProfile  from "./HeaderProfile";
import FooterProfile from "./FooterProfile";

export const Div = () => {
  return (
    <Row data-model-id="31:1725">
      <Col span={24}>
        <HeaderProfile />
      </Col>
      <Col span={24}>
        <CancellationFormSection />
      </Col>
      <Col span={24}>
        <FooterProfile />
      </Col>
    </Row>
  );
};
export default Div;