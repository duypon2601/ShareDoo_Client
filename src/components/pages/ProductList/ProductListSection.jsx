import {
HeartOutlined,
StarOutlined
} from "@ant-design/icons";
import {
Button,
Card,
Checkbox,
Col,
Pagination,
Row,
Select,
Slider,
Spin, // Thêm Spin
message, // Thêm message
} from "antd";
import React, { useState, useEffect } from "react"; // Thêm useState, useEffect
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import api from "../../config/axios"; // Thêm api

const { Option } = Select;

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
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Row gutter={16} style={{ marginTop: 32 }}>
      <Col span={6}>
        <Card>
          <div style={{ marginBottom: 24 }}>
            <h3>Price Range</h3>
            <Slider range defaultValue={[0, 100]} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>$0</span>
              <span>$100/day</span>
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
            <Select defaultValue="All Locations" style={{ width: "100%" }}>
              <Option value="All Locations">All Locations</Option>
            </Select>
          </div>
          <div style={{ marginBottom: 24 }}>
            <h3>Condition</h3>
            <Checkbox.Group>
              <Row>
                <Col span={24}><Checkbox value="New">New</Checkbox></Col>
                <Col span={24}><Checkbox value="Used">Used</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div>
            <h3>Owner Rating</h3>
            <Checkbox.Group>
              <Row>
                <Col span={24}><Checkbox value="4+ Stars">4+ Stars</Checkbox></Col>
                <Col span={24}><Checkbox value="3+ Stars">3+ Stars</Checkbox></Col>
              </Row>
            </Checkbox.Group>
          </div>
        </Card>
      </Col>

      <Col span={18}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
          <Col>Showing {products.length} results</Col>
          <Col>
            <span>Sort by: </span>
            <Select defaultValue="Most Popular" style={{ width: 120 }}>
              <Option value="Most Popular">Most Popular</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col span={8} key={product.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={product.name}
                    src={product.imageUrl || "https://via.placeholder.com/300"}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                }
                onClick={() => handleProductClick(product.id)}
              >
                <Card.Meta
                  title={product.name}
                  description={
                    <>
                      <div style={{ fontSize: 20, fontWeight: "bold", color: '#a1bfa7' }}>
                        ${product.pricePerDay}/day
                      </div>
                      <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                        <StarOutlined style={{ color: "#fadb14" }} />
                        <span style={{ marginLeft: 8 }}>
                          {product.rating || "No reviews"}
                        </span>
                      </div>
                      <Button type="primary" style={{ marginTop: 16, width: '100%' }}>
                        View Details
                      </Button>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row justify="center" style={{ marginTop: 32 }}>
          <Pagination defaultCurrent={1} total={products.length} pageSize={9} />
        </Row>
      </Col>
    </Row>
  );
};