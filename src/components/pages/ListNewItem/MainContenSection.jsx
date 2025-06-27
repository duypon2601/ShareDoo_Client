import React from "react";
import {
  Layout,
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Progress,
  Row,
  Typography,
} from "antd";
import {
  RightOutlined,
  CloseOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const MainContentSection = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", overflowX: "hidden" }}>
      {/* ✅ HEADER */}
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: "72px",
          overflowX: "hidden",
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
      <Content style={{ padding: "24px 20px", flex: 1 }}>
        <Row>
          <Col span={24}>
            <Title level={2} style={{ marginBottom: 0 }}>
              List Your Item
            </Title>
            <Text type="secondary" style={{ float: "right" }}>
              Step 1 of 4
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Progress percent={25} showInfo={false} />
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 28 }}>
          <Col
            xs={24}
            sm={20}
            md={16}
            lg={12}
            style={{
              width: "100%",
              overflowX: "hidden",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 12,
                boxShadow:
                  "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Title level={4}>Basic Information</Title>
              <Form layout="vertical">
                <Form.Item
                  label="Item Name"
                  required
                  tooltip="This is a required field"
                >
                  <Input placeholder="Enter item name" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  label="Category"
                  required
                  tooltip="This is a required field"
                >
                  <Input
                    placeholder="Select a category"
                    suffix={<RightOutlined />}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item
                  label="Description"
                  required
                  tooltip="This is a required field"
                >
                  <Input.TextArea
                    placeholder="Describe your item (max 500 characters)"
                    maxLength={500}
                    showCount
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Row justify="space-between" align="middle">
                  <Col>
                    <Button type="text">Cancel</Button>
                  </Col>
                  <Col>
                    <Button type="primary" icon={<RightOutlined />}>
                      Next
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>

      {/* ✅ FOOTER */}
      <Footer
  style={{
    backgroundColor: "#1f2937",
    color: "#9ca3af",
    padding: "40px 0",
    overflowX: "hidden",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
    <Row gutter={[32, 24]} justify="space-between">
      {/* Các Col không đổi */}
      {/* Cột 1 */}
      <Col xs={24} sm={12} md={6}>
        <Title level={4} style={{ color: "#fff" }}>
          About
        </Title>
        <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>How It Works</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
      </Col>

      {/* Cột 2 */}
      <Col xs={24} sm={12} md={6}>
        <Title level={4} style={{ color: "#fff" }}>
          Support
        </Title>
        <Text style={{ display: "block", color: "#9ca3af" }}>Help Center</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>Safety Center</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>Contact Us</Text>
      </Col>

      {/* Cột 3 */}
      <Col xs={24} sm={12} md={6}>
        <Title level={4} style={{ color: "#fff" }}>
          Legal
        </Title>
        <Text style={{ display: "block", color: "#9ca3af" }}>Terms of Service</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>Privacy Policy</Text>
        <Text style={{ display: "block", color: "#9ca3af" }}>Cookie Policy</Text>
      </Col>

      {/* Cột 4 */}
      <Col xs={24} sm={12} md={6}>
        <Title level={4} style={{ color: "#fff" }}>
          Follow Us
        </Title>
        <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
          <FacebookOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
          <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
          <InstagramOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
        </div>
      </Col>
    </Row>

    <Row
      justify="center"
      style={{
        marginTop: "32px",
        borderTop: "1px solid #374151",
        paddingTop: "16px",
        textAlign: "center",
      }}
    >
      <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
        © 2025 ShareDoo. All rights reserved.
      </Text>
    </Row>
  </div>
</Footer>

    </Layout>
  );
};

export default MainContentSection;
