import { Button, Checkbox, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice";
import api from "../../config/axios";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

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
      gutter={0}
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(45deg, #a1bfa7,rgb(212, 195, 168))",
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
            Đăng nhập
          </Title>
          <Text style={{ color: "#666666", fontSize: "16px" }}>
            Vui lòng đăng nhập để tiếp tục
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
            Tên đăng nhập
          </Text>
          <Input
            prefix={
              <FontAwesomeIcon icon={faUser} style={{ color: "#a1bfa7" }} />
            }
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập hoặc email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Checkbox>Nhớ tài khoản</Checkbox>
          <Text
            style={{
              color: "#a1bfa7",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={() => navigate("/password-authen")}
            onMouseEnter={(e) => (e.target.style.color = "#4a7043")}
            onMouseLeave={(e) => (e.target.style.color = "#a1bfa7")}
          >
            Quên mật khẩu?
          </Text>
        </div>

        <Button
          type="primary"
          size="large"
          block
          onClick={handleLogin}
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
          Đăng nhập
        </Button>

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Text style={{ color: "#666666" }}>Hoặc tiếp tục với</Text>
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
              height: "50px",
              borderRadius: "8px",
              background: "white",
              border: "1px solid #a1bfa7",
              transition: "all 0.3s",
            }}
            onClick={() => navigate("/otp")}
            onMouseEnter={(e) => {
              e.target.style.background = "#f0ece3";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "scale(1)";
            }}
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
              height: "50px",
              borderRadius: "8px",
              background: "white",
              border: "1px solid #a1bfa7",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#f0ece3";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            Facebook
          </Button>
        </div>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Text style={{ color: "#666666" }}>
            Chưa có tài khoản?{" "}
            <Text
              style={{
                color: "#a1bfa7",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={() => navigate("/register")}
              onMouseEnter={(e) => (e.target.style.color = "#4a7043")}
              onMouseLeave={(e) => (e.target.style.color = "#a1bfa7")}
            >
              Đăng ký
            </Text>
          </Text>
        </div>
      </div>
    </Row>
  );
};

export default LoginPage;
