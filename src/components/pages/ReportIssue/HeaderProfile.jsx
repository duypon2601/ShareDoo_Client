import React from "react";
import {
  Avatar,
  Badge,
  Col,
  Dropdown,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import {
  BellOutlined,
  CloseOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

const menu = (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: 4,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    }}
  >
    <Link to="/profile" style={{ display: "block", padding: 8, color: "black" }}>
      Profile
    </Link>
   <Link to="/" style={{ display: "block", padding: 8, color: "black" }}>
  Logout
</Link>
  </div>
);

const HeaderProfile = () => {
  return (
    <div
  style={{
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e0e0e0",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw", // 👉 full màn hình
    padding: "0 40px", // 👉 tùy chỉnh padding trái phải
    boxSizing: "border-box", // 👉 đảm bảo padding không làm tràn
    overflowX: "hidden",
  }}
>

      {/* Logo & Brand */}
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Row align="middle" gutter={12}>
          <Col>
            <Avatar src="/img/ShareDoo.png" size={48} shape="circle" />
          </Col>
          <Col>
            <Text strong style={{ fontSize: "20px", color: "#1f1f1f" }}>
              ShareDoo
            </Text>
          </Col>
        </Row>
      </Link>

      {/* Navigation Menu */}
      <Space size="large">
        <Link to="/home" style={{ color: "#374151", fontWeight: 500 }}>
          Home
        </Link>
        <Link to="/rental-requests" style={{ color: "#374151", fontWeight: 500 }}>
          Request
        </Link>
        <Link to="/ListItem" style={{ color: "#374151", fontWeight: 500 }}>
          Listings
        </Link>
        <Link to="/ReviewPublish" style={{ color: "#374151", fontWeight: 500 }}>
          Review
        </Link>
        <Link to="/dashboard-rental" style={{ color: "#374151", fontWeight: 500 }}>
          Dashboard
        </Link>
      </Space>

      {/* Icons and Profile */}
      <Space size="large">
        <Tooltip title="Notifications">
          <Badge dot>
            <BellOutlined style={{ fontSize: "18px", color: "#374151" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Messages">
          <Badge count={3} size="small" offset={[-2, 2]}>
            <MessageOutlined style={{ fontSize: "18px", color: "#374151" }} />
          </Badge>
        </Tooltip>
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#a1bfa7", cursor: "pointer" }}
          />
        </Dropdown>
        <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Space>
    </div>
  );
};

export default HeaderProfile;
