import {
  Badge,
  Button,
  Card,
  Col,
  Row,
  Typography,
  Segmented,
  Image,
} from "antd";
import OrderStatusBar from "./OrderStatusBar";
import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

const { Title, Text } = Typography;

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("ongoing");

  useEffect(() => {
    axios
      .get("/api/rentals/list")
      .then((res) => setOrders(res.data))
      .catch(() => setOrders([]));
  }, []);

  const ongoingStatus = [
    "pending",
    "paid",
    "confirmed",
    "packed",
    "received",
    "return_wait",
  ];
  const completedStatus = ["returned"];
  const cancelledStatus = ["cancelled", "rejected"];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "ongoing") return ongoingStatus.includes(order.status);
    if (activeTab === "completed")
      return completedStatus.includes(order.status);
    if (activeTab === "cancelled")
      return cancelledStatus.includes(order.status);
    return true;
  });

  return (
    <div
      style={{
        width: "99vw",
        padding: "30px 20px",
        background: "linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%)",
        minHeight: "100vh",
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} style={{ width: '100%', maxWidth: '100vw', margin: 0, padding: 0 }}>
          <Title
            level={2}
            style={{ color: "#1a1a1a", marginBottom: 12, fontSize: 28 }}
          >
            My Orders
          </Title>
          <Text type="secondary" style={{ fontSize: 18 }}>
            Track and manage your rental orders
          </Text>

          <Segmented
            style={{
              marginTop: 32,
              background: "#fff",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
            block
            options={[
              { label: `Ongoing`, value: "ongoing" },
              { label: `Completed`, value: "completed" },
              { label: `Cancelled`, value: "cancelled" },
            ]}
            value={activeTab}
            onChange={(val) => setActiveTab(val)}
          />

          <div style={{ marginTop: 40 }}>
            {filteredOrders.map((order, idx) => (
              <Card
                key={order.id || idx}
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  marginBottom: 32,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: 32 }}
                hoverable
              >
                <OrderStatusBar status={order.status} />
                <Row gutter={[24, 24]} align="middle">
                  <Col>
                    <Image
                      width={150}
                      height={150}
                      src={order.product?.imageUrl || "/img-3.png"}
                      fallback="/img-3.png"
                      style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        border: "1px solid #f0f0f0",
                        transition: "transform 0.3s ease",
                      }}
                      preview={false}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </Col>

                  <Col flex="auto">
                    <Row justify="space-between" align="middle">
                      <Col>
                        <Title
                          level={4}
                          style={{
                            marginBottom: 8,
                            color: "#1a1a1a",
                            fontSize: 22,
                          }}
                        >
                          {order.product?.name || "Product"}
                        </Title>
                        <Text type="secondary" style={{ fontSize: 16 }}>
                          Order #{order.orderCode || order.id}
                        </Text>
                      </Col>
                      <Col>
                        <Badge
                          count={order.status || "Unknown"}
                          style={{
                            backgroundColor:
                              order.status === "paid"
                                ? "#e6f7e9"
                                : order.status === "pending"
                                ? "#fff1e6"
                                : order.status === "cancelled" ||
                                  order.status === "rejected"
                                ? "#ffe6e6"
                                : "#f0f0f0",
                            color:
                              order.status === "paid"
                                ? "#389e0d"
                                : order.status === "pending"
                                ? "#d46b08"
                                : order.status === "cancelled" ||
                                  order.status === "rejected"
                                ? "#cf1322"
                                : "#595959",
                            borderRadius: "12px",
                            padding: "6px 14px",
                            fontSize: 14,
                            fontWeight: 500,
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row
                      justify="space-between"
                      style={{ marginTop: 24 }}
                      gutter={[24, 24]}
                    >
                      <Col>
                        <Text type="secondary" style={{ fontSize: 16 }}>
                          Rental Period
                        </Text>
                        <br />
                        <Text style={{ fontSize: 16 }}>
                          {order.startDate?.slice(0, 10)} -{" "}
                          {order.endDate?.slice(0, 10)}
                        </Text>
                      </Col>
                      <Col>
                        <Text type="secondary" style={{ fontSize: 16 }}>
                          Total Price
                        </Text>
                        <br />
                        <Text style={{ fontSize: 16 }}>
                          {order.totalPrice?.toLocaleString()} ₫
                        </Text>
                      </Col>
                      <Col>
                        <Button
                          type="primary"
                          onClick={() =>
                            (window.location.href = `/Order-Detail?id=${order.id}`)
                          }
                          style={{
                            background:
                              "linear-gradient(135deg, #1890ff 0%, #40c4ff 100%)",
                            border: "none",
                            borderRadius: "10px",
                            padding: "8px 20px",
                            height: 44,
                            fontWeight: 500,
                            fontSize: 16,
                            transition: "all 0.3s ease",
                            marginRight: 12,
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow =
                              "0 4px 12px rgba(24, 144, 255, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "none";
                          }}
                        >
                          View Details
                        </Button>
                        {order.status === "received" && (
                          <Button
                            type="primary"
                            danger
                            loading={order.markHandoverLoading}
                            style={{
                              borderRadius: "10px",
                              padding: "8px 20px",
                              height: 44,
                              fontWeight: 500,
                              fontSize: 16,
                              marginLeft: 8,
                              background: "linear-gradient(135deg, #ff4d4f 0%, #ffb199 100%)",
                              border: "none",
                            }}
                            onClick={async () => {
                              const token = localStorage.getItem("token");
                              if (!token) {
                                window.alert("Bạn cần đăng nhập để thực hiện thao tác này.");
                                return;
                              }
                              setOrders((prev) =>
                                prev.map((o) =>
                                  o.id === order.id ? { ...o, markHandoverLoading: true } : o
                                )
                              );
                              try {
                                await axios.post(
                                  `/api/rentals/mark-handover?orderCode=${order.orderCode}`,
                                  {},
                                  {
                                    headers: { Authorization: `Bearer ${token}` },
                                    withCredentials: true,
                                  }
                                );
                                window.alert("Đã xác nhận bàn giao thành công!");
                                // Refresh orders list
                                const res = await axios.get("/api/rentals/list");
                                setOrders(res.data);
                              } catch (err) {
                                window.alert(
                                  err?.response?.data?.message ||
                                    "Có lỗi xảy ra khi xác nhận bàn giao."
                                );
                              } finally {
                                setOrders((prev) =>
                                  prev.map((o) =>
                                    o.id === order.id ? { ...o, markHandoverLoading: false } : o
                                  )
                                );
                              }
                            }}
                          >
                            Đã bàn giao
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrdersSection;
