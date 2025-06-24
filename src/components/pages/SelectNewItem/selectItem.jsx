import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LeftOutlined,
  RightOutlined,
  TwitterOutlined,
  UploadOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Avatar,
  Button,
  Col,
  Image,
  Progress,
  Row,
  Typography,
  Upload,
} from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const SelectItem = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
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
              size={48}
              shape="circle"
              style={{ backgroundColor: "#fff" }}
            />
          </Col>
          <Col>
            <Text strong style={{ fontSize: "20px", color: "#1f1f1f" }}>
              ShareDoo
            </Text>
          </Col>
        </Row>
        {/* Bạn có thể thay đổi hoặc bỏ icon đóng bên phải nếu muốn */}
        < CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Header>

      {/* ✅ CONTENT */}
      <Content style={{ padding: "24px 20px", flex: 1 }}>
        <Row justify="center" style={{ marginTop: 32 }}>
          <Col span={12}>
            <Row justify="space-between">
              <Text>Step 2 of 4</Text>
              <Text strong>Upload Photos</Text>
            </Row>
            <Progress percent={50} showInfo={false} />
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: 32 }}>
          <Col span={12}>
            <div
              style={{
                background: "#fff",
                padding: 24,
                borderRadius: 8,
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title level={3}>Upload Photos</Title>
              <Upload.Dragger
                name="files"
                multiple={true}
                style={{ border: "2px dashed #e3d5be", borderRadius: 8 }}
              >
                <p className="ant-upload-drag-icon">
                  <img
                    className="relative w-[45px] h-9"
                    alt="Frame"
                    src="https://c.animaapp.com/QyOwHGYf/img/frame.svg"
                  />
                </p>
                <p className="ant-upload-text">
                  Drag & Drop your photos here
                </p>
                <p className="ant-upload-hint">or</p>
                <Button style={{ backgroundColor: "#e3d5be" }}>
                  Browse Files
                </Button>
                <Paragraph style={{ marginTop: 16 }}>
                  Maximum 5 photos. Supported formats: JPG, PNG
                </Paragraph>
              </Upload.Dragger>

              <Title level={4} style={{ marginTop: 32 }}>
                Uploaded Photos
              </Title>
              <Row gutter={16}>
                <Col>
                  <Image
                    width={128}
                    height={128}
                    src="https://c.animaapp.com/QyOwHGYf/img/img@2x.png"
                    style={{ borderRadius: 8 }}
                  />
                </Col>
                <Col>
                  <div
                    style={{
                      width: 128,
                      height: 128,
                      border: "2px dashed #e3d5be",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <UploadOutlined style={{ fontSize: 24 }} />
                  </div>
                </Col>
              </Row>

              <Row justify="space-between" style={{ marginTop: 32 }}>
                <Button icon={<LeftOutlined />}>Back</Button>
                <Button type="primary" icon={<RightOutlined />}>
                  Next
                </Button>
              </Row>
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
export default SelectItem;
