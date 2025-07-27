import {
  AppstoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Image,
  Layout,
  Row,
  Typography,
  Spin,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

const { Content } = Layout;
const { Title, Text } = Typography;

// Thêm hàm định dạng VND
function formatVND(amount) {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("vi-VN") + "₫";
}

const ListItem = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeListingsCount, setActiveListingsCount] = useState(0);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/products/my-products");
      const productsData = response.data;
      setProducts(productsData);

      const activeCount = productsData.filter(
        (product) => product.availabilityStatus === "AVAILABLE"
      ).length;
      setActiveListingsCount(activeCount);
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to load your products");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatPrice = (price) => {
    return `${formatVND(price)}/ngày`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "#52c41a";
      case "RENTED":
        return "#faad14";
      case "MAINTENANCE":
        return "#ff4d4f";
      default:
        return "#d9d9d9";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "Active";
      case "RENTED":
        return "Rented";
      case "MAINTENANCE":
        return "Maintenance";
      default:
        return "Unknown";
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "99vw",
        overflowX: "hidden",
        background: "#fdf6ed",
      }}
    >
      <Header />

      <Content style={{ padding: "24px", backgroundColor: "#fdf6ed" }}>
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col span={16}>
            <Title level={2}>Lender Dashboard</Title>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <Button type="default" size="large" onClick={() => navigate("/home")}>
              Back to Home
            </Button>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <Button type="primary" icon={<PlusOutlined />} size="large">
              List a New Item
            </Button>
          </Col>
        </Row>

        <Row gutter={[0, 0]} style={{ margin: 0, width: "100%" }}>
          <Col span={6} style={{ padding: 0 }}>
            <Card>
              <Row>
                <Col span={16}>
                  <Text type="secondary">Active Listings</Text>
                  <Title level={3}>{activeListingsCount}</Title>
                </Col>
                <Col span={8} style={{ textAlign: "right" }}>
                  <Button shape="circle" icon={<AppstoreOutlined />} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={[0, 0]} style={{ margin: 0, width: "100%" }}>
          <Col span={24} style={{ padding: 0 }}>
            <Button type="link" style={{ borderBottom: "2px solid #a1bfa7" }}>
              Active Listings
            </Button>
          </Col>
        </Row>

        {loading ? (
          <Row justify="center" style={{ padding: "50px 0" }}>
            <Spin size="large" />
          </Row>
        ) : products.length === 0 ? (
          <Row justify="center" style={{ padding: "50px 0" }}>
            <Col>
              <Text type="secondary" style={{ fontSize: "16px" }}>
                No products found. Start by listing your first item!
              </Text>
            </Col>
          </Row>
        ) : (
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col span={8} key={product.productId}>
                <Card
                  hoverable
                  onClick={() => handleProductClick(product.productId)}
                  style={{ cursor: "pointer" }}
                  cover={
                    <div
                      style={{
                        backgroundImage: `url(${
                          product.imageUrl || "/img/ShareDoo.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 192,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: getStatusColor(
                            product.availabilityStatus
                          ),
                          borderRadius: "12px",
                          padding: "0 8px",
                        }}
                      >
                        <Text style={{ color: "#fff" }}>
                          {getStatusText(product.availabilityStatus)}
                        </Text>
                      </div>
                    </div>
                  }
                >
                  <Title level={4}>{product.name}</Title>
                  <Text type="secondary">
                    Listed on {formatDate(product.createdAt)}
                  </Text>
                  <div style={{ marginTop: 16 }}>
                    <Text strong style={{ color: "#a1bfa7" }}>
                      {formatPrice(product.pricePerDay)}
                    </Text>
                    <Button
                      shape="circle"
                      icon={<Image preview={false} />}
                      style={{ float: "right" }}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Content>

      <Footer />
    </Layout>
  );
};

export default ListItem;
