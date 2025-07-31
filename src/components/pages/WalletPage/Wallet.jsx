import { Col, Row } from "antd";
import React from "react";
import Header from "../Home/Header";
import WalletMainSection from "./WalletMainSection";

const Wallet = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="787:276"
    >
      <Row className="relative w-full bg-gray-50 border-0 border-none">
        <Col span={24} className="h-[5vh]">
          <Header />
        </Col>
        <Col span={24} className="h-[95vh] pl-[6%] pr-[5%]">
          <WalletMainSection />
        </Col>
      </Row>
    </div>
  );
};

export default Wallet;
