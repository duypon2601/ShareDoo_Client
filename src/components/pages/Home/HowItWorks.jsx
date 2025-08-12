import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Tìm & Yêu cầu",
      description: "Tìm kiếm và gửi yêu cầu thuê những món bạn cần",
      icon: "🔍",
    },
    {
      title: "Nhận hàng hoặc Giao hàng",
      description: "Sắp xếp nhận hàng hoặc giao hàng với chủ sở hữu",
      icon: "🤝",
    },
    {
      title: "Trả hàng & Đánh giá",
      description: "Trả lại món đồ và chia sẻ trải nghiệm của bạn",
      icon: "⭐",
    },
  ];

  const handleClick = () => {
    navigate("/searchitems");
  };

  return (
    <section
      className="group1-section4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="group1-text42">Cách Thức Hoạt Động</div>
      <div className="group1-div50">
        {steps.map((step, index) => (
          <div key={index} className={`group1-div${51 + index * 2}`}>
            <div className={`group1-div${52 + index * 2}`}>
              <div className={`group1i${7 + index}`}>
                <div className={`group1-svg${7 + index}`}>
                  <span className="group1-step-icon">{step.icon}</span>
                </div>
              </div>
            </div>
            <span className={`group1-text${43 + index * 2}`}>{step.title}</span>
            <span className={`group1-text${44 + index * 2}`}>
              {step.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
