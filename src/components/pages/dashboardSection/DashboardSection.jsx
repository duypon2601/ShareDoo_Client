import RentalRequestsList from "./RentalRequestsList";
import {
  AppstoreOutlined,
  BellOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarOutlined,
  FileTextOutlined,
  HomeOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Layout,
  List,
  Menu,
  Progress,
  Row,
  Typography,
} from "antd";
import React from "react";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const DashboardSection = () => {
  return (
    <Layout style={{ backgroundColor: "#e3d5be" }}>
      <Content style={{ padding: "24px 50px" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title level={2}>Welcome back, Michael!</Title>
            <Text>Here's what's happening with your rentals today.</Text>
          </Col>
          <Col span={6}>
            <Card>
              <Row justify="space-between" align="middle">
                <Text>Active Listings</Text>
                <AppstoreOutlined />
              </Row>
              <Title level={1}>24</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row justify="space-between" align="middle">
                <Text>Pending Requests</Text>
                <FileTextOutlined />
              </Row>
              <Title level={1}>12</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row justify="space-between" align="middle">
                <Text>Total Earnings</Text>
                {/* Có thể thay DollarOutlined bằng icon tiền Việt nếu muốn */}
              </Row>
              <Title level={1}>
                {(2458000).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row justify="space-between" align="middle">
                <Text>Rating</Text>
                <StarOutlined />
              </Row>
              <Title level={1}>4.8</Title>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title="My Listings"
              extra={<Button type="primary">Add New Listing</Button>}
            >
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card
                    cover={
                      <div
                        style={{
                          height: "192px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        IMG 350×192
                      </div>
                    }
                  >
                    <Title level={4}>Canon EOS R5</Title>
                    <Row justify="space-between">
                      <Text>75.000 ₫/ngày</Text>
                      <Text type="success">Available</Text>
                    </Row>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    cover={
                      <div
                        style={{
                          height: "192px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        IMG 350×192
                      </div>
                    }
                  >
                    <Title level={4}>DJI Mavic Air 2</Title>
                    <Row justify="space-between">
                      <Text>85.000 ₫/ngày</Text>
                      <Text type="danger">Rented</Text>
                    </Row>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    cover={
                      <div
                        style={{
                          height: "192px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        IMG 350×192
                      </div>
                    }
                  >
                    <Title level={4}>MacBook Pro 16"</Title>
                    <Row justify="space-between">
                      <Text>95.000 ₫/ngày</Text>
                      <Text type="success">Available</Text>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Rental Requests">
              {/* RentalRequest logic chuyển từ Request.jsx sang */}
              <RentalRequestsList />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Earnings Summary">
              <Row justify="space-between">
                <Text>Monthly Goal</Text>
                <Text>3.000.000 ₫</Text>
              </Row>
              <Progress percent={82} showInfo={false} />
              <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                <Col span={12}>
                  <Card>
                    <Text>Total Earnings</Text>
                    <Title level={2}>
                      {(2458000).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Text>Pending Payouts</Text>
                    <Title level={2}>
                      {(542000).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Title>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Reviews & Ratings">
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    reviewer: "Emma Wilson",
                    review: "Great equipment and very professional service!",
                    rating: 5,
                  },
                  {
                    reviewer: "David Chen",
                    review: "Very responsive and helpful. Would rent again!",
                    rating: 5,
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="/img-3.png" />}
                      title={item.reviewer}
                      description={
                        <div>
                          <div>
                            {[...Array(item.rating)].map((_, i) => (
                              <StarOutlined
                                key={i}
                                style={{ color: "#fadb14" }}
                              />
                            ))}
                          </div>
                          <Text>{item.review}</Text>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DashboardSection;
