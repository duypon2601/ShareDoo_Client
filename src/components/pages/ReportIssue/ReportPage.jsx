import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Report from "./Report";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";

const ReportPage = () => {
  // ✅ Chặn tràn ngang
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = null;
    };
  }, []);

  return (
    <div
      className="inline-flex flex-col items-start relative bg-white"
      style={{ width: "100%" }}
    >
      <Row>
        <Col span={24}>
          <HeaderProfile />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Report />
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

export default ReportPage;
