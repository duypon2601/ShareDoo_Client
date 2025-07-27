import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  BellOutlined,
  MessageOutlined,
  PlusOutlined,
  UserOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Menu,
  Row,
  Col,
  Space,
  Typography,
  Tooltip,
} from "antd";

const { Text } = Typography;

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const menuItems = [
    { key: "profile", label: "Profile" },
    { key: "logout", label: "Logout" }
  ];

  const handleSearchIconClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchValue("");
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchValue.trim() !== "") {
        navigate(`/searchitems?keyword=${encodeURIComponent(searchValue.trim())}`);
      }
      setShowSearch(false);
      setSearchValue("");
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        height: "72px",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* 🔷 Logo + Title */}
      <Row align="middle" gutter={12}>
        <Col>
          <Avatar
            src="/img/ShareDoo.png"
            size={48}
            shape="circle"
            style={{ backgroundColor: "#fff" }}
          />
        </Col>
        <Col>
          <Text strong style={{ fontSize: "20px", color: "#1f1f1f" }}>
            ShareDoo
          </Text>
        </Col>
      </Row>

      {/* 🔷 Navigation Menu */}
      <Space size="large">
        <a href="#" style={{ color: "#374151", fontWeight: 500 }}>
          Home
        </a>
        <a href="#" style={{ color: "#374151", fontWeight: 500 }}>
          Request
        </a>
        <a href="#" style={{ color: "#374151", fontWeight: 500 }}>
          Listings
        </a>
        <a href="#" style={{ color: "#374151", fontWeight: 500 }}>
          Review
        </a>
        <a href="#" style={{ color: "#374151", fontWeight: 500 }}>
          Dashboard
        </a>
      </Space>

      {/* 🔷 Notification + Messages + Avatar + Search */}
      <Space size="large" style={{ position: "relative" }}>
        <Tooltip title="Search">
          <SearchOutlined
            style={{ fontSize: "20px", color: "#374151", cursor: "pointer" }}
            onClick={handleSearchIconClick}
          />
        </Tooltip>
        {/* Popover Search Input */}
        {showSearch && (
          <div
            style={{
              position: "absolute",
              top: 36,
              right: 0,
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              padding: "4px 12px 4px 16px",
              display: "flex",
              alignItems: "center",
              zIndex: 2000,
              minWidth: 260,
              border: "1px solid #e0e0e0",
            }}
          >
            <input
              autoFocus
              type="text"
              value={searchValue}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearchInputKeyDown}
              placeholder="Tìm kiếm..."
              style={{
                border: "none",
                outline: "none",
                fontSize: 16,
                background: "transparent",
                width: 180,
                padding: "6px 0",
              }}
            />
            <Button
              icon={<CloseOutlined />}
              onClick={handleSearchClose}
              type="text"
              style={{ marginLeft: 4, borderRadius: "50%", color: "#888" }}
            />
          </div>
        )}
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
        <Dropdown menu={{ items: menuItems }} placement="bottomRight">
          <Avatar
            icon={<UserOutlined />}
            style={{ backgroundColor: "#a1bfa7", cursor: "pointer" }}
          />
        </Dropdown>
        <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Space>
    </header>
  );
};

export default Header;
