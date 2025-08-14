import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../../api/user";
import { Button, Col, Row } from "antd";

// ✅ Import đúng theo cấu trúc thư mục bạn cung cấp
import Header from "../Home/Header";
import MyListingsSection from "./MyListingsSection";
import RentalHistorySection from "./RentalHistorySection";
import ReviewsSection from "./ReviewsSection";
import Footer from "../Home/Footer"; // ✅ Thêm Footer

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getCurrentUser().then(res => setUser(res.data.data)).catch(() => setUser(null));
  }, []);

  return (
    <div
      className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
      data-model-id="35:29"
      style={{ width: "100%" }}
    >
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      {user && (
        <Row style={{margin: '20px 0'}}>
          <Col span={24}>
            <div style={{fontWeight: 600, fontSize: 20}}>Xin chào, {user.name} ({user.email})</div>
            <div>Mã sinh viên: {user.studentId || 'Chưa cập nhật'}</div>
            <div>Vai trò: {user.role || 'Người dùng'}</div>
          </Col>
        </Row>
      )}
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

      <Row>
        <Col span={24}>
          <Footer /> {/* ✅ Thêm Footer vào cuối */}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
