import { CalendarOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Radio, Row, Typography } from "antd";
import React from "react";
import api from "../../config/axios";
import { message } from "antd";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

export const BookingFormSection = ({ product }) => {
  // State cho các trường form
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState(1);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  // Lấy productId từ prop product nếu có
  const productId = product?.id || 1; // fallback nếu không có product
  const quantity = 1;

  const handleProceedToPayment = async () => {
    if (!startDate || !endDate) {
      message.error("Please select rental duration.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        items: [
          {
            productId,
            quantity,
            notes,
          },
        ],
        description: `Rental from ${startDate?.format("YYYY-MM-DD")} to ${endDate?.format("YYYY-MM-DD")}, Delivery: ${deliveryMethod === 1 ? "Self Pickup" : "Delivery Service"}`,
      };
      await api.post("/api/payment/orders", payload);
      message.success("Order created! Redirecting to payment...");
      // Chuyển hướng sang trang thanh toán hoặc hiển thị tiếp
      // window.location.href = "/payment";
    } catch {
      message.error("Failed to create order/payment!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row gutter={16} style={{ width: "100%", position: "relative" }}>
      <Col span={16}>
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0px 1px 2px #0000000d",
          }}
        >
          <Title level={3}>Complete Your Booking</Title>
          <div style={{ marginTop: "24px" }}>
            <Title level={5}>Select Rental Duration</Title>
            <Row gutter={16} style={{ marginTop: "8px" }}>
              <Col span={12}>
                <Text>Start Date</Text>
                <DatePicker
                  style={{ width: "100%", marginTop: "8px" }}
                  suffixIcon={<CalendarOutlined />}
                  value={startDate}
                  onChange={setStartDate}
                />
              </Col>
              <Col span={12}>
                <Text>End Date</Text>
                <DatePicker
                  style={{ width: "100%", marginTop: "8px" }}
                  suffixIcon={<CalendarOutlined />}
                  value={endDate}
                  onChange={setEndDate}
                />
              </Col>
            </Row>
          </div>
          <div style={{ marginTop: "24px" }}>
            <Title level={5}>Delivery Method</Title>
            <Radio.Group
              style={{ width: "100%", marginTop: "8px" }}
              value={deliveryMethod}
              onChange={e => setDeliveryMethod(e.target.value)}
            >
              <Radio
                style={{ display: "block", height: "30px", lineHeight: "30px" }}
                value={1}
              >
                <Text strong>Self Pickup</Text>{" "}
                <Text type="secondary">
                  Pick up the item from the owner's location
                </Text>
              </Radio>
              <Radio
                style={{ display: "block", height: "30px", lineHeight: "30px" }}
                value={2}
              >
                <Text strong>Delivery Service (+$10)</Text>{" "}
                <Text type="secondary">Get it delivered to your doorstep</Text>
              </Radio>
            </Radio.Group>
          </div>
          <div style={{ marginTop: "24px" }}>
            <Title level={5}>Additional Notes</Title>
            <TextArea
              placeholder="Any special requests or notes for the owner?"
              rows={4}
              style={{ marginTop: "8px" }}
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0px 1px 2px #0000000d",
          }}
        >
          <div
            style={{
              backgroundImage:
                product?.imageUrl ? `url(${product.imageUrl})` : "url(https://c.animaapp.com/MTOlWwgI/img/img@2x.png)",
              backgroundSize: "cover",
              height: "192px",
              borderRadius: "8px",
            }}
          />
          <Title level={4} style={{ marginTop: "16px" }}>
            {product?.name || "Demo Product"}
          </Title>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
          >
            <Title level={3} style={{ margin: 0 }}>
              ${product?.pricePerDay || 75}
            </Title>
            <Text type="secondary" style={{ marginLeft: "8px" }}>
              / day
            </Text>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "16px" }}
          >
            <div
              style={{
                backgroundImage:
                  product?.ownerAvatar ? `url(${product.ownerAvatar})` : "url(https://c.animaapp.com/MTOlWwgI/img/img-1@2x.png)",
                backgroundSize: "cover",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
              }}
            />
            <div style={{ marginLeft: "16px" }}>
              <Text strong>{product?.ownerName || "James Wilson"}</Text>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "4px",
                }}
              >
                <StarOutlined style={{ color: "#faad14" }} />
                <Text style={{ marginLeft: "8px" }}>{product?.ownerRating ? `${product.ownerRating} (${product.ownerReviewCount} reviews)` : "4.9 (124 reviews)"}</Text>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #f0f0f0",
              marginTop: "24px",
              paddingTop: "16px",
            }}
          >
            <Title level={5}>Price Breakdown</Title>
            <Row style={{ marginTop: "8px" }}>
              <Col span={12}>
                <Text>3 days rental</Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Text>$225.00</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: "8px" }}>
              <Col span={12}>
                <Text>Service fee</Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Text>$22.50</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: "8px" }}>
              <Col span={12}>
                <Text>Delivery fee</Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Text>$10.00</Text>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: "1px solid #f0f0f0",
                marginTop: "16px",
                paddingTop: "8px",
              }}
            >
              <Col span={12}>
                <Text strong>Total</Text>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Title level={4} style={{ margin: 0 }}>
                  $257.50
                </Title>
              </Col>
            </Row>
          </div>
          <Button type="primary" style={{ width: "100%", marginTop: "24px" }} onClick={handleProceedToPayment} loading={loading}>
            Proceed to Payment
          </Button>
        </div>
      </Col>
    </Row>
  );
};
