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
import React, { useEffect, useState } from "react";
import { getWithdrawalRequests } from "../../../api/withdrawalRequests";

const { Option } = Select;



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
  const [data, setData] = useState([]);

  useEffect(() => {
    getWithdrawalRequests()
      .then(res => {
        // Map dữ liệu backend sang cấu trúc bảng FE
        const mapped = res.data.map((item, idx) => ({
          key: item.id || idx,
          requestId: `#RQ-${item.id || idx}`,
          amount: item.amount,
          owner: item.user?.fullName || item.user?.username || 'Unknown',
          status: item.status,
          total: item.amount ? `${item.amount.toLocaleString()} VND` : '',
          date: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '',
        }));
        setData(mapped);
      })
      .catch(() => setData([]));
  }, []);

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
