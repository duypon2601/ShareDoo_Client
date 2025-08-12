import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/searchItems"); // Điều hướng đến trang danh sách sản phẩm
  };

  return (
    <section className="group1-section1">
      <div className="group1-img1" />
      <div className="group1-div11" />
      <div className="group1-div12">
        <div className="group1-div13">
          <h1 className="group1-text10">
            Thuê thông minh cho sinh viên – Tiết kiệm, thuê dễ dàng!
          </h1>
          <p className="group1-text11">
            Tham gia cùng hàng nghìn sinh viên đang tiết kiệm chi phí qua chia
            sẻ thông minh.
          </p>
          <div className="group1-div14">
            <button className="group1-button10" onClick={handleExploreClick}>
              <span className="group1-text12">Khám phá ngay</span>
            </button>
            <button className="group1-button11">
              <span className="group1-text13">Đăng tin cho thuê</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
