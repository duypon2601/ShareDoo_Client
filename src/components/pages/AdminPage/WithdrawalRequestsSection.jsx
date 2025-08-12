import { BellOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Row,
  Select,
  Table,
  Tag,
} from "antd";
import React from "react";

const { Option } = Select;

const data = [
  {
    key: "1",
    requestId: "#RQ-2024-001",
    amount: 100000,
    owner: "Sarah Connor",
    status: "Active",
    total: "$240.00",
    date: "Dec 28, 2024",
  },
  {
    key: "2",
    requestId: "#RQ-2024-002",
    amount: 20000,
    owner: "Mike Johnson",
    status: "Completed",
    total: "$85.00",
    date: "Dec 27, 2024",
  },
  {
    key: "3",
    requestId: "#RQ-2024-003",
    amount: 30000,
    owner: "Lisa Davis",
    status: "Reported",
    total: "$120.00",
    date: "Dec 26, 2024",
  },
];

const columns = [
  {
    title: "Request ID",
    dataIndex: "requestId",
    key: "requestId",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const color =
        status === "Active" ? "green" : status === "Completed" ? "blue" : "red";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    key: "action",
    render: () => <Button type="link">View</Button>,
  },
];

export const WithdrawalRequestsSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Card
        style={{ marginBottom: 16 }}
        bodyStyle={{ padding: 0 }}
        bordered={false}
        title={
          <Row justify="space-between" align="middle">
            <Col>Dashboard</Col>
            <Col>
              <Badge count={3}>
                <BellOutlined style={{ fontSize: 24 }} />
              </Badge>
              <Avatar
                size="large"
                src="https://c.animaapp.com/NgJYmgrS/img/img@2x.png"
                style={{ marginLeft: 16 }}
              />
            </Col>
          </Row>
        }
      />
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <p>Total Users</p>
            <h2>2,847</h2>
            <p style={{ color: "green" }}>↗ +12% from last month</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>Products Listed</p>
            <h2>1,523</h2>
            <p style={{ color: "green" }}>↗ +8% from last month</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>Rentals This Month</p>
            <h2>394</h2>
            <p style={{ color: "green" }}>↗ +15% from last month</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>Active Complaints</p>
            <h2>7</h2>
            <p style={{ color: "red" }}>↗ +2 from last week</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={16}>
          <Card
            title="Cash flow management"
            extra={
              <Select defaultValue="This Month" style={{ width: 120 }}>
                <Option value="thisMonth">This Month</Option>
                <Option value="lastMonth">Last Month</Option>
              </Select>
            }
          >
            <img
              src="https://c.animaapp.com/NgJYmgrS/img/group.png"
              alt="Cash flow graph"
              style={{ width: "100%" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recent Notifications">
            <Card
              type="inner"
              style={{ marginBottom: 16 }}
              bodyStyle={{ padding: 8 }}
            >
              <Row align="middle">
                <Col span={2}>
                  <img
                    src="https://c.animaapp.com/NgJYmgrS/img/i.svg"
                    alt="Notification"
                  />
                </Col>
                <Col span={22}>
                  <p>3 new products pending approval</p>
                  <p style={{ color: "gray" }}>2 hours ago</p>
                </Col>
              </Row>
            </Card>
            <Card
              type="inner"
              style={{ marginBottom: 16 }}
              bodyStyle={{ padding: 8 }}
            >
              <Row align="middle">
                <Col span={2}>
                  <img
                    src="https://c.animaapp.com/NgJYmgrS/img/i-1.svg"
                    alt="Notification"
                  />
                </Col>
                <Col span={22}>
                  <p>1 user reported for violation</p>
                  <p style={{ color: "gray" }}>4 hours ago</p>
                </Col>
              </Row>
            </Card>
            <Card
              type="inner"
              style={{ marginBottom: 16 }}
              bodyStyle={{ padding: 8 }}
            >
              <Row align="middle">
                <Col span={2}>
                  <img
                    src="https://c.animaapp.com/NgJYmgrS/img/i-2.svg"
                    alt="Notification"
                  />
                </Col>
                <Col span={22}>
                  <p>Payment system updated successfully</p>
                  <p style={{ color: "gray" }}>1 day ago</p>
                </Col>
              </Row>
            </Card>
            <Card type="inner" bodyStyle={{ padding: 8 }}>
              <Row align="middle">
                <Col span={2}>
                  <img
                    src="https://c.animaapp.com/NgJYmgrS/img/i-3.svg"
                    alt="Notification"
                  />
                </Col>
                <Col span={22}>
                  <p>15 new user registrations</p>
                  <p style={{ color: "gray" }}>2 days ago</p>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
      <Card title="Withdrawal Requests" style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default WithdrawalRequestsSection;
