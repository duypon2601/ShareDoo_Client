import React, { useEffect, useState, useRef } from "react";
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
import api from "../../config/axios";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const SuccessPayment = () => {
  const [isWalletDeposit, setIsWalletDeposit] = useState(false);
  const [walletDepositStatus, setWalletDepositStatus] = useState(null);
  const [walletDepositMessage, setWalletDepositMessage] = useState("");

  // State cho đơn hàng thật
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [orderData, setOrderData] = useState(null);

  const calledRef = useRef(false);
  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    const urlParams = new URLSearchParams(window.location.search);
    const orderCodeParam = urlParams.get("orderCode");
    const statusParam = urlParams.get("status");
    const amountParam = urlParams.get("amount");
    const isDeposit =
      urlParams.get("type") === "wallet" ||
      urlParams.get("isWalletDeposit") === "true" ||
      window.location.pathname.includes("wallet");

    const token = localStorage.getItem("token");

    if (orderCodeParam && statusParam === "PAID") {
      if (isDeposit) {
        setIsWalletDeposit(true);
        api
          .post(
            "/api/wallet/credit-by-ordercode",
            {
              orderCode: orderCodeParam,
              status: statusParam,
              amount: amountParam ? Number(amountParam) : undefined,
            },
            {
              withCredentials: true,
              headers: token ? { Authorization: `Bearer ${token}` } : {},
            }
          )
          .then((res) => {
            setWalletDepositStatus("success");
            setWalletDepositMessage(res.data || "Nạp tiền vào ví thành công!");
          })
          .catch((err) => {
            setWalletDepositStatus("error");
            setWalletDepositMessage(
              err?.response?.data || "Có lỗi khi cộng tiền vào ví"
            );
          });
      } else {
        setOrderLoading(true);
        setOrderError("");
        // Xác nhận thanh toán trước
        api
          .post(
            "/api/rentals/payment-status",
            {
              orderCode: orderCodeParam,
              status: "PAID",
            },
            {
              withCredentials: true,
              headers: token ? { Authorization: `Bearer ${token}` } : {},
            }
          )
          .then(() => {
            // Lấy thông tin đơn hàng thật
            return api.get(`/api/rentals/detail?orderCode=${orderCodeParam}`);
          })
          .then((res) => {
            setOrderData(res.data);
            setOrderLoading(false);
          })
          .catch((err) => {
            setOrderError(err?.response?.data?.message || "Không thể lấy thông tin đơn hàng.");
            setOrderLoading(false);
          });
      }
    }
  }, []);

  if (isWalletDeposit) {
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
          </Row>
        </Header>
        <Content style={{ padding: "50px 20px", background: "#f0f2f5" }}>
          <Row justify="center">
            <Col>
              <CheckCircleOutlined
                style={{
                  fontSize: 72,
                  color:
                    walletDepositStatus === "success"
                      ? "#a1bfa7"
                      : walletDepositStatus === "error"
                      ? "#faad14"
                      : "#1890ff",
                }}
              />
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 16 }}>
            <Col>
              <Title level={2}>
                {walletDepositStatus === "success"
                  ? "Nạp tiền thành công!"
                  : walletDepositStatus === "error"
                  ? "Có lỗi!"
                  : "Đang xử lý..."}
              </Title>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 8 }}>
            <Col>
              <Text>
                {walletDepositMessage || "Đang xác nhận giao dịch nạp tiền..."}
              </Text>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
  // Render loading/error/thông tin đơn hàng thật sau thanh toán
  if (orderLoading) {
    return (
      <Layout>
        <Content style={{ padding: "50px 20px", background: "#f0f2f5" }}>
          <Row justify="center"><Col><CheckCircleOutlined style={{ fontSize: 72, color: "#1890ff" }} /></Col></Row>
          <Row justify="center" style={{ marginTop: 16 }}><Col><Title level={2}>Đang xác nhận đơn hàng...</Title></Col></Row>
        </Content>
      </Layout>
    );
  }
  if (orderError) {
    return (
      <Layout>
        <Content style={{ padding: "50px 20px", background: "#f0f2f5" }}>
          <Row justify="center"><Col><CheckCircleOutlined style={{ fontSize: 72, color: "#faad14" }} /></Col></Row>
          <Row justify="center" style={{ marginTop: 16 }}><Col><Title level={2}>Có lỗi!</Title></Col></Row>
          <Row justify="center" style={{ marginTop: 8 }}><Col><Text>{orderError}</Text></Col></Row>
        </Content>
      </Layout>
    );
  }
  if (orderData) {
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
              <Title level={2}>Thanh toán thành công!</Title>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 8 }}>
            <Col>
              <Text>Đơn hàng của bạn đã được xác nhận và gửi tới chủ sở hữu.</Text>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: 32 }}>
            <Col xs={24} sm={20} md={16} lg={12}>
              <Card>
                <Title level={4}>Thông tin đơn hàng</Title>
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col>
                    <Image
                      width={140}
                      height={96}
                      src={orderData.product?.imageUrl || "/img-3.png"}
                      preview={false}
                    />
                  </Col>
                  <Col>
                    <Title level={5}>{orderData.product?.name || "Sản phẩm"}</Title>
                    <Text>{orderData.product?.location || "-"}</Text>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={12}>
                    <Text>Thời gian thuê</Text>
                    <br />
                    <Text strong>{orderData.startDate?.slice(0, 10)} - {orderData.endDate?.slice(0, 10)}</Text>
                  </Col>
                  <Col span={12}>
                    <Text>Mã đơn hàng</Text>
                    <br />
                    <Text strong>{orderData.orderCode || orderData.id}</Text>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 16 }}>
                  <Col span={12}>
                    <Text>Tổng tiền</Text>
                    <br />
                    <Text strong>{orderData.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                  </Col>
                  <Col span={12}>
                    <Text>Trạng thái</Text>
                    <br />
                    <Text strong>{orderData.status}</Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 16 }}>
                  <Col span={24}>
                    <Text>Liên hệ chủ sở hữu</Text>
                    <Row align="middle" style={{ marginTop: 8 }}>
                      <Col>
                        <Image
                          width={40}
                          height={40}
                          src={orderData.owner?.imageUrl || "/img-3.png"}
                          preview={false}
                          style={{ borderRadius: "50%" }}
                        />
                      </Col>
                      <Col style={{ marginLeft: 8 }}>
                        <Text strong>{orderData.owner?.name || "Chủ sở hữu"}</Text>
                        <br />
                        <Text>{orderData.owner?.phone || "-"}</Text>
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
                onClick={() => window.location.href = `/Order-Detail?id=${orderData.id}`}
              >
                Xem chi tiết đơn hàng
              </Button>
            </Col>
            <Col>
              <Button
                type="default"
                style={{ backgroundColor: "#e3d5be", borderColor: "#e3d5be" }}
                onClick={() => window.location.href = "/"}
              >
                Về trang chủ
              </Button>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          © 2025 RentSpace. All rights reserved.
        </Footer>
      </Layout>
    );
  }

};

export default SuccessPayment;
