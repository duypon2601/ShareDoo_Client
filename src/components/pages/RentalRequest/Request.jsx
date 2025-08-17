
import { Typography, Card, Row, Col } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const { Title, Text } = Typography;

import React, { useEffect, useState } from "react";
import api from "../../components/config/axios";
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
        const res = await api.get("/api/rentals/owner-list?", {
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
        <Col span={40}>
          <Card >
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
                    {order.status === 'received' && (
                      <button
                        style={{ margin: '8px 0', background: '#52c41a', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer' }}
                        disabled={order.markHandoverLoading}
                        onClick={async () => {
                          const token = localStorage.getItem("token");
                          if (!token) {
                            window.alert("Bạn cần đăng nhập để thực hiện thao tác này.");
                            return;
                          }
                          setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, markHandoverLoading: true } : o));
                          try {
                            await api.post(
                              `/api/rentals/mark-handover?orderCode=${order.orderCode || order.id}`,
                              {},
                              {
                                headers: { Authorization: `Bearer ${token}` },
                                withCredentials: true,
                              }
                            );
                            // Refetch orders
                            const res = await api.get("/api/rentals/owner-list?status=paid", {
                              headers: { Authorization: `Bearer ${token}` },
                              withCredentials: true,
                            });
                            setOrders(res.data);
                          } catch (err) {
                            window.alert('Có lỗi khi xác nhận đã bàn giao!');
                          } finally {
                            setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, markHandoverLoading: false } : o));
                          }
                        }}
                      >
                        {order.markHandoverLoading ? 'Đang xác nhận...' : 'Đã bàn giao'}
                      </button>
                    )}
                    {order.status === 'return_wait' && (
                      <>
                        <button
                          style={{ margin: '8px 8px 8px 0', background: '#1677ff', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer' }}
                          onClick={async () => {
                            const token = localStorage.getItem("token");
                            if (!token) {
                              window.alert("Bạn cần đăng nhập để thực hiện thao tác này.");
                              return;
                            }
                            try {
                              await api.post(`/api/rentals/mark-received?orderCode=${order.orderCode}`,
                                {},
                                { headers: { Authorization: `Bearer ${token}` }, withCredentials: true });
                              setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, status: 'received' } : o));
                              window.alert('Đã xác nhận nhận hàng thành công');
                            } catch {
                              window.alert('Xác nhận nhận hàng thất bại');
                            }
                          }}
                        >
                          Đã nhận hàng
                        </button>
                        <button
                          style={{ margin: '8px 0', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer' }}
                          onClick={async () => {
                            const token = localStorage.getItem("token");
                            if (!token) {
                              window.alert("Bạn cần đăng nhập để thực hiện thao tác này.");
                              return;
                            }
                            try {
                              await api.post(`/api/rentals/mark-returned?orderCode=${order.orderCode}`,
                                {},
                                { headers: { Authorization: `Bearer ${token}` }, withCredentials: true });
                              setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, status: 'returned' } : o));
                              window.alert('Đã xác nhận trả hàng thành công');
                            } catch {
                              window.alert('Xác nhận trả hàng thất bại');
                            }
                          }}
                        >
                          Đã trả hàng
                        </button>
                      </>
                    )}
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
