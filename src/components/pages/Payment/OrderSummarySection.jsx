import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import {
  CreditCardOutlined,
  LockOutlined,
  SafetyOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Typography,
  message,
  Spin,
} from "antd";

const { Title, Text, Paragraph } = Typography;

const OrderSummarySection = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [paymentLink, setPaymentLink] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();

  // Dummy order data, cần lấy từ props hoặc redux thực tế
  const orderData = {
    productId: 1,
    quantity: 1,
    totalPrice: 328.9,
    // ... các trường khác nếu cần
  };

  const handlePayNow = async () => {
    setLoading(true);
    try {
      // 1. Tạo order
      let createdOrderId = orderId;
      if (!orderId) {
        const resOrder = await api.post("/api/payment/orders", {
          productId: orderData.productId,
          quantity: orderData.quantity,
          totalPrice: orderData.totalPrice,
        });
        createdOrderId = resOrder.data.data.id || resOrder.data.data.orderId;
        setOrderId(createdOrderId);
      }
      // 2. Tạo payment link
      const resLink = await api.post(`/api/payment/create-payment-link/${createdOrderId}`);
      setPaymentLink(resLink.data.data.checkoutUrl);
      setQrCode(resLink.data.data.qrCode);
      message.success("Vui lòng quét mã QR hoặc nhấn vào link để thanh toán!");
    } catch (err) {
      message.error("Không thể tạo đơn hàng hoặc link thanh toán!");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (!orderId && !paymentLink) return;
    setConfirming(true);
    try {
      // Lấy orderCode từ paymentLink hoặc backend (giả sử orderCode là orderId ở đây)
      const orderCode = orderId;
      await api.post(`/api/payment/confirm?orderCode=${orderCode}`);
      message.success("Thanh toán thành công!");
      navigate("/pages/SuccessPayment");
    } catch (err) {
      message.error("Chưa xác nhận được thanh toán. Vui lòng thử lại sau!");
    } finally {
      setConfirming(false);
    }
  };

  return (
    <Row gutter={[16, 16]} style={{ padding: "16px" }}>
      <Col span={16}>
        <Card
          bordered={false}
          style={{ boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a" }}
        >
          <Title level={3}>Order Summary</Title>
          <Row gutter={[16, 16]} align="middle">
            <Col span={4}>
              <img
                src="https://c.animaapp.com/LMGcYQ4G/img/dall-e-2025-02-24-22-50-40---a-minimalistic-and-modern-logo-desi@2x.png"
                alt="Dalle"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Col>
            <Col span={16}>
              <Title level={5}>Demo Product</Title>
              <Text>Rental Period: 7 days</Text>
              <br />
              <Text>Quantity: 1</Text>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}>
              <Text>$299.00</Text>
            </Col>
          </Row>
          <Divider />
          <Row justify="space-between">
            <Text>Subtotal</Text>
            <Text>$299.00</Text>
          </Row>
          <Row justify="space-between">
            <Text>Tax</Text>
            <Text>$29.90</Text>
          </Row>
          <Row justify="space-between">
            <Title level={5}>Total</Title>
            <Title level={5}>$328.90</Title>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          bordered={false}
          style={{ boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a" }}
        >
          <Title level={3}>Payment Method</Title>
          <Radio.Group style={{ width: "100%" }}>
            <Radio
              style={{ display: "block", height: "58px", lineHeight: "58px" }}
              value="payos"
              checked
            >
              PayOS (QR/Link)
            </Radio>
          </Radio.Group>
        </Card>
        <Button
          type="primary"
          block
          style={{
            marginTop: "16px",
            backgroundColor: "#a1bfa7",
            borderColor: "#a1bfa7",
          }}
          loading={loading}
          onClick={handlePayNow}
          disabled={!!paymentLink}
        >
          {paymentLink ? "Đã tạo link thanh toán" : "Pay Now $328.90"}
        </Button>
        {paymentLink && (
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Title level={5}>Quét mã QR để thanh toán</Title>
            {qrCode && (
              <img src={qrCode} alt="QR Code" style={{ width: 200, margin: "16px auto" }} />
            )}
            <div>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                Hoặc nhấn vào đây để thanh toán
              </a>
            </div>
            <Button
              type="primary"
              style={{ marginTop: 16, backgroundColor: "#52c41a", borderColor: "#52c41a" }}
              loading={confirming}
              onClick={handleConfirmPayment}
            >
              Xác nhận đã thanh toán
            </Button>
          </div>
        )}
        <Row justify="center" align="middle" style={{ marginTop: "16px" }}>
          <SafetyOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
          <LockOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
          <Paragraph style={{ textAlign: "center", marginTop: "8px" }}>
            Your payment is secured with SSL encryption
          </Paragraph>
        </Row>
      </Col>
    </Row>
  );
};

export default OrderSummarySection;
