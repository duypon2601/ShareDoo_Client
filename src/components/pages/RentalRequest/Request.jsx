
import { Typography, Card, Row, Col } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const { Title, Text } = Typography;

import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderStatusBar from "./OrderStatusBar";

const RentalRequestsSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/rentals/owner-list?status=paid", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          withCredentials: true,
        });
        setOrders(res.data);
      } catch {
        setError("Không thể lấy dữ liệu đơn hàng đã xác nhận.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <Row justify="center" style={{ minHeight: "60vh", alignItems: "center" }}>
        <Col span={20}>
          <Card style={{ marginTop: 32 }}>
            <Title level={3}>Đơn hàng đã xác nhận cho người cho thuê</Title>
            {loading ? (
              <Text>Đang tải dữ liệu...</Text>
            ) : error ? (
              <Text type="danger">{error}</Text>
            ) : orders.length === 0 ? (
              <Text>Không có đơn hàng đã xác nhận.</Text>
            ) : (
              <>
                {orders.map((order) => (
  <Card key={order.id} style={{ marginBottom: 16 }}>
    <OrderStatusBar status={order.status} />
    <Row gutter={16}>
      <Col span={12}>
        <Text strong>Mã đơn:</Text> {order.id} <br />
        <Text strong>Người thuê:</Text> {order.user?.name || order.userId} <br />
        <Text strong>Thời gian thuê:</Text> {order.startDate} - {order.endDate} <br />
        <Text strong>Trạng thái:</Text> {order.status}
      </Col>
      <Col span={12}>
        <Text strong>Sản phẩm:</Text> {order.product?.name || order.productId} <br />
        <Text strong>Địa điểm:</Text> {order.product?.location || "-"} <br />
        <Text strong>Tổng tiền:</Text> {order.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
      </Col>
    </Row>
  </Card>
))}
              </>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default RentalRequestsSection;
