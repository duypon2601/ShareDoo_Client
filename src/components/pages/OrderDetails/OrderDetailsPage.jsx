import { Col, Row } from "antd";
import React from "react";
import  OrderDetailsSection  from "./OrderDetailsSection";
import Header from "../Home/Header";  
import Footer from "../Home/Footer";
const OrderDetailsPage = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="31:1437"
    >
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <OrderDetailsSection />
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
export default OrderDetailsPage;