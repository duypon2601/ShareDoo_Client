import { Button, Checkbox, Col, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import api from "../../config/axios";
import { useDispatch } from "react-redux";

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/login", {
        username,
        password,
      });
      dispatch(login(res.data));
      message.success("Đăng nhập thành công!");
      navigate("/home");
      console.log("Login successful", res.data);
      alert("Đăng nhập thành công!"); // Optional: Alert for success
    } catch (error) {
      console.error("Login failed", error);
      message.error(
        "Đăng nhập thất bại! Vui lòng kiểm tra tài khoản hoặc mật khẩu."
      );
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "20px",
      }}
    >
      <Col
        xs={24}
        sm={22}
        md={20}
        lg={18}
        xl={16}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div
          style={{
            flex: 1,
            maxWidth: "500px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src="/img/Hello.png"
            alt="Login illustration"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            maxWidth: "500px",
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title
              level={2}
              style={{
                margin: 0,
                color: "#1a1a1a",
                fontWeight: "600",
              }}
            >
              Welcome Back
            </Title>
            <Text style={{ color: "#666", fontSize: "16px" }}>
              Please sign in to continue
            </Text>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <Text
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#1a1a1a",
              }}
            >
              Username
            </Text>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username or email"
              size="large"
              style={{
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <Text
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#1a1a1a",
              }}
            >
              Password
            </Text>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              size="large"
              style={{
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Checkbox>Remember me</Checkbox>
            <Text
              style={{
                color: "#1890ff",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={() => navigate("/password-authen")}
            >
              Forgot Password?
            </Text>
          </div>

          <Button
            type="primary"
            size="large"
            block
            onClick={handleLogin}
            style={{
              height: "48px",
              borderRadius: "8px",
              background: "#1890ff",
              marginBottom: "24px",
              transition: "all 0.3s",
            }}
          >
            Sign In
          </Button>

          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Text style={{ color: "#666" }}>Or continue with</Text>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Button
              icon={
                <img
                  src="/img/Google.png"
                  alt="Google"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              size="large"
              style={{
                flex: 1,
                height: "48px",
                borderRadius: "8px",
                background: "white",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s",
              }}
              onClick={() => navigate("/otp")}
            >
              Google
            </Button>
            <Button
              icon={
                <img
                  src="/img/Facebook.png"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
              }
              size="large"
              style={{
                flex: 1,
                height: "48px",
                borderRadius: "8px",
                background: "white",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s",
              }}
            >
              Facebook
            </Button>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Text style={{ color: "#666" }}>
              Don't have an account?{" "}
              <Text
                style={{
                  color: "#1890ff",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
                onClick={() => navigate("/register")}
              >
                Sign up
              </Text>
            </Text>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
