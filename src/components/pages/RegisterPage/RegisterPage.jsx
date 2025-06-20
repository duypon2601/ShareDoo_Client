import { Button, Col, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import "./RegisterPage.css";

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
      // Validate form
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
    <Row justify="center" align="middle" className="register-container">
      <Col xs={24} sm={22} md={20} lg={18} xl={16} className="register-content">
        <div className="register-image-container">
          <img
            src="/img/Hello.png"
            alt="Register illustration"
            className="register-image"
          />
        </div>

        <div className="register-form-container">
          <div className="register-header">
            <Title level={2} className="register-title">
              Create Account
            </Title>
            <Text className="register-subtitle">Join us and start sharing</Text>
          </div>

          <div className="form-group">
            <Text className="form-label">Full Name</Text>
            <Input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Text className="form-label">Email</Text>
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Text className="form-label">Address</Text>
            <Input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Enter your address"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Text className="form-label">Username</Text>
            <Input
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="Choose a username"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Text className="form-label">Password</Text>
            <Input.Password
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Create a password"
              size="large"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <Text className="form-label">Confirm Password</Text>
            <Input.Password
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm your password"
              size="large"
              className="form-input"
            />
          </div>

          <Button
            type="primary"
            size="large"
            block
            loading={loading}
            onClick={handleRegister}
            className="register-button"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="login-link">
            <Text>
              Already have an account?{" "}
              <Text className="login-link-text" onClick={() => navigate("/")}>
                Sign in
              </Text>
            </Text>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
