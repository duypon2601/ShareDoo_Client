import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const SelectItem = () => {
  const navigate = useNavigate();
  const { itemName, category, description } = useSelector(
    (state) => state.productCreate
  );

  useEffect(() => {
    console.log("✅ Step 1 Data from Redux:", {
      itemName,
      category,
      description,
    });
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
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
                  <UploadOutlined style={{ fontSize: 40, color: "#e3d5be" }} />
                </p>
                <p className="ant-upload-text">Drag & Drop your photos here</p>
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
              </Row>

              <Row justify="space-between" style={{ marginTop: 32 }}>
                <Button
                  icon={<LeftOutlined />}
                  onClick={() => navigate("/ListNewItem")}
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  icon={<RightOutlined />}
                  onClick={() => navigate("/PricingAvailability")}
                >
                  Next
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>

      {/* ✅ FOOTER */}
    </Layout>
  );
};

export default SelectItem;
