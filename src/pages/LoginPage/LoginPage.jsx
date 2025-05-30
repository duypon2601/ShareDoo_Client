import { Button, Checkbox, Col, Input, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const NgNhp = () => {
  const navigate = useNavigate();

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Col
        xs={24}
        sm={20}
        md={16}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Container cho ảnh và card nền */}
        <Row justify="center">
          {/* Ảnh minh họa (bên trái card nền) */}
          <Col>
            <img
              style={{
                width: "472px",
                height: "520px",
                objectFit: "cover",
                position: "absolute",
                top: "calc(50% - 400px)",
                left: "calc(50% - 650px)",
              }}
              alt="Element"
              src="/img/Hello.png"
            />
          </Col>

          {/* Card nền (bên phải ảnh) */}
          <Col
            style={{
              width: "691px",
              height: "701px",
              position: "absolute",
              top: "calc(50% - 350.5px)",
              left: "calc(50% - 345.5px)",
              backgroundColor: "#f5f5f5",
              borderRadius: "16px",
              border: "1px solid #00000042",
            }}
          >
            {/* Tiêu đề */}
            <Title
              level={1}
              style={{
                position: "absolute",
                top: "32px", // Giảm top để căn đều khoảng cách
                left: "calc(50% - 50px)", // Căn giữa ngang (ước tính chiều rộng Title ~100px)
                fontFamily: "'Source Sans Pro', Helvetica",
                fontWeight: "600",
                color: "#000",
              }}
            >
              Login
            </Title>

            {/* Nhãn Username */}
            <Text
              style={{
                position: "absolute",
                top: "140px",
                left: "120px", // Căn đều với input
                fontWeight: "600",
                color: "#000",
                fontSize: "14px",
              }}
            >
              Username
            </Text>

            {/* Input Username */}
            <Input
              placeholder="Username or Email..."
              style={{
                position: "absolute",
                width: "450px", // Đồng nhất chiều rộng với nút Login
                height: "64px",
                top: "170px",
                left: "120px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                border: "1px solid #b6b6b6",
              }}
            />

            {/* Nhãn Password */}
            <Text
              style={{
                position: "absolute",
                top: "250px", // Cách Input Username 16px (120px + 64px + 16px = 200px)
                left: "120px",
                fontWeight: "600",
                color: "#000",
                fontSize: "14px",
              }}
            >
              Password
            </Text>

            {/* Input Password */}
            <Input.Password
              placeholder="******************"
              style={{
                position: "absolute",
                width: "450px", // Đồng nhất chiều rộng
                height: "64px",
                top: "278px", // Cách nhãn Password 8px, cách Input Username 24px
                left: "120px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                border: "1px solid #b6b6b6",
              }}
            />

            {/* Remember & Forgot */}
            <Checkbox
              style={{
                position: "absolute",
                top: "368px", // Cách Input Password 16px (228px + 64px + 16px = 308px)
                left: "120px",
              }}
            >
              Remember me
            </Checkbox>
            <Text
              style={{
                position: "absolute",
                top: "368px",
                left: "calc(120px + 450px - 100px)", // Căn phải, cách mép input 100px
                cursor: "pointer",
                fontWeight: "600",
                color: "#000",
                fontSize: "14px",
              }}
              onClick={() => navigate("/password-authen")}
            >
              Forgot Password?
            </Text>

            {/* Login Button */}
            <Button
              type="primary"
              style={{
                position: "absolute",
                width: "450px", // Đồng nhất với input
                height: "48px", // Tăng nhẹ chiều cao cho đồng đều
                top: "410px", // Cách Checkbox 16px (308px + 16px = 324px, điều chỉnh nhẹ)
                left: "120px",
                backgroundColor: "blue",
                borderRadius: "50px",
              }}
              onClick={() => navigate("/home")}
            >
              Login
            </Button>

            {/* Đăng ký */}
            <Text
              style={{
                position: "absolute",
                top: "40px",
                left: "556px",
                fontWeight: "700",
                color: "#000",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/register")}
            >
              Register ←
            </Text>

            {/* Google Sign in */}
            <Button
              type="primary"
              icon={
                <img
                  src="/img/Google.png"
                  alt="Google"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                  }}
                />
              }
              style={{
                position: "absolute",
                width: "210px",
                height: "48px",
                top: "484px",
                left: "120px",
                backgroundColor: "#4285f4",
              }}
              onClick={() => navigate("/otp")}
            >
              Sign in with Google
            </Button>

            {/* Facebook Sign in */}
            <Button
              type="primary"
              icon={
                <img
                  src="/img/Facebook.png"
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                  }}
                />
              }
              style={{
                position: "absolute",
                width: "210px", // Đồng nhất với nút Google
                height: "48px", // Đồng nhất với nút Login
                top: "484px", // Cùng top với Google
                left: "calc(120px + 210px + 32px)", // Cách nút Google 32px (120px + 210px + 32px = 362px)
                backgroundColor: "#3b5998",
              }}
            >
              Sign in with Facebook
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NgNhp;
