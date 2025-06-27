import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MessageOutlined,
  StarFilled,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const RentalRequestsSection = () => {
  return (
    <Layout style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* ✅ HEADER */}
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
          <Link to="/dashboard" style={{ color: "#374151", fontWeight: 500 }}>
            Dashboard
          </Link>
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
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: "#a1bfa7", cursor: "pointer" }}
            />
          </Dropdown>
          <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Space>
      </Header>

      {/* ✅ CONTENT */}
      <Content style={{ padding: "24px" }}>
        <Row justify="center" style={{ marginTop: 20 }}>
          <Col span={20}>
            <Title level={2}>Rental Requests</Title>
            <Text>Manage your incoming rental requests</Text>
          </Col>
        </Row>

        <Row justify="center" gutter={[16, 16]} style={{ marginTop: 20 }}>
          {[
            {
              name: "Sarah Mitchell",
              rating: 4.8,
              product: "Professional Camera",
              price: "$75/day",
              date: "Mar 15 - Mar 18, 2025",
              time: "Pickup at 10:00 AM",
              status: "New",
              image: "img-1@2x.png",
              avatar: "img@2x.png",
            },
            {
              name: "James Wilson",
              rating: 4.5,
              product: "Professional Drone",
              price: "$120/day",
              date: "Mar 20 - Mar 22, 2025",
              time: "Pickup at 2:00 PM",
              status: "New",
              image: "img-3@2x.png",
              avatar: "img-2@2x.png",
            },
            {
              name: "Emma Thompson",
              rating: 4.9,
              product: "Professional Lighting",
              price: "$95/day",
              date: "Mar 25 - Mar 27, 2025",
              time: "Pickup at 11:00 AM",
              status: "Accepted",
              image: "img-5@2x.png",
              avatar: "img-4@2x.png",
            },
          ].map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                style={{ borderRadius: "10px" }}
                cover={
                  <div style={{ padding: "16px" }}>
                    <Row align="middle">
                      <Avatar
                        size={40}
                        src={`https://c.animaapp.com/2TlGi7vL/${item.avatar}`}
                      />
                      <div style={{ marginLeft: 16 }}>
                        <Title level={5}>{item.name}</Title>
                        <Row align="middle">
                          <StarFilled style={{ color: "#fadb14" }} />
                          <Text style={{ marginLeft: 8 }}>{item.rating}</Text>
                        </Row>
                      </div>
                      <Button
                        type="primary"
                        shape="round"
                        style={{ marginLeft: "auto" }}
                      >
                        {item.status}
                      </Button>
                    </Row>
                  </div>
                }
              >
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      size={64}
                      src={`https://c.animaapp.com/2TlGi7vL/${item.image}`}
                    />
                  }
                  title="Demo Product"
                  description={
                    <>
                      <Text>{item.product}</Text>
                      <br />
                      <Text>{item.price}</Text>
                    </>
                  }
                />
                <div style={{ marginTop: 16 }}>
                  <Row align="middle">
                    <CalendarOutlined />
                    <Text style={{ marginLeft: 8 }}>{item.date}</Text>
                  </Row>
                  <Row align="middle" style={{ marginTop: 8 }}>
                    <ClockCircleOutlined />
                    <Text style={{ marginLeft: 8 }}>{item.time}</Text>
                  </Row>
                </div>
                <Row justify="space-between" style={{ marginTop: 16 }}>
                  {item.status === "Accepted" ? (
                    <>
                      <Button type="primary" style={{ width: "48%" }}>
                        Message Renter
                      </Button>
                      <Button style={{ width: "48%" }}>
                        View Meeting Location
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button type="primary" style={{ width: "48%" }}>
                        Accept
                      </Button>
                      <Button danger style={{ width: "48%" }}>
                        Reject
                      </Button>
                    </>
                  )}
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* ✅ FOOTER */}
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
              <Title level={4} style={{ color: "#fff" }}>
                About
              </Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>How It Works</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>
                Support
              </Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>Help Center</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Safety Center</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Contact Us</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>
                Legal
              </Title>
              <Text style={{ display: "block", color: "#9ca3af" }}>Terms of Service</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Privacy Policy</Text>
              <Text style={{ display: "block", color: "#9ca3af" }}>Cookie Policy</Text>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Title level={4} style={{ color: "#fff" }}>
                Follow Us
              </Title>
              <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
                <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                <InstagramOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
              </div>
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              marginTop: "32px",
              borderTop: "1px solid #374151",
              paddingTop: "16px",
              textAlign: "center",
            }}
          >
            <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
              © 2025 ShareDoo. All rights reserved.
            </Text>
          </Row>
        </div>
      </Footer>
    </Layout>
  );
};

export default RentalRequestsSection;
