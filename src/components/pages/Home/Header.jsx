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
  SwapOutlined,
  DownOutlined,
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
  message,
} from "antd";
import { useSelector } from "react-redux";

const { Text } = Typography;

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isAdminView, setIsAdminView] = useState(
    localStorage.getItem("headerMode") === "admin"
  );
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
    message.success("Đăng xuất thành công!");
    navigate("/");
  };

  const toggleHeaderView = () => {
    const newMode = !isAdminView;
    setIsAdminView(newMode);
    localStorage.setItem("headerMode", newMode ? "admin" : "user");

    message.info(`Chuyển sang chế độ ${newMode ? "Quản lý" : "Người dùng"}`);

    //  Navigate theo chế độ mới
    if (newMode) {
      navigate("/rental-requests"); // Admin
    } else {
      navigate("/home"); // User
    }
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      navigate(
        `/searchitems?keyword=${encodeURIComponent(searchValue.trim())}`
      );
      setShowSearch(false);
      setSearchValue("");
    }
  };

  const menuItems = [
    { key: "profile", label: "Profile" },
    { key: "logout", label: "Logout" },
  ];

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 500,
    color: "#374151",
    transition: "all 0.3s ease",
  };

  return (
    <header
      style={{
        background: "linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%)",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        height: "72px",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1580px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        animation: "fadeIn 0.5s ease-in",
      }}
    >
      {/* 🔷 Logo + Title */}
      <Row align="middle" gutter={12} onClick={() => navigate("/home")}>
        <Col>
          <Avatar
            src="/img/ShareDoo.png"
            size={48}
            shape="circle"
            style={{ backgroundColor: "#fff", cursor: "pointer" }}
          />
        </Col>
        <Col>
          <Text strong style={{ fontSize: "20px", color: "#1f1f1a" }}>
            ShareDoo
          </Text>
        </Col>
      </Row>

      {/* 🔷 Navigation Menu */}
      <Space size="large" align="center">
        {!isAdminView ? (
          <>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/home")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Home
            </div>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/searchitems")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Search Help
            </div>
            <Dropdown
              menu={{
                items: [
                  { key: "listItem", label: "List-Item" },
                  { key: "List New Item", label: "List-New-Item" },
                  { key: "rental-requests", label: "Rental-Requests" },
                ],
                onClick: ({ key }) => {
                  if (key === "listItem") navigate("/listItem");
                  else if (key === "List New Item") navigate("/ListNewItem");
                  else if (key === "rental-requests")
                    navigate("/rental-requests");
                },
              }}
              trigger={["hover"]}
              placement="bottom"
            >
              <div
                style={menuItemStyle}
                onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
                onMouseLeave={(e) => (e.target.style.color = "#374151")}
              >
                Product
                <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
              </div>
            </Dropdown>
          </>
        ) : (
          <>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/ListNewItem")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Listings
            </div>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/OrderPage")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Orders
            </div>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/dashboard-rental")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Rental
            </div>
            <div
              style={menuItemStyle}
              onClick={() => navigate("/Dashboards")}
              onMouseEnter={(e) => (e.target.style.color = "#389e0d")}
              onMouseLeave={(e) => (e.target.style.color = "#374151")}
            >
              Dashboards
            </div>
            
          </>
        )}
      </Space>

      {/* 🔷 Actions */}
      <Space size="large" style={{ position: "relative" }}>
        <Tooltip
          title={
            isAdminView
              ? "Chuyển sang chế độ Người dùng"
              : "Chuyển sang chế độ Quản lý"
          }
        >
          <Button
            icon={<SwapOutlined />}
            onClick={toggleHeaderView}
            style={{
              background: "linear-gradient(45deg, #a1bfa7,rgb(212, 195, 168))",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              height: 36,
              fontWeight: 500,
              fontSize: 14,
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 6px 16px rgba(82, 196, 26, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            {isAdminView ? "Admin" : "User"}
          </Button>
        </Tooltip>

        <Tooltip title="Search">
          <SearchOutlined
            style={{ fontSize: 20, cursor: "pointer", color: "#374151" }}
            onClick={() => setShowSearch(true)}
          />
        </Tooltip>

        {showSearch && (
          <div
            style={{
              position: "absolute",
              top: 36,
              right: 80,
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
              onChange={(e) => setSearchValue(e.target.value)}
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
              onClick={() => {
                setShowSearch(false);
                setSearchValue("");
              }}
              type="text"
              style={{ marginLeft: 4, borderRadius: "50%", color: "#888" }}
            />
          </div>
        )}

        <Tooltip title="Notifications">
          <Badge dot>
            <BellOutlined style={{ fontSize: 18, color: "#374151" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Messages">
          <Badge count={3} size="small" offset={[-2, 2]}>
            <MessageOutlined style={{ fontSize: 18, color: "#374151" }} />
          </Badge>
        </Tooltip>

        <Dropdown
          menu={{
            items: menuItems,
            onClick: ({ key }) => {
              if (key === "profile") navigate("/profile");
              if (key === "logout") handleLogout();
            },
          }}
          placement="bottomRight"
        >
          <Avatar
            src={user.imageUrl || "/img/default-avatar.png"}
            icon={!user.imageUrl && <UserOutlined />}
            style={{
              backgroundColor: user.imageUrl ? "transparent" : "#a1bfa7",
              cursor: "pointer",
              width: 48,
              height: 48,
              transition: "all 0.3s ease",
            }}
          />
        </Dropdown>
      </Space>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
