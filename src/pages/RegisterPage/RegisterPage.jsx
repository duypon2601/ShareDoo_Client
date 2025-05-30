import { ArrowLeftOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const { Title, Text } = Typography;

const NgK = () => {
  const navigate = useNavigate();
  return (
    <Row justify="center" align="middle" className="register-container">
      <Col className="register-content" style={{ width: "63%" }}>
        <Row justify="center" align="middle" className="register-wrapper">
          <img
            className="register-image"
            alt="Element"
            src="/img/HelluGirl.png"
          />
          <div className="register-form-container" />
          <div className="input-field input-field-username" />
          <div className="input-field input-field-password" />
          <div className="input-field input-field-repassword" />
          <div className="input-label-line label-line-username" />
          <div className="input-label-line label-line-password" />
          <div className="input-label-line label-line-repassword" />
          <Text className="input-label label-username">Username</Text>
          <Text className="input-label label-password">Password</Text>
          <Text className="input-label label-repassword">Re-Password</Text>
          <Text className="input-placeholder placeholder-username">
            Username or Email...
          </Text>
          <Text className="input-placeholder placeholder-password">
            ******************
          </Text>
          <Text className="input-placeholder placeholder-repassword">
            ******************
          </Text>
          <div className="input-field input-field-phone" />
          <div className="input-label-line label-line-phone" />
          <Text className="input-label label-phone">Phone Number</Text>
          <Text className="input-placeholder placeholder-phone">
            ******************
          </Text>
          <Text className="login-text" onClick={() => navigate("/")}>
            Login
          </Text>
          <div className="arrow-icon-container">
            <img
              style={{
                width: 13,
                height: 9,
                top: 4,
                left: 2,
                position: "absolute",
                transform: "rotate(180deg)",
              }}
              alt="Line"
              src="https://via.placeholder.com/13x9"
            />
          </div>
          <img
            className="arrow-line"
            alt="Line"
            src="https://via.placeholder.com/36x1"
          />
          <Button
            type="primary"
            icon={<GoogleOutlined />}
            className="social-button google-button"
          >
            Sign in with Google
          </Button>
          <Button
            type="primary"
            icon={<GoogleOutlined />}
            className="social-button facebook-button"
          >
            Sign in with Facebook
          </Button>
          <Checkbox className="terms-checkbox" />
          <Text className="terms-text">Terms Of Use</Text>
          <Button type="primary" className="register-button">
            Register
          </Button>
          <Title level={1} className="register-title">
            Register
          </Title>
          <ArrowLeftOutlined
            className="back-arrow"
            onClick={() => navigate("/")}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default NgK;
