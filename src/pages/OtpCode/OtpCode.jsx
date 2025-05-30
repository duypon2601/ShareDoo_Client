import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Otp = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.querySelector(
          `input[name="otp-${index + 1}"]`
        );
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}
    >
      <Col xs={22} sm={20} md={16} lg={12} xl={8}>
        <div
          style={{
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Button
            type="link"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              left: "20px",
              top: "20px",
              color: "#666",
            }}
          >
            Back
          </Button>

          <img
            src="/img/otp-illustration.png"
            alt="OTP Verification"
            style={{
              width: "200px",
              height: "auto",
              marginBottom: "30px",
            }}
          />

          <Title level={2} style={{ marginBottom: "10px", color: "#1a1a1a" }}>
            Enter OTP Code
          </Title>

          <Text
            style={{
              display: "block",
              marginBottom: "40px",
              color: "#666",
              fontSize: "16px",
            }}
          >
            We have sent a 6-digit OTP to your phone/email.
            <br />
            Please enter it below to continue.
          </Text>

          <Row gutter={12} justify="center" style={{ marginBottom: "40px" }}>
            {otpValues.map((value, index) => (
              <Col key={index}>
                <Input
                  name={`otp-${index}`}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: "24px",
                    textAlign: "center",
                    borderRadius: "12px",
                    border: "2px solid #e6e6e6",
                    backgroundColor: "#f5f7fa",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#40a9ff";
                    e.target.style.backgroundColor = "white";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e6e6e6";
                    e.target.style.backgroundColor = "#f5f7fa";
                  }}
                />
              </Col>
            ))}
          </Row>

          <Button
            type="primary"
            size="large"
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "12px",
              backgroundColor: "#1890ff",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          >
            Verify OTP
          </Button>

          <Text style={{ color: "#666" }}>
            Didn't receive the code?{" "}
            <Button
              type="link"
              style={{
                padding: 0,
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Resend
            </Button>
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default Otp;
