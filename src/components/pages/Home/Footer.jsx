// components/Footer.jsx
import React from "react";
import "./Home.css";

const Footer = () => {
  const handleFacebookClick = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=61577146375627";
  };

  return (
    <footer className="group1-footer">
      <div className="group1-footer-columns">
        <div className="group1-footer-column">
          <h4>Giới Thiệu</h4>
          <p>Về Chúng Tôi</p>
          <p>Cách Hoạt Động</p>
          <p>Nghề Nghiệp</p>
        </div>
        <div className="group1-footer-column">
          <h4>Hỗ Trợ</h4>
          <p>Trung Tâm Trợ Giúp</p>
          <p>Trung Tâm An Toàn</p>
          <p>Liên Hệ</p>
        </div>
        <div className="group1-footer-column">
          <h4>Pháp Lý</h4>
          <p>Điều Khoản Dịch Vụ</p>
          <p>Chính Sách Bảo Mật</p>
          <p>Chính Sách Cookie</p>
        </div>
        <div className="group1-footer-column">
          <h4>Theo Dõi Chúng Tôi</h4>
          <div className="group1-social-icons">
            <button
              className="group1-social-button facebook"
              onClick={handleFacebookClick}
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/nolan/50/facebook-new.png"
                alt="facebook-new"
              />
            </button>
          </div>
        </div>
      </div>
      <p className="group1-text-copyright">
        © 2025 ShareDoo. Bảo vệ mọi quyền.
      </p>
    </footer>
  );
};

export default Footer;
