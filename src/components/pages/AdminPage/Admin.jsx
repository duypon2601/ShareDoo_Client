import { Col, Row } from "antd";
import React from "react";
import DashboardStatsSection from "./DashboardStatsSection";
import WithdrawalRequestsSection from "./WithdrawalRequestsSection";

const Admin = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="622:40"
    >
      <Row className="relative w-full bg-gray-50 border-0 border-none">
        <Col span={4}>
          <DashboardStatsSection />
        </Col>
        <Col span={20}>
          <WithdrawalRequestsSection />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
