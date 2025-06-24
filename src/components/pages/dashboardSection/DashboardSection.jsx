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
      <Header
        style={{ backgroundColor: "white", borderBottom: "1px solid #d9d9d9" }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Row align="middle">
              <Avatar src="/img.png" size="large" />
              <Title level={3} style={{ margin: "0 16px" }}>
                ShareDoo
              </Title>
            </Row>
          </Col>
          <Col>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["dashboard"]}
              style={{ borderBottom: "none" }}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="request" icon={<FileTextOutlined />}>
                Request
              </Menu.Item>
              <Menu.Item key="listings" icon={<AppstoreOutlined />}>
                Listings
              </Menu.Item>
              <Menu.Item key="review" icon={<StarOutlined />}>
                Review
              </Menu.Item>
              <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
                Dashboard
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Row align="middle">
              <BellOutlined style={{ fontSize: "20px", marginRight: "16px" }} />
              <Avatar icon={<UserOutlined />} />
            </Row>
          </Col>
        </Row>
      </Header>
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
                <DollarOutlined />
              </Row>
              <Title level={1}>$2,458</Title>
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
                      <Text>$75/day</Text>
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
                      <Text>$85/day</Text>
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
                      <Text>$95/day</Text>
                      <Text type="success">Available</Text>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card title="Rental Requests">
              <List
                itemLayout="horizontal"
                dataSource={[
                  {
                    renter: "Sarah Johnson",
                    item: "Canon EOS R5",
                    dates: "Mar 15 - Mar 18, 2025",
                    amount: "$225",
                    status: "Pending",
                    statusColor: "orange",
                  },
                  {
                    renter: "John Smith",
                    item: "DJI Mavic Air 2",
                    dates: "Mar 20 - Mar 22, 2025",
                    amount: "$170",
                    status: "Approved",
                    statusColor: "green",
                  },
                ]}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="primary" icon={<CheckCircleOutlined />}>
                        Accept
                      </Button>,
                      <Button type="danger" icon={<CloseCircleOutlined />}>
                        Decline
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src="/image.png" />}
                      title={item.renter}
                      description={item.item}
                    />
                    <div>{item.dates}</div>
                    <div>{item.amount}</div>
                    <div style={{ color: item.statusColor }}>{item.status}</div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Earnings Summary">
              <Row justify="space-between">
                <Text>Monthly Goal</Text>
                <Text>$3,000</Text>
              </Row>
              <Progress percent={82} showInfo={false} />
              <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                <Col span={12}>
                  <Card>
                    <Text>Total Earnings</Text>
                    <Title level={2}>$2,458</Title>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card>
                    <Text>Pending Payouts</Text>
                    <Title level={2}>$542</Title>
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
