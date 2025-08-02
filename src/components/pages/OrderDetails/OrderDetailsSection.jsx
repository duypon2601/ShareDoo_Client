import { MessageOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Tag, Typography } from "antd";
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
                <Tag color={order?.status === "paid" ? "green" : order?.status === "pending" ? "orange" : "default"}>
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
    <Title level={4}>Owner Details</Title>
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <Image
          width={48}
          src="https://c.animaapp.com/mNiQn72F/img/img-1@2x.png"
          alt="Owner"
          style={{ borderRadius: "50%" }}
        />
      </Col>
      <Col span={20}>
        <Text>Michael Chen</Text><br />
        <Text type="secondary">
          <Image
            width={16}
            src="https://c.animaapp.com/mNiQn72F/img/frame-4.svg"
            alt="Rating"
          />
          4.9 (120 reviews)
        </Text>
      </Col>
    </Row>

    <Button type="primary" block style={{ marginTop: 16 }}>
      Extend Rental
    </Button>
    <Button
      type="default"
      block
      style={{ marginTop: 16 }}
      onClick={async () => {
        if (!order?.orderCode) return;
        try {
          const res = await axios.post('/api/rentals/cancel', null, { params: { orderCode: order.orderCode } });
          alert(res.data || 'Rental cancelled');
          window.location.reload();
        } catch (e) {
          alert(e?.response?.data || 'Cancel failed');
        }
      }}
    >
      Cancel Order
    </Button>
  </Card>
</Col>
      </Row>
    </div>
  );
};

export default OrderDetailsSection;
