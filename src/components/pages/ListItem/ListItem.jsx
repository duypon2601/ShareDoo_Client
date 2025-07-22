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
import Footer from "../Home/Footer";
import Header from "../Home/Header";

const { Content, Footer: LayoutFooter } = Layout;
const { Title, Text } = Typography;

const ListItem = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "99vw",
        overflowX: "hidden",
        background: "#fdf6ed",
      }}
    >
      {/* 🔷 HEADER */}
      <Header />

      {/* 🔷 CONTENT */}
      <Content
        style={{
          padding: "0 112px",
          backgroundColor: "#fdf6ed",
          width: "100%",
          minHeight: "calc(100vh - 72px - 160px)",
          boxSizing: "border-box",
        }}
      >
        <Row gutter={[0, 0]} style={{ margin: 0, width: "100%" }}>
          <Col span={18} style={{ padding: "24px 0 0 0" }}>
            <Title level={2}>Lender Dashboard</Title>
          </Col>
          <Col span={6} style={{ textAlign: "right", padding: "24px 0 0 0" }}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              List a New Item
            </Button>
          </Col>
        </Row>

        <Row gutter={[0, 0]} style={{ margin: 0, width: "100%" }}>
          <Col span={6} style={{ padding: 0 }}>
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

        <Row gutter={[0, 0]} style={{ margin: 0, width: "100%" }}>
          <Col span={24} style={{ padding: 0 }}>
            <Button type="link" style={{ borderBottom: "2px solid #a1bfa7" }}>
              Active Listings
            </Button>
          </Col>
        </Row>

        {/* 🔷 LISTING CARDS */}
        <Row gutter={[16, 16]} style={{ margin: 0, width: "100%" }}>
          {[
            {
              img: "/img/ShareDoo.png",
              price: "$75/day",
              date: "Jan 15, 2025",
            },
            {
              img: "/img/ShareDoo.png",
              price: "$120/day",
              date: "Jan 20, 2025",
            },
            {
              img: "/img/ShareDoo.png",
              price: "$45/day",
              date: "Jan 25, 2025",
            },
          ].map((item, index) => (
            <Col span={8} key={index} /* bỏ minWidth để không bị tràn */>
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
      <Footer />
    </Layout>
  );
};

export default ListItem;
