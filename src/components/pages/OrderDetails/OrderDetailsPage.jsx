import { Col, Row } from "antd";
import React from "react";
import  OrderDetailsSection  from "./OrderDetailsSection";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
const OrderDetailsPage = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="31:1437"
    >
      <Row>
        <Col span={24}>
          <HeaderProfile />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <OrderDetailsSection />
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
export default OrderDetailsPage;