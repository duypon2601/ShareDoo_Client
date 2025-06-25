import {
  AppstoreOutlined,
  BellOutlined,
  MessageOutlined,
  PlusOutlined,
  UserOutlined,
  CloseOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Image,
  Layout,
  Menu,
  Row,
  Space,
  Typography,
  Tooltip, // ✅ thêm dòng này
} from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const ListItem = () => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 🔷 HEADER */}
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

      {/* 🔷 Notification + Messages + Avatar */}
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

      {/* 🔷 CONTENT */}
      <Content style={{ padding: "24px", backgroundColor: "#fdf6ed" }}>
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col span={18}>
            <Title level={2}>Lender Dashboard</Title>
          </Col>
          <Col span={6} style={{ textAlign: "right" }}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              List a New Item
            </Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col span={6}>
            <Card>
              <Row>
                <Col span={16}>
                  <Text type="secondary">Active Listings</Text>
                  <Title level={3}>24</Title>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                  <Button shape="circle" icon={<AppstoreOutlined />} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col span={24}>
            <Button type="link" style={{ borderBottom: "2px solid #a1bfa7" }}>
              Active Listings
            </Button>
          </Col>
        </Row>

        {/* 🔷 LISTING CARDS */}
        <Row gutter={[16, 16]}>
          {[
            { img: "/img/ShareDoo.png", price: "$75/day", date: "Jan 15, 2025" },
            { img: "/img/ShareDoo.png", price: "$120/day", date: "Jan 20, 2025" },
            { img: "/img/ShareDoo.png", price: "$45/day", date: "Jan 25, 2025" },
          ].map((item, index) => (
            <Col span={8} key={index}>
              <Card
                cover={
                  <div
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 192,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        backgroundColor: "#52c41a",
                        borderRadius: "12px",
                        padding: "0 8px",
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Active</Text>
                    </div>
                  </div>
                }
              >
                <Title level={4}>Demo Product</Title>
                <Text type="secondary">Listed on {item.date}</Text>
                <div style={{ marginTop: 16 }}>
                  <Text strong style={{ color: "#a1bfa7" }}>
                    {item.price}
                  </Text>
                  <Button
                    shape="circle"
                    icon={<Image preview={false} />}
                    style={{ float: "right" }}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* 🔷 FOOTER */}
    
      <Footer
           style={{
             backgroundColor: "#1f2937",
             color: "#9ca3af",
             padding: "40px 0",
           }}
         >
           <Row justify="center" gutter={[32, 16]}>
             <Col xs={24} sm={12} md={6}>
               <Title level={4} style={{ color: "#fff" }}>
                 About
               </Title>
               <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 How It Works
               </Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
             </Col>
             <Col xs={24} sm={12} md={6}>
               <Title level={4} style={{ color: "#fff" }}>
                 Support
               </Title>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Help Center
               </Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Safety Center
               </Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Contact Us
               </Text>
             </Col>
             <Col xs={24} sm={12} md={6}>
               <Title level={4} style={{ color: "#fff" }}>
                 Legal
               </Title>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Terms of Service
               </Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Privacy Policy
               </Text>
               <Text style={{ display: "block", color: "#9ca3af" }}>
                 Cookie Policy
               </Text>
             </Col>
             <Col xs={24} sm={12} md={6}>
               <Title level={4} style={{ color: "#fff" }}>
                 Follow Us
               </Title>
               <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
                 <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                 <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                 <InstagramOutlined
                   style={{ fontSize: "20px", color: "#9ca3af" }}
                 />
               </div>
             </Col>
           </Row>
           <Row
             justify="center"
             style={{
               marginTop: "32px",
               borderTop: "1px solid #374151",
               paddingTop: "16px",
             }}
           >
             <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
               © 2025 ShareDoo. All rights reserved.
             </Text>
           </Row>
         </Footer>
    </Layout>
  );
};

export default ListItem;
