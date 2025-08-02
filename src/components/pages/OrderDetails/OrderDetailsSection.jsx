import { MessageOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Tag, Typography } from "antd";
import OrderStatusBar from "./OrderStatusBar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../config/axios";

const { Title, Text } = Typography;

const OrderDetailsSection = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const orderCode = params.get("orderCode");
  const [order, setOrder] = useState(null);
  useEffect(() => {
    if (id || orderCode) {
      axios.get(`/api/rentals/detail?${id ? `id=${id}` : `orderCode=${orderCode}`}`)
        .then(res => setOrder(res.data))
        .catch(() => setOrder(null));
    }
  }, [id, orderCode]);

  // Tự động reload khi quay lại tab
  useEffect(() => {
    // Nếu có orderCode và status=PAID trên URL (sau thanh toán), gọi API cập nhật trạng thái
    const urlParams = new URLSearchParams(window.location.search);
    const orderCodeParam = urlParams.get('orderCode');
    const statusParam = urlParams.get('status');
    if (orderCodeParam && statusParam === 'PAID') {
      console.log('[PAYMENT-STATUS] Gọi API cập nhật trạng thái:', { orderCode: orderCodeParam, status: 'PAID' });
      axios.post('/api/rentals/payment-status', {
        orderCode: orderCodeParam,
        status: 'PAID'
      })
      .then(res => {
        console.log('[PAYMENT-STATUS] Kết quả:', res.data);
        // Sau khi cập nhật, refetch lại đơn hàng
        if (id || orderCodeParam) {
          axios.get(`/api/rentals/detail?${id ? `id=${id}` : `orderCode=${orderCodeParam}`}`)
            .then(res => setOrder(res.data))
            .catch(() => setOrder(null));
        }
      })
      .catch(err => {
        console.error('[PAYMENT-STATUS] Lỗi:', err);
      });
    } else {
      // Bình thường, chỉ refetch khi chuyển tab
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible" && (id || orderCode)) {
          axios.get(`/api/rentals/detail?${id ? `id=${id}` : `orderCode=${orderCode}`}`)
            .then(res => setOrder(res.data))
            .catch(() => setOrder(null));
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, [id, orderCode]);

  return (
    <div style={{ width: "100vw", margin: 0, padding: 0, backgroundColor: "#fff" }}>
      <Row gutter={[16, 16]} style={{ padding: "0 24px" }}>
        <Col span={24}>
          <Title level={2}>Order Details</Title>
          <Text>Order #{order?.orderCode || order?.id || "-"}</Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ padding: "0 24px" }}>
        <Col span={16}>
          {order && <OrderStatusBar status={order.status} />}
          <Card style={{ width: "100%" }}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Image
                  width="100%"
                  src={order?.product?.imageUrl || "https://c.animaapp.com/mNiQn72F/img/img@2x.png"}
                  alt="Product"
                />
              </Col>
              <Col span={16}>
                <Title level={3}>{order?.product?.name || "Product"}</Title>
                <Tag color={(order?.status !== 'cancelled' && order?.status !== 'rejected' && order?.status !== 'completed') ? "orange" : "default"}>
                  {order?.status || "Unknown"}
                </Tag>
                <Row>
                  <Col span={12}><Text>Start Date</Text></Col>
                  <Col span={12}><Text>{order?.startDate?.slice(0, 10) || "-"}</Text></Col>
                </Row>
                <Row>
                  <Col span={12}><Text>End Date</Text></Col>
                  <Col span={12}><Text>{order?.endDate?.slice(0, 10) || "-"}</Text></Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: "100%", marginTop: 16 }}>
            <Title level={4}>Price Breakdown</Title>
            <Row><Col span={12}><Text>Rental Fee</Text></Col><Col span={12}><Text>{order?.totalPrice?.toLocaleString() || "-"} ₫</Text></Col></Row>
            {/* Có thể bổ sung các khoản phí khác nếu backend trả về */}
            <Row><Col span={12}><Text strong>Total</Text></Col><Col span={12}><Text strong>{order?.totalPrice?.toLocaleString() || "-"} ₫</Text></Col></Row>
          </Card>

          <Card style={{ width: "100%", marginTop: 16 }}>
            <Title level={4}>Order Timeline</Title>
            <Row>
              <Col span={2}>
                <Image width={32} src="https://c.animaapp.com/mNiQn72F/img/frame.svg" alt="Order Placed" />
              </Col>
              <Col span={22}>
                <Text>Order Placed</Text><br />
                <Text type="secondary">Jan 14, 2025 - 2:30 PM</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Image width={32} src="https://c.animaapp.com/mNiQn72F/img/frame-1.svg" alt="Owner Confirmed" />
              </Col>
              <Col span={22}>
                <Text>Owner Confirmed</Text><br />
                <Text type="secondary">Jan 14, 2025 - 4:15 PM</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Image width={32} src="https://c.animaapp.com/mNiQn72F/img/frame-2.svg" alt="Item Picked Up" />
              </Col>
              <Col span={22}>
                <Text>Item Picked Up</Text><br />
                <Text type="secondary">Jan 15, 2025 - 10:00 AM</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Image width={32} src="https://c.animaapp.com/mNiQn72F/img/frame-3.svg" alt="Ongoing" />
              </Col>
              <Col span={22}>
                <Text>Ongoing</Text><br />
                <Text type="secondary">Current Status</Text>
              </Col>
            </Row>
          </Card>
        </Col>

<Col span={8}>
  <Card style={{ width: "100%" }}>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetailsSection;
