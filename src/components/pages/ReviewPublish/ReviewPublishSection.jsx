    import {
    EditOutlined,
    LeftOutlined,
    RightOutlined,
    CloseOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    } from "@ant-design/icons";
    import {
    Button,
    Col,
    Layout,
    Row,
    Typography,
    Image,
    Avatar,
    } from "antd";
    import React from "react";

    const { Header, Content, Footer } = Layout;
    const { Title, Text, Paragraph } = Typography;

    const ReviewPublishSection = () => {
    return (
        <Layout style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        {/* ✅ HEADER */}
        <Header
            style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e0e0e0",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            height: "72px",
            }}
        >
            <Row align="middle" gutter={12} style={{ flex: 1 }}>
            <Col>
                <Avatar
                src="/img/ShareDoo.png"
                size={56}
                shape="circle"
                style={{ backgroundColor: "#fff" }}
                />
            </Col>
            <Col>
                <Text strong style={{ fontSize: "22px", color: "#1f1f1f" }}>
                ShareDoo
                </Text>
            </Col>
            </Row>
            <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Header>

        {/* ✅ CONTENT */}
        <Content style={{ padding: "32px 24px", flex: 1 }}>
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
                    >
                        Edit
                    </Button>
                    </Col>
                    <Col span={12}>
                    <Text type="secondary">Item Name</Text>
                    <Paragraph strong>Vintage Leather Armchair</Paragraph>
                    </Col>
                    <Col span={12}>
                    <Text type="secondary">Category</Text>
                    <Paragraph strong>Furniture &gt; Chairs</Paragraph>
                    </Col>
                    <Col span={24}>
                    <Text type="secondary">Description</Text>
                    <Paragraph strong>
                        Beautiful vintage leather armchair in excellent condition.
                        Perfect for any living room or study.
                    </Paragraph>
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
                    >
                        Edit
                    </Button>
                    </Col>
                    <Col span={24}>
                        <div
                    style={{
                        background: "#f0f0f0",
                        borderRadius: "8px",
                        overflow: "hidden",
                        position: "relative",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <img
                        src="/img/ShareDoo.png"
                        alt="Item"
                        style={{
                        height: "100%",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        display: "block",
                        }}
                    />
                    </div>


                    </Col>
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
                    >
                        Edit
                    </Button>
                    </Col>
                    <Col span={12}>
                    <Text type="secondary">Price</Text>
                    <Paragraph strong>$599.00</Paragraph>
                    </Col>
                    <Col span={12}>
                    <Text type="secondary">Pickup Location</Text>
                    <Paragraph strong>123 Main St, Brooklyn, NY 11201</Paragraph>
                    </Col>
                </Row>
                </div>

                {/* Action Buttons */}
                <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                <Col>
                    <Button icon={<LeftOutlined />} style={{ borderRadius: "8px" }}>
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
                    >
                    Publish Now
                    </Button>
                </Col>
                </Row>
            </Col>
            </Row>
        </Content>

        {/* ✅ FOOTER */}
        <Footer
                  style={{
                    backgroundColor: "#1f2937",
                    color: "#9ca3af",
                    padding: "40px 0",
                  }}
                >
                  <Row justify="center" gutter={[32, 16]}>
                    <Col xs={24} sm={12} md={6}>
                      <Title level={4} style={{ color: "#fff" }}>
                        About
                      </Title>
                      <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        How It Works
                      </Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <Title level={4} style={{ color: "#fff" }}>
                        Support
                      </Title>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Help Center
                      </Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Safety Center
                      </Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Contact Us
                      </Text>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <Title level={4} style={{ color: "#fff" }}>
                        Legal
                      </Title>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Terms of Service
                      </Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Privacy Policy
                      </Text>
                      <Text style={{ display: "block", color: "#9ca3af" }}>
                        Cookie Policy
                      </Text>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <Title level={4} style={{ color: "#fff" }}>
                        Follow Us
                      </Title>
                      <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
                        <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                        <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
                        <InstagramOutlined
                          style={{ fontSize: "20px", color: "#9ca3af" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row
                    justify="center"
                    style={{
                      marginTop: "32px",
                      borderTop: "1px solid #374151",
                      paddingTop: "16px",
                    }}
                  >
                    <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
                      © 2025 ShareDoo. All rights reserved.
                    </Text>
                  </Row>
                </Footer>
              </Layout>
            );
          };

    // Dot indicator style


    export default ReviewPublishSection;
