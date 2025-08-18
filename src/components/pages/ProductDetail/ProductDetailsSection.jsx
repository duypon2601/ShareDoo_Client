import {
  Button,
  Col,
  Image,
  Rate,
  Row,
  Tag,
  Typography,
  Spin,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

// Hàm định dạng VND
function formatVND(amount) {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("vi-VN") + "₫";
}

export const ProductDetailsSection = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [user, setUser] = useState(null); // State for user data
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
      fetchRelatedProducts();
    } else {
      setLoading(false);
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    if (!productId) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await api.get(`/api/products/${productId}`);
      setProduct(response.data);
      console.log("Product details fetched:", response.data);
      // Fetch user data after getting product details
      if (response.data.userId) {
        fetchUserDetails(response.data.userId);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      message.error("Không thể tải chi tiết sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await api.get(`/api/users/${userId}`);
      setUser(response.data.data); // Set user data from response
      console.log("User details fetched:", response.data.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      message.error("Không thể tải thông tin người dùng");
      setUser(null);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      console.log("Fetching related products...");
      const response = await api.get("/api/products");
      const products = Array.isArray(response.data.content)
        ? response.data.content
            .filter((p) => p.productId !== productId)
            .slice(0, 6)
        : [];
      setRelatedProducts(products);
    } catch (error) {
      console.error("Error fetching related products:", error);
      message.error("Không thể tải sản phẩm liên quan");
      setRelatedProducts([]);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Text type="secondary">Không tìm thấy sản phẩm</Text>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div>
            <div
              style={{
                height: "98%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={product.imageUrl || "/images/default-product-image.png"}
                alt={product.name}
                preview={true}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Title level={2}>{product.name}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Title level={3} style={{ color: "#a1bfa7" }}>
            {formatVND(product.pricePerDay)}/ngày
          </Title>
          <Tag
            color={product.availabilityStatus === "AVAILABLE" ? "green" : "red"}
          >
            {product.availabilityStatus === "AVAILABLE"
              ? "Còn hàng"
              : "Hết hàng"}
          </Tag>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "16px",
              marginTop: "16px",
            }}
          >
            <Row align="middle">
              <Col>
                <Image
                  src={user?.imageUrl || "/img/ShareDoo.png"} // Use user.imageUrl or fallback
                  alt="Owner"
                  preview={false}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "60%",
                    marginRight: "16px",
                  }}
                />
              </Col>
              <Col>
                <Title level={5} style={{ margin: 0 }}>
                  {user?.name || "Michael Anderson"}{" "}
                  {/* Use user.name or fallback */}
                </Title>
                <Rate
                  disabled
                  defaultValue={4.5}
                  style={{ fontSize: "14px" }}
                />
                <Text>(4.5)</Text>
              </Col>
            </Row>
          </div>
          <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
            <Col span={24}>
              <Button
                type="primary"
                block
                onClick={() => navigate("/booking", { state: { product } })}
              >
                Thuê ngay
              </Button>
            </Col>
            {/* <Col span={12}>
              <Button block>Nhắn tin cho chủ sở hữu</Button>
            </Col> */}
          </Row>
        </Col>
      </Row>
      {/* Rest of your component remains unchanged */}
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>Chi tiết sản phẩm</Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Title level={5}>Mô tả</Title>
            <Paragraph>
              {product.description || "Không có mô tả chi tiết."}
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Thông số kỹ thuật</Title>
            <Paragraph>
              • Danh mục: {product.category || "Không xác định"}
            </Paragraph>
            <Paragraph>
              • Địa điểm: {product.location || "Không xác định"}
            </Paragraph>
            <Paragraph>
              • Ngày tạo:{" "}
              {new Date(product.createdAt).toLocaleDateString("vi-VN")}
            </Paragraph>
            <Paragraph>
              • Cập nhật:{" "}
              {new Date(product.updatedAt).toLocaleDateString("vi-VN")}
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Điều khoản thuê</Title>
            <Paragraph>• Thời gian thuê tối thiểu: 1 ngày</Paragraph>
            <Paragraph>• Yêu cầu đặt cọc bảo đảm</Paragraph>
            <Paragraph>• Bao gồm bảo hiểm</Paragraph>
            <Paragraph>
              • Nhận và trả trực tiếp tại{" "}
              {product.location || "địa điểm không xác định"}
            </Paragraph>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>Đánh giá người dùng</Title>
        {/* User reviews section remains unchanged */}
      </div>
      <div style={{ marginTop: "32px" }}>
        <Title
          level={3}
          style={{ fontWeight: 600, color: "#1a1a1a", marginBottom: "24px" }}
        >
          Sản phẩm liên quan
        </Title>
        <Row gutter={[24, 24]} style={{ padding: "0 16px" }}>
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <Col key={relatedProduct.productId} xs={12} sm={8} md={6} lg={4}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/product/${relatedProduct.productId}`)
                  }
                >
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <Image
                      src={
                        relatedProduct.imageUrl ||
                        "https://c.animaapp.com/raHFUeD0/img/img-14@2x.png"
                      }
                      alt={relatedProduct.name}
                      preview={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#333",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {relatedProduct.name || "Sản phẩm không tên"}
                    </Title>
                    <Text
                      style={{
                        color: "#a1bfa7",
                        fontSize: "14px",
                        fontWeight: 500,
                        display: "block",
                        marginTop: "8px",
                      }}
                    >
                      {formatVND(relatedProduct.pricePerDay) ||
                        "Giá không xác định"}
                      /ngày
                    </Text>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <Col span={24} style={{ textAlign: "center", padding: "40px 0" }}>
              <Text
                type="secondary"
                style={{ fontSize: "16px", color: "#666" }}
              >
                Không có sản phẩm liên quan
              </Text>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};
