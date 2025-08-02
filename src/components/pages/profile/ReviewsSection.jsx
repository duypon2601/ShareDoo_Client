import { Card, Col, Row, Tabs, Tag, Spin, message, Popconfirm } from "antd";
import React, { useState, useEffect } from "react";
import api from "../../config/axios";

const { TabPane } = Tabs;

export const ReviewsSection = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/products/my-products");
      if (response.status === 200) {
        setMyProducts(response.data);
        console.log("My products:", response.data);
      } else {
        message.error("Không thể lấy danh sách sản phẩm!");
      }
    } catch (error) {
      console.error("Error fetching my products:", error);
      message.error("Lỗi khi lấy danh sách sản phẩm!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await api.delete(`/api/products/${productId}`);
      message.success("Đã xóa sản phẩm!");
      fetchMyProducts(); // Refresh lại danh sách
    } catch (error) {
      console.error("Delete failed:", error);
      message.error("Xóa sản phẩm thất bại!");
    }
  };

  const formatPrice = (price) => {
    return price?.toLocaleString("vi-VN") + " ₫/ngày";
  };

  const getStatusColor = (status) => {
    return status === "AVAILABLE" ? "green" : "red";
  };

  const getStatusText = (status) => {
    return status === "AVAILABLE" ? "Available" : "Rented";
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Card
        style={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0px 10px 15px #0000001a, 0px 4px 6px #0000001a",
        }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="My Listings" key="1">
            {loading ? (
              <div style={{ textAlign: "center", padding: "40px" }}>
                <Spin tip="Đang tải sản phẩm..." />
              </div>
            ) : myProducts.length > 0 ? (
              <Row gutter={16}>
                {myProducts.map((product) => (
                  <Col span={8} key={product.productId}>
                    <Card
                      cover={
                        <img
                          alt={product.name}
                          src={
                            product.imageUrl ||
                            "https://via.placeholder.com/300"
                          }
                          style={{ height: 200, objectFit: "cover" }}
                        />
                      }
                      style={{
                        borderRadius: "16px",
                        boxShadow:
                          "0px 4px 6px #0000001a, 0px 2px 4px #0000001a",
                        marginBottom: 16,
                      }}
                      actions={[
                        <a
                          onClick={() => (window.location.href = "/")}
                          style={{ color: "#1890ff" }}
                        >
                          Edit
                        </a>,
                        <Popconfirm
                          title="Bạn có chắc muốn xóa sản phẩm này không?"
                          onConfirm={() => handleDelete(product.productId)}
                          okText="Có"
                          cancelText="Không"
                        >
                          <a style={{ color: "#ff4d4f" }}>Delete</a>
                        </Popconfirm>,
                      ]}
                    >
                      <Card.Meta
                        title={product.name}
                        description={
                          <>
                            <div>{formatPrice(product.pricePerDay)}</div>
                            <Tag
                              color={getStatusColor(product.availabilityStatus)}
                            >
                              {getStatusText(product.availabilityStatus)}
                            </Tag>
                            <div
                              style={{
                                marginTop: 8,
                                fontSize: 12,
                                color: "#666",
                              }}
                            >
                              {product.location}
                            </div>
                          </>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div
                style={{ textAlign: "center", padding: "40px", color: "#666" }}
              >
                Bạn chưa có sản phẩm nào
              </div>
            )}
          </TabPane>
          <TabPane tab="Rental History" key="2">
            Rental History Content
          </TabPane>
          <TabPane tab="Reviews" key="3">
            Reviews Content
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default ReviewsSection;
