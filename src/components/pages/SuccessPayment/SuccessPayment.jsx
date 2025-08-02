import React from "react";
import {
  BellOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Image,
  Layout,
  Row,
  Typography,
} from "antd";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

import { useEffect } from "react";
import axios from "axios";

const SuccessPayment = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderCodeParam = urlParams.get('orderCode');
    const statusParam = urlParams.get('status');
    if (orderCodeParam && statusParam === 'PAID') {
      console.log('[PAYMENT-STATUS] Gọi API cập nhật trạng thái:', { orderCode: orderCodeParam, status: 'PAID' });
      // Lấy token từ localStorage
      const token = localStorage.getItem('token');
      axios.post('/api/rentals/payment-status', {
        orderCode: orderCodeParam,
        status: 'PAID'
      }, {
        withCredentials: true,
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      })
      .then(res => {
        console.log('[PAYMENT-STATUS] Kết quả:', res.data);
      })
      .catch(err => {
        console.error('[PAYMENT-STATUS] Lỗi:', err);
      });
    }
  }, []);

  return (
    <Layout>
      <Header
        style={{
          background: "#fffffff2",
          boxShadow: "0px 1px 2px #0000000d",
          padding: "0 32px",
        }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Row align="middle" gutter={16}>
              <Col>
                <Image
                  width={56}
                  height={56}
                  src="https://c.animaapp.com/BFVbQzCQ/img/11zon-cropped-1@2x.png"
                  preview={false}
                />
              </Col>
              <Col>
                <Title level={3} style={{ margin: 0 }}>
                  ShareDoo
                </Title>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={24} align="middle">
              <Col><Text>Home</Text></Col>
              <Col><Text>My Orders</Text></Col>
              <Col><Text>Products</Text></Col>
              <Col><Text>Support</Text></Col>
              <Col><BellOutlined style={{ fontSize: 24 }} /></Col>
              <Col><UserOutlined style={{ fontSize: 24 }} /></Col>
              <Col>
                <Image
                  width={32}
                  height={32}
                  src="https://c.animaapp.com/BFVbQzCQ/img/img-2@2x.png"
                  preview={false}
                  style={{ borderRadius: "50%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: "50px 20px", background: "#f0f2f5" }}>
        <Row justify="center">
          <Col>
            <CheckCircleOutlined style={{ fontSize: 72, color: "#a1bfa7" }} />
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 16 }}>
          <Col>
            <Title level={2}>Booking Confirmed!</Title>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 8 }}>
          <Col>
            <Text>
              Your rental request has been sent to the owner. You'll receive a
              confirmation shortly.
            </Text>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: 32 }}>
          <Col xs={24} sm={20} md={16} lg={12}>
            <Card>
              <Title level={4}>Order Summary</Title>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col>
                  <Image
                    width={140}
                    height={96}
                    src="https://c.animaapp.com/BFVbQzCQ/img/dall-e-2025-02-24-22-50-40---a-minimalistic-and-modern-logo-desi@2x.png"
                    preview={false}
                  />
                </Col>
                <Col>
                  <Title level={5}>Demo Product</Title>
                  <Text>123 City Center, Downtown</Text>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={12}>
                  <Text>Check-in</Text>
                  <br />
                  <Text strong>March 15, 2025</Text>
                </Col>
                <Col span={12}>
                  <Text>Check-out</Text>
                  <br />
                  <Text strong>March 20, 2025</Text>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={12}>
                  <Text>Total Price</Text>
                  <br />
                  <Text strong>{(750000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                </Col>
                <Col span={12}>
                  <Text>Booking ID</Text>
                  <br />
                  <Text strong>#BK12345</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={24}>
                  <Text>Host Contact</Text>
                  <Row align="middle" style={{ marginTop: 8 }}>
                    <Col>
                      <Image
                        width={40}
                        height={40}
                        src="https://c.animaapp.com/BFVbQzCQ/img/img-1@2x.png"
                        preview={false}
                        style={{ borderRadius: "50%" }}
                      />
                    </Col>
                    <Col style={{ marginLeft: 8 }}>
                      <Text strong>John Smith</Text>
                      <br />
                      <Text>+1 (555) 123-4567</Text>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row justify="center" gutter={16} style={{ marginTop: 32 }}>
          <Col>
            <Button
              type="primary"
              style={{ backgroundColor: "#a1bfa7", borderColor: "#a1bfa7" }}
            >
              View Order Details
            </Button>
          </Col>
          <Col>
            <Button
              type="default"
              style={{ backgroundColor: "#e3d5be", borderColor: "#e3d5be" }}
            >
              Go to Home
            </Button>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2025 RentSpace. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default SuccessPayment;
