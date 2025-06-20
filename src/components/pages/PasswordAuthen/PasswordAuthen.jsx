import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import "./PasswordAuthen.css";

const { Title } = Typography;

const NgNhp = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (rePassword && e.target.value !== rePassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
    if (password && e.target.value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!password || !rePassword) {
      message.error("Please enter both passwords");
      return;
    }
    if (password !== rePassword) {
      message.error("Passwords do not match");
      return;
    }
    message.success("Passwords match!");
  };

  return (
    <Row justify="center" align="middle" className="auth-container">
      <Col>
        <Card bordered={false} className="auth-card">
          <img alt="Element" src="/img/Hello.png" className="auth-image" />
          <Title level={2}>Password authentication</Title>

          <Input placeholder="Username or Email..." className="auth-input" />

          <Input.Password
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="auth-input"
            status={error ? "error" : ""}
          />

          <Input.Password
            placeholder="Re-password"
            value={rePassword}
            onChange={handleRePasswordChange}
            className="auth-input"
            status={error ? "error" : ""}
          />
          {error && <div className="error-message">{error}</div>}

          <Button
            type="primary"
            block
            className="auth-button"
            onClick={handleSubmit}
          >
            Enter
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default NgNhp;
