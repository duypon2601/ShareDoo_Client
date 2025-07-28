import React from "react";
import { EditOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography, Image, message } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../config/axios"; //

const { Title, Text, Paragraph } = Typography;

const ReviewPublishSection = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.productCreate);

  const handlePublish = async () => {
    try {
      const payload = {
        name: product.itemName,
        description: product.description,
        imageUrl:
          Array.isArray(product.images) && product.images.length > 0
            ? product.images[0]
            : "",
        location: product.location.address,
        category: Array.isArray(product.category)
          ? product.category[0] || "OTHER"
          : product.category || "OTHER",
        pricePerDay: parseFloat(product.rentalPrice),
        availabilityStatus: "AVAILABLE",
      };
      console.log("Publishing product with payload:", payload);

      await api.post("/api/products", payload);
      message.success("Product published successfully!");
      navigate("/succes");
    } catch (error) {
      console.error("Publish error:", error);
      message.error("Failed to publish product!");
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          width: "99vw",
          background: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            boxSizing: "border-box",
          }}
        >
          <Row justify="center">
            <Col xs={24} sm={22} md={18} lg={14}>
              <Title level={3}>Review & Publish</Title>

              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0px 10px 15px #0000001a, 0px 4px 6px #0000001a",
                  padding: "24px",
                }}
              >
                {/* Item Details */}
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Title level={4} style={{ fontWeight: "bold" }}>
                      Item Details
                    </Title>
                    <Button
                      type="link"
                      icon={<EditOutlined />}
                      style={{ float: "right" }}
                      onClick={() => navigate("/ListNewItem")} // Navigate to edit page
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Item Name</Text>
                    <Paragraph strong>{product.itemName}</Paragraph>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Category</Text>
                    <Paragraph strong>
                      {Array.isArray(product.category)
                        ? product.category.join(", ")
                        : product.category}
                    </Paragraph>
                  </Col>
                  <Col span={24}>
                    <Text type="secondary">Description</Text>
                    <Paragraph strong>{product.description}</Paragraph>
                  </Col>
                </Row>

                {/* Photos */}
                <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                  <Col span={24}>
                    <Title level={4} style={{ fontWeight: "bold" }}>
                      Photos
                    </Title>
                    <Button
                      type="link"
                      icon={<EditOutlined />}
                      style={{ float: "right" }}
                      onClick={() => navigate("/SelectNewItemPage")}
                    >
                      Edit
                    </Button>
                  </Col>
                  {product.images?.length > 0 ? (
                    product.images.map((img, idx) => (
                      <Col key={idx} span={8}>
                        <Image
                          src={img}
                          alt={`Uploaded ${idx}`}
                          style={{
                            borderRadius: "8px",
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                    ))
                  ) : (
                    <Text type="secondary">No images uploaded</Text>
                  )}
                </Row>

                {/* Pricing & Location */}
                <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                  <Col span={24}>
                    <Title level={4} style={{ fontWeight: "bold" }}>
                      Pricing & Location
                    </Title>
                    <Button
                      type="link"
                      icon={<EditOutlined />}
                      style={{ float: "right" }}
                      onClick={() => navigate("/PricingAvailability")}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Price</Text>
                    <Paragraph strong>
                      {Number(product.rentalPrice).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Paragraph>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Pickup Location</Text>
                    <Paragraph strong>
                      {product.location?.address || "No location set"}
                    </Paragraph>
                  </Col>
                </Row>
              </div>

              {/* Action Buttons */}
              <Row justify="space-between" style={{ marginTop: "24px" }}>
                <Col>
                  <Button
                    icon={<LeftOutlined />}
                    style={{ borderRadius: "8px" }}
                    onClick={() => navigate("/PricingAvailability")}
                  >
                    Back to Edit
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    icon={<RightOutlined />}
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#10b981",
                      borderColor: "#10b981",
                    }}
                    onClick={handlePublish}
                  >
                    Publish Now
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPublishSection;
