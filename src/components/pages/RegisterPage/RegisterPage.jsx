import { Button, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faHome,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const { Title, Text } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.address ||
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        message.error("Vui lòng điền đầy đủ thông tin!");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        message.error("Mật khẩu xác nhận không khớp!");
        return;
      }

      setLoading(true);
      await api.post("/api/users", {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        username: formData.username,
        password: formData.password,
        role: "ADMIN",
      });

      message.success("🎉 Tạo tài khoản thành công!");
      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
      message.error("Đăng ký thất bại! Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #a1bfa7 0%, #e3d5be 100%)",
        animation: "gradient 15s ease infinite",
        backgroundSize: "200% 200%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          animation: "scaleIn 0.4s ease-out",
          margin: "20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          {/* <img
            src="/img/logo.png"
            alt="Logo"
            style={{ width: "100px", marginBottom: "16px" }}
          /> */}
          <Title
            level={2}
            style={{
              margin: 0,
              color: "#333333",
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            Đăng ký
          </Title>
          <Text style={{ color: "#666666", fontSize: "16px" }}>
            Tạo tài khoản để bắt đầu chia sẻ
          </Text>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Họ và tên
          </Text>
          <Input
            prefix={
              <FontAwesomeIcon icon={faUser} style={{ color: "#a1bfa7" }} />
            }
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Nhập họ và tên"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Email
          </Text>
          <Input
            prefix={
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#a1bfa7" }} />
            }
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Nhập email"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Địa chỉ
          </Text>
          <Input
            prefix={
              <FontAwesomeIcon icon={faHome} style={{ color: "#a1bfa7" }} />
            }
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Nhập địa chỉ"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Tên đăng nhập
          </Text>
          <Input
            prefix={
              <FontAwesomeIcon icon={faUser} style={{ color: "#a1bfa7" }} />
            }
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="Chọn tên đăng nhập"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Mật khẩu
          </Text>
          <Input.Password
            prefix={
              <FontAwesomeIcon icon={faLock} style={{ color: "#a1bfa7" }} />
            }
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Tạo mật khẩu"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <Text
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#333333",
            }}
          >
            Xác nhận mật khẩu
          </Text>
          <Input.Password
            prefix={
              <FontAwesomeIcon icon={faLock} style={{ color: "#a1bfa7" }} />
            }
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="Xác nhận mật khẩu"
            size="large"
            style={{
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a1bfa7")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <Button
          type="primary"
          size="large"
          block
          loading={loading}
          onClick={handleRegister}
          style={{
            height: "50px",
            borderRadius: "8px",
            background: "#a1bfa7",
            border: "none",
            marginBottom: "24px",
            transition: "all 0.3s",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#4a7043";
            e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#a1bfa7";
            e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
        </Button>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Text style={{ color: "#666666" }}>
            Đã có tài khoản?{" "}
            <Text
              style={{
                color: "#a1bfa7",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={() => navigate("/")}
              onMouseEnter={(e) => (e.target.style.color = "#4a7043")}
              onMouseLeave={(e) => (e.target.style.color = "#a1bfa7")}
            >
              Đăng nhập
            </Text>
          </Text>
        </div>
      </div>
    </Row>
  );
};

// Add CSS animations
const styles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

export default RegisterPage;
