import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="group1-section6">
      <div className="group1-div70">
        <h2 className="group1-text60">
          Kiếm tiền bằng cách cho thuê đồ của bạn!
        </h2>
        <p className="group1-text61">
          Biến những món đồ không dùng thành tiền trong khi giúp đỡ các bạn sinh
          viên khác
        </p>
        <button
          className="group1-button18"
          onClick={() => navigate("/ListNewItem")}
        >
          Bắt đầu đăng tin
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
