import { Col, Row } from "antd";
import React from "react";
import  HeaderSection  from "./HeaderProfile";
import  ReviewsSection from "./ReviewsSection";
import  FooterSection  from "./FooterProfile";

const Review = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="35:325"
    >
      <Row>
        <Col span={24}>
          <HeaderSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ReviewsSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FooterSection />
        </Col>
      </Row>
    </div>
  );
};

export default Review;
