import { Button, Col, Image, Rate, Row, Tag, Typography, Spin, message } from "antd";
import React, { useState, useEffect } from "react";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

export const ProductDetailsSection = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/api/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
      message.error('Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 0' }}>
        <Text type="secondary">Product not found</Text>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div style={{ borderRadius: "8px", overflow: "hidden" }}>
            <Image
              src={product.imageUrl || "https://c.animaapp.com/raHFUeD0/img/img.png"}
              alt={product.name}
              preview={false}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
            {[1, 2, 3, 4].map((_, index) => (
              <Col key={index} span={6}>
                <div style={{ borderRadius: "8px", overflow: "hidden" }}>
                  <Image
                    src="https://c.animaapp.com/raHFUeD0/img/dall-e-2025-02-24-22-50-40---a-minimalistic-and-modern-logo-desi-4@2x.png"
                    alt="Thumbnail"
                    preview={false}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12}>
          <Title level={2}>{product.name}</Title>
          <Paragraph>
            {product.description}
          </Paragraph>
          <Title level={3} style={{ color: "#a1bfa7" }}>
            ${product.pricePerDay}/day
          </Title>
          <Tag color={product.availabilityStatus === 'AVAILABLE' ? 'green' : 'red'}>
            {product.availabilityStatus === 'AVAILABLE' ? 'In Stock' : 'Not Available'}
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
                  src="https://c.animaapp.com/raHFUeD0/img/img-8@2x.png"
                  alt="Owner"
                  preview={false}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    marginRight: "16px",
                  }}
                />
              </Col>
              <Col>
                <Title level={5} style={{ margin: 0 }}>
                  Michael Anderson
                </Title>
                <Rate
                  disabled
                  defaultValue={4.5}
                  style={{ fontSize: "14px" }}
                />
                <Text>(4.5)</Text>
              </Col>
              <Col>
                <Button type="link">View Profile</Button>
              </Col>
            </Row>
          </div>
          <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
            <Col span={12}>
              <Button type="primary" block onClick={() => navigate('/booking', { state: { product } })}>
                Rent Now
              </Button>
            </Col>
            <Col span={12}>
              <Button block>Message Owner</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>Product Details</Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Title level={5}>Description</Title>
            <Paragraph>
              Professional-grade DSLR camera kit perfect for photography
              enthusiasts and professionals. This comprehensive kit includes
              everything you need for high-quality photography.
            </Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Specifications</Title>
            <Paragraph>• Camera Body: Full Frame Sensor</Paragraph>
            <Paragraph>• Lenses: 24-70mm, 70-200mm, 50mm</Paragraph>
            <Paragraph>• Battery Life: Up to 1500 shots</Paragraph>
            <Paragraph>• Weight: 1.5kg (body only)</Paragraph>
          </Col>
          <Col span={8}>
            <Title level={5}>Rental Terms</Title>
            <Paragraph>• Minimum rental period: 1 day</Paragraph>
            <Paragraph>• Security deposit required</Paragraph>
            <Paragraph>• Insurance included</Paragraph>
            <Paragraph>• Pick-up and return in person</Paragraph>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>User Reviews</Title>
        <div
          style={{ borderBottom: "1px solid #e8e8e8", paddingBottom: "16px" }}
        >
          <Row align="middle">
            <Col>
              <Image
                src="https://c.animaapp.com/raHFUeD0/img/img-9@2x.png"
                alt="Reviewer"
                preview={false}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  marginRight: "16px",
                }}
              />
            </Col>
            <Col>
              <Title level={5} style={{ margin: 0 }}>
                Sarah Johnson
              </Title>
              <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
            </Col>
            <Col>
              <Text type="secondary">2 weeks ago</Text>
            </Col>
          </Row>
          <Paragraph style={{ marginTop: "8px" }}>
            Excellent equipment! Everything was in perfect condition and Michael
            was very helpful in explaining the setup.
          </Paragraph>
        </div>
        <div
          style={{
            borderBottom: "1px solid #e8e8e8",
            paddingBottom: "16px",
            marginTop: "16px",
          }}
        >
          <Row align="middle">
            <Col>
              <Image
                src="https://c.animaapp.com/raHFUeD0/img/img-10@2x.png"
                alt="Reviewer"
                preview={false}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  marginRight: "16px",
                }}
              />
            </Col>
            <Col>
              <Title level={5} style={{ margin: 0 }}>
                David Chen
              </Title>
              <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
            </Col>
            <Col>
              <Text type="secondary">1 month ago</Text>
            </Col>
          </Row>
          <Paragraph style={{ marginTop: "8px" }}>
            Great kit for professional shoots. The lenses were amazing and
            everything was well-maintained.
          </Paragraph>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <Title level={3}>Related Products</Title>
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4].map((_, index) => (
            <Col key={index} span={6}>
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Image
                  src="https://c.animaapp.com/raHFUeD0/img/img-14@2x.png"
                  alt="Related Product"
                  preview={false}
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "16px" }}>
                  <Title level={5} style={{ margin: 0 }}>
                    Demo Product
                  </Title>
                  <Text style={{ color: "#a1bfa7" }}>$35/day</Text>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
