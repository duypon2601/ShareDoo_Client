import React from "react";
import { Button, Col, Row } from "antd";

// ✅ Import đúng theo cấu trúc thư mục bạn cung cấp
import  HeaderProfile  from "./HeaderProfile";
import  MyListingsSection  from "./MyListingsSection";
import  RentalHistorySection  from "./RentalHistorySection";
import  ReviewsSection  from "./ReviewsSection";
import FooterProfile from "./FooterProfile"; // ✅ Thêm Footer

const Profile = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="35:29"
      style={{ width: "100%" }}
    >
      <Row>
        <Col span={24}>
          <HeaderProfile />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <RentalHistorySection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <MyListingsSection />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ReviewsSection />
        </Col>
      </Row>
      <Row justify="center" style={{ padding: "24px 0" }}>
        <Col>
          <Button
            type="primary"
            style={{
              backgroundColor: "#a1bfa7",
              borderColor: "#a1bfa7",
            }}
          >
            Logout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FooterProfile /> {/* ✅ Thêm Footer vào cuối */}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
