import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  MessageOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const RentalRequestsSection = () => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
          padding: 0,
          margin: 0,
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <div style={{ padding: "24px" }}>
          <Title level={2}>Rental Requests</Title>
          <Text>Manage your incoming rental requests</Text>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {[
              {
                name: "Sarah Mitchell",
                rating: 4.8,
                product: "Professional Camera",
                price: "75.000 ₫/ngày",
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
                price: "120.000 ₫/ngày",
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
                price: "95.000 ₫/ngày",
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalRequestsSection;
