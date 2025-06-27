import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Avatar,
  Space,
  Badge,
  Tooltip,
  Dropdown,
  Menu,
  Typography,
} from "antd";
import {
  BellOutlined,
  MessageOutlined,
  CloseOutlined,
  UserOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const DashBoardRental = () => {
  const [range, setRange] = useState("6");

  const handleRangeChange = (value) => {
    setRange(value);
  };

  const earningsData = {
    "1": [{ month: "Mar", height: 80 }],
    "4": [
      { month: "Dec", height: 110 },
      { month: "Jan", height: 70 },
      { month: "Feb", height: 120 },
      { month: "Mar", height: 80 },
    ],
    "6": [
      { month: "Oct", height: 60 },
      { month: "Nov", height: 90 },
      { month: "Dec", height: 110 },
      { month: "Jan", height: 70 },
      { month: "Feb", height: 120 },
      { month: "Mar", height: 80 },
    ],
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh", overflowX: "hidden", backgroundColor: "#e8dbc4" }}>
      {/* Header */}
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "72px",
          justifyContent: "space-between",
        }}
      >
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

        <Space size="large">
          <Link to="/home" style={{ color: "#374151", fontWeight: 500 }}>Home</Link>
          <Link to="/rental-requests" style={{ color: "#374151", fontWeight: 500 }}>Request</Link>
          <Link to="/ListItem" style={{ color: "#374151", fontWeight: 500 }}>Listings</Link>
          <Link to="/ReviewPublish" style={{ color: "#374151", fontWeight: 500 }}>Review</Link>
          <Link to="/dashboard" style={{ color: "#374151", fontWeight: 500 }}>Dashboard</Link>
        </Space>

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
          <Dropdown overlay={menu} placement="bottomRight">
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#a1bfa7", cursor: "pointer" }} />
          </Dropdown>
          <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Space>
      </Header>

      {/* Content */}
      <Content style={{ padding: "24px" }}>
        <main style={{ padding: 24 }}>
          <h1 style={{ fontSize: 32, marginBottom: 8 }}>Dashboard</h1>
          <p style={{ color: "#666", marginBottom: 24 }}>Your performance summary</p>

          {/* Earnings Summary Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
            {[
              {
                title: "Total Earnings",
                value: "$24,509.00",
                subtitle: "Last updated: Today 13:45",
                color: "#10b981",
                badge: "+12.5%",
              },
              {
                title: "Monthly Earnings",
                value: "$4,203.00",
                subtitle: "March 2025",
                color: "#10b981",
                badge: "+8.2%",
              },
              {
                title: "Pending Payments",
                value: "$1,829.00",
                subtitle: "To be processed",
                color: "#f59e0b",
                badge: "3 pending",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#a1bfa7",
                  borderRadius: 16,
                  padding: 20,
                  color: "white",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: "#e0e0e0", fontSize: 14 }}>{item.title}</span>
                  <div style={{
                    backgroundColor: item.color + "1a",
                    borderRadius: 8,
                    padding: "2px 8px",
                  }}>
                    <span style={{ color: item.color, fontSize: 12 }}>{item.badge}</span>
                  </div>
                </div>
                <h2 style={{ fontSize: 28, margin: "8px 0", color: "#fff" }}>{item.value}</h2>
                <span style={{ color: "#e0e0e0", fontSize: 14 }}>{item.subtitle}</span>
              </div>
            ))}
          </div>

          {/* Earnings Overview Chart */}
          <div style={{ backgroundColor: "#a1bfa7", borderRadius: 16, padding: 20, marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ color: "#fff", margin: 0 }}>Earnings Overview</h3>
              <select
                value={range}
                onChange={(e) => handleRangeChange(e.target.value)}
                style={{
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                <option value="1">Last 1 month</option>
                <option value="4">Last 4 months</option>
                <option value="6">Last 6 months</option>
              </select>
            </div>

            <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                height: "100%",
                gap: 8,
                justifyContent: "space-around"
              }}>
                {earningsData[range].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      maxWidth: `${100 / earningsData[range].length - 2}%`,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#ffffff3d",
                      borderRadius: "8px",
                      position: "absolute",
                      bottom: 0,
                    }} />
                    <span style={{
                      position: "absolute",
                      top: 8,
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: 14,
                      zIndex: 2,
                    }}>{item.month}</span>
                    <div style={{
                      backgroundColor: "#4c905b",
                      width: "100%",
                      height: `${Math.min((item.height / 130) * 80, 80)}%`,
                      borderRadius: "8px 8px 0 0",
                      minHeight: "20px",
                      position: "relative",
                      zIndex: 1,
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Withdraw Earnings */}
          <div style={{ backgroundColor: "#a1bfa7", borderRadius: 16, padding: 20, marginBottom: 24 }}>
            <h3 style={{ color: "#fff", marginBottom: 16 }}>Withdraw Earnings</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {["Bank Transfer", "MoMo", "ZaloPay"].map((method, idx) => (
                <button
                  key={idx}
                  style={{
                    backgroundColor: "#4c905b",
                    color: "#fff",
                    borderRadius: 16,
                    border: "none",
                    padding: "12px 20px",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div style={{ backgroundColor: "#a1bfa7", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ color: "#fff", margin: 0 }}>Transaction History</h3>
              <button style={{ background: "none", border: "none", color: "#1890ff", cursor: "pointer" }}>
                View All
              </button>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 8,
              paddingBottom: 8,
              borderBottom: "1px solid #ffffff3d",
            }}>
              {["Date", "Item Rented", "Amount", "Status"].map((label, idx) => (
                <span key={idx} style={{ color: "#e0e0e0", fontSize: 14 }}>{label}</span>
              ))}
            </div>
            {[
              { date: "Mar 15, 2025", item: "Demo Product", amount: "$350.00", status: "Completed", color: "#10b981" },
              { date: "Mar 14, 2025", item: "Demo Product", amount: "$280.00", status: "Pending", color: "#f59e0b" },
              { date: "Mar 12, 2025", item: "Demo Product", amount: "$420.00", status: "Completed", color: "#10b981" },
              { date: "Mar 10, 2025", item: "Demo Product", amount: "$295.00", status: "Failed", color: "#ef4444" },
            ].map((txn, idx) => (
              <div key={idx} style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                padding: "8px 0",
                borderBottom: idx < 3 ? "1px solid #ffffff1a" : "none",
              }}>
                <span style={{ color: "#fff" }}>{txn.date}</span>
                <span style={{ color: "#fff" }}>{txn.item}</span>
                <span style={{ color: "#fff" }}>{txn.amount}</span>
                <div style={{
                  backgroundColor: txn.color + "1a",
                  padding: "4px 8px",
                  borderRadius: 8,
                  display: "inline-block",
                  width: "fit-content",
                }}>
                  <span style={{ color: txn.color, fontSize: 12 }}>{txn.status}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          backgroundColor: "#1f2937",
          color: "#9ca3af",
          padding: "40px 0",
          overflowX: "hidden",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Row gutter={[32, 24]} justify="space-between">
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>About</Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>How It Works</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>Support</Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>Help Center</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Safety Center</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Contact Us</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>Legal</Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>Terms of Service</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Privacy Policy</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Cookie Policy</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>Follow Us</Title>
              <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
                <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                <InstagramOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
              </div>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "32px", borderTop: "1px solid #374151", paddingTop: "16px", textAlign: "center" }}>
            <Text style={{ color: "#9ca3af", fontSize: "14px" }}>© 2025 ShareDoo. All rights reserved.</Text>
          </Row>
        </div>
      </Footer>
    </Layout>
  );
};

export default DashBoardRental;
