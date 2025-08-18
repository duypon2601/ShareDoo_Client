import { Col, Row } from "antd";
import React from "react";

import CancellationFormSection from "./CancellationFormSection";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export const Div = () => {
  return (
    <Row data-model-id="31:1725">
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <CancellationFormSection />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};
export default Div;
