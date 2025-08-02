import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Pagination,
  Row,
  Select,
  Slider,
  Spin,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const { Option } = Select;

// Thêm hàm định dạng VND
function formatVND(amount) {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("vi-VN") + "₫";
}

export const ProductListSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/products");
      // The API returns a Page object, the products are in the 'content' property
      if (response.data && Array.isArray(response.data.content)) {
        setProducts(response.data.content);
      } else {
        // Handle cases where the structure is not as expected
        console.error("Unexpected response structure:", response.data);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to load products");
      setProducts([]); // Also clear products on error
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          overflowX: "hidden",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{ textAlign: "center", padding: "50px 0" }}>
              <Spin size="large" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div
            style={{
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              background: "#f5f5f5",
              padding: "40px 0",
              boxSizing: "border-box",
              overflowX: "hidden",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 12,
                boxShadow:
                  "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)",
                width: "100%",
                maxWidth: 1400,
                boxSizing: "border-box",
              }}
            >
              <Row gutter={16}>
                <Col span={6}>
                  <Card>
                    <div style={{ marginBottom: 24 }}>
                      <h3>Price Range</h3>
                      <Slider range defaultValue={[0, 2500000]} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>0₫</span>
                        <span>2.500.000₫/ngày</span>
                      </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <h3>Brand</h3>
                      <Checkbox.Group>
                        <Row>
                          {["Apple", "Dell", "HP", "Lenovo"].map((brand) => (
                            <Col span={24} key={brand}>
                              <Checkbox value={brand}>{brand}</Checkbox>
                            </Col>
                          ))}
                        </Row>
                      </Checkbox.Group>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <h3>Location</h3>
                      <Select
                        defaultValue="All Locations"
                        style={{ width: "100%" }}
                      >
                        <Option value="All Locations">All Locations</Option>
                        <Option value="Ho Chi Minh">Ho Chi Minh</Option>
                        <Option value="Ha Noi">Ha Noi</Option>
                        <Option value="Da Nang">Da Nang</Option>
                      </Select>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <h3>Condition</h3>
                      <Checkbox.Group>
                        <Row>
                          <Col span={24} key="new">
                            <Checkbox value="New">New</Checkbox>
                          </Col>
                          <Col span={24} key="used">
                            <Checkbox value="Used">Used</Checkbox>
                          </Col>
                        </Row>
                      </Checkbox.Group>
                    </div>
                    <div>
                      <h3>Owner Rating</h3>
                      <Checkbox.Group>
                        <Row>
                          <Col span={24} key="4+">
                            <Checkbox value="4+ Stars">4+ Stars</Checkbox>
                          </Col>
                          <Col span={24} key="3+">
                            <Checkbox value="3+ Stars">3+ Stars</Checkbox>
                          </Col>
                        </Row>
                      </Checkbox.Group>
                    </div>
                  </Card>
                </Col>

                <Col span={18}>
                  <Row
                    justify="space-between"
                    align="middle"
                    style={{ marginBottom: 16 }}
                  >
                    <Col>Hiển thị {products.length} kết quả</Col>
                    <Col>
                      <span>Sort by: </span>
                      <Select
                        defaultValue="Most Popular"
                        style={{ width: 120 }}
                      >
                        <Option value="Most Popular">Most Popular</Option>
                        <Option value="Price Low to High">
                          Price Low to High
                        </Option>
                        <Option value="Price High to Low">
                          Price High to Low
                        </Option>
                        <Option value="Newest">Newest</Option>
                      </Select>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    {Array.isArray(products) &&
                      products.map((product) => (
                        <Col span={8} key={product.productId}>
                          <Card
                            hoverable
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
                            onClick={() =>
                              handleProductClick(product.productId)
                            }
                          >
                            <Card.Meta
                              title={product.name}
                              description={
                                <>
                                  <div
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      color: "#a1bfa7",
                                    }}
                                  >
                                    {formatVND(product.pricePerDay)}/ngày
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginTop: 8,
                                    }}
                                  >
                                    <StarOutlined
                                      style={{ color: "#fadb14" }}
                                    />
                                    <span style={{ marginLeft: 8 }}>
                                      {product.rating || "Chưa có đánh giá"}
                                    </span>
                                  </div>
                                  <Button
                                    type="primary"
                                    style={{ marginTop: 16, width: "100%" }}
                                  >
                                    Xem chi tiết
                                  </Button>
                                </>
                              }
                            />
                          </Card>
                        </Col>
                      ))}
                  </Row>
                  <Row justify="center" style={{ marginTop: 32 }}>
                    <Pagination
                      defaultCurrent={1}
                      total={products.length}
                      pageSize={9}
                    />
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};
