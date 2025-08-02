import { Badge, Button, Card, Col, Row, Typography } from "antd";
import OrderStatusBar from "./OrderStatusBar";
import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

const { Title, Text } = Typography;

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('ongoing');
  useEffect(() => {
    axios.get("/api/rentals/list")
      .then(res => setOrders(res.data))
      .catch(() => setOrders([]));
  }, []);

  // Phân loại đơn hàng
  const ongoingStatus = ["pending", "paid", "confirmed", "packed", "received", "return_wait"];
  const completedStatus = ["returned"];
  const cancelledStatus = ["cancelled", "rejected"];

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'ongoing') return ongoingStatus.includes(order.status);
    if (activeTab === 'completed') return completedStatus.includes(order.status);
    if (activeTab === 'cancelled') return cancelledStatus.includes(order.status);
    return true;
  });

  // Tính số lượng từng loại
  const ongoingCount = orders.filter(order => ongoingStatus.includes(order.status)).length;
  const completedCount = orders.filter(order => completedStatus.includes(order.status)).length;
  const cancelledCount = orders.filter(order => cancelledStatus.includes(order.status)).length;

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ width: "100%", padding: "24px 20px" }}>
        <Row>
          <Col span={24}>
            <Title level={2}>My Orders</Title>
            <Text type="secondary">Track and manage your rental orders</Text>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }}>
          <Col span={24}>
            <Row gutter={16} style={{ borderBottom: "1px solid #d9d9d9" }}>
              <Col>
                <Badge count={ongoingCount} style={{ backgroundColor: "#a1bfa7" }}>
                  <Text strong style={{ color: "#a1bfa7" }}>
                    Ongoing
                  </Text>
                </Badge>
              </Col>
              <Col>
                <Badge count={completedCount} style={{ backgroundColor: "#f0f0f0" }}>
                  <Text type="secondary">Completed</Text>
                </Badge>
              </Col>
              <Col>
                <Badge count={cancelledCount} style={{ backgroundColor: "#f0f0f0" }}>
                  <Text type="secondary">Cancelled</Text>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Tabs filter */}
        <Row style={{ marginTop: 24, marginBottom: 16 }} gutter={16}>
          <Col>
            <Button type={activeTab === 'ongoing' ? 'primary' : 'default'} onClick={() => setActiveTab('ongoing')}>Ongoing</Button>
          </Col>
          <Col>
            <Button type={activeTab === 'completed' ? 'primary' : 'default'} onClick={() => setActiveTab('completed')}>Completed</Button>
          </Col>
          <Col>
            <Button type={activeTab === 'cancelled' ? 'primary' : 'default'} onClick={() => setActiveTab('cancelled')}>Cancelled</Button>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }} gutter={[0, 24]}>
          {filteredOrders.map((order, idx) => (
            <Col span={24} key={order.id || idx}>
              <Card
                style={{
                  borderRadius: "8px",
                  boxShadow: "0px 1px 2px #0000000d",
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <Row gutter={16}>
                  <Col>
                    {/* Thanh trạng thái tiến trình đơn hàng */}
                    <OrderStatusBar status={order.status} />
                    <div
                      style={{
                        width: "96px",
                        height: "96px",
                        backgroundImage: `url(${order.product?.imageUrl || "/img-3.png"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                      }}
                    />
                  </Col>
                  <Col flex="auto">
                    <Row justify="space-between">
                      <Col>
                        <Title level={4}>{order.product?.name || "Product"}</Title>
                        <Text type="secondary">Order #{order.orderCode || order.id}</Text>
                      </Col>
                      <Col>
                        <Badge
                          count={order.status || "Unknown"}
                          style={{
                            backgroundColor: order.status === "paid" ? "#f6ffed" : order.status === "pending" ? "#fff7e6" : "#f0f0f0",
                            color: order.status === "paid" ? "#52c41a" : order.status === "pending" ? "#fa8c16" : "#999",
                            borderRadius: "12px",
                            padding: "0 8px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "16px" }} justify="space-between">
                      <Col>
                        <Text type="secondary">Rental Period</Text>
                        <br />
                        <Text>{order.startDate?.slice(0, 10)} - {order.endDate?.slice(0, 10)}</Text>
                      </Col>
                      <Col>
                        <Text type="secondary">Total Price</Text>
                        <br />
                        <Text>{order.totalPrice?.toLocaleString()} ₫</Text>
                      </Col>
                      <Col>
                        <Button type="primary" onClick={() => {
  window.location.href = `/Order-Detail?id=${order.id}`;
}}>View Details</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OrdersSection;
