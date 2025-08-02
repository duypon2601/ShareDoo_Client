// src/components/pages/SearchItems/SearchResultsSection.jsx
import {
  EnvironmentOutlined,
  StarFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Pagination, Row, Spin, Empty } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResultsSection = ({
  products,
  total,
  currentPage,
  onPageChange,
  loading = false,
}) => {
  const navigate = useNavigate();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center", padding: "50px 0" }}>
        <Spin indicator={antIcon} />
        <div style={{ marginTop: 16, color: "#666" }}>Loading products...</div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <Row justify="center" style={{ marginTop: 48 }}>
        <Col span={20}>
          <Row justify="space-between" align="middle">
            <Col>
              <h2 style={{ fontWeight: "bold" }}>Search Results ({total})</h2>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{ backgroundColor: "#a1bfa7", borderColor: "#a1bfa7" }}
              >
                View Full Page
              </Button>
            </Col>
          </Row>

          {products.length === 0 ? (
            <Row justify="center" style={{ marginTop: 50 }}>
              <Col>
                <Empty
                  description="No products found"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </Col>
            </Row>
          ) : (
            <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
              {products.map((item) => (
                <Col key={item.productId} span={6}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: 16,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      overflow: "hidden",
                      height: 450, // Tăng chiều cao để có đủ không gian
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onClick={() => handleProductClick(item.productId)}
                    cover={
                      <div style={{ position: "relative", height: 200 }}>
                        <img
                          alt={item.name}
                          src={
                            item.imageUrl || "https://via.placeholder.com/300"
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "16px 16px 0 0",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 13,
                            right: 10,
                            backgroundColor: "#ffffffcc",
                            borderRadius: "50px",
                            padding: "4px 12px",
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          ${item.pricePerDay?.toLocaleString()} / day
                        </div>
                      </div>
                    }
                    bodyStyle={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                      justifyContent: "space-between", // Phân bố không gian đều
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <Card.Meta
                        title={
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              marginBottom: 1,
                              lineHeight: 1.4,
                              height: 44, // Cố định chiều cao title
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {item.name}
                          </div>
                        }
                        description={
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <div
                              style={{
                                marginBottom: 5,
                                fontSize: 14,
                                color: "#666",
                              }}
                            >
                              <EnvironmentOutlined style={{ marginRight: 4 }} />
                              {item.location || "Location not specified"}
                            </div>
                            <div
                              style={{
                                marginBottom: 8,
                                fontSize: 10,
                                color: "#666",
                              }}
                            >
                              <StarFilled
                                style={{ color: "#ffc107", marginRight: 4 }}
                              />
                              4.5 (12 reviews)
                            </div>
                            {item.category && (
                              <div style={{ marginBottom: 1 }}>
                                <span
                                  style={{
                                    backgroundColor: "#f0f0f0",
                                    padding: "4px 8px",
                                    borderRadius: 10,
                                    fontSize: 12,
                                    color: "#666",
                                  }}
                                >
                                  {item.category}
                                </span>
                              </div>
                            )}
                          </div>
                        }
                      />
                    </div>

                    <Button
                      type="primary"
                      block
                      style={{
                        backgroundColor: "#a1bfa7",
                        borderColor: "#a1bfa7",
                        height: 40,
                        marginTop: 9,
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // Ngăn event bubbling lên card
                        handleProductClick(item.productId);
                      }}
                    >
                      View Details
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {total > 0 && (
            <Row justify="center" style={{ marginTop: 40 }}>
              <Pagination
                current={currentPage + 1}
                pageSize={8}
                total={total}
                onChange={onPageChange}
                showSizeChanger={false}
              />
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SearchResultsSection;
