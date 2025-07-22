import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Input,
  Row,
  Typography,
  Upload,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const Report = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleReasonChange = (value) => {
    setSelectedReason(value);
    if (value !== "other") {
      setOtherReason(""); // Reset if not other
    }
  };

  useEffect(() => {
    document.body.style.background = "#ffffff";
    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Title level={4} style={{ textAlign: "center", marginBottom: 24 }}>
          Report an Issue
        </Title>

        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Text strong>Select Issue Type</Text>
            <Select
              placeholder="Choose a reason"
              style={{ width: "100%" }}
              value={selectedReason || undefined}
              onChange={handleReasonChange}
            >
              <Option value="broken">Broken item</Option>
              <Option value="late">Late return</Option>
              <Option value="missing">Missing item</Option>
              <Option value="damaged">Damaged packaging</Option>
              <Option value="other">Other</Option>
            </Select>
          </Col>

          {selectedReason === "other" && (
            <Col span={24}>
              <Text strong>Please specify other reason</Text>
              <Input
                placeholder="Enter your reason..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            </Col>
          )}

          <Col span={24}>
            <Text strong>Description</Text>
            <TextArea
              placeholder="Describe the issue in detail (Optional)"
              rows={4}
            />
          </Col>

          <Col span={24}>
            <Text strong>Attachments (Optional)</Text>
            <Upload.Dragger name="files" multiple style={{ padding: "20px 0" }}>
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">
                Drop files here or click to upload
              </p>
              <p className="ant-upload-hint">
                Supported formats: PNG, JPG, JPEG
              </p>
            </Upload.Dragger>
          </Col>

          <Col span={24}>
            <Button
              block
              style={{
                backgroundColor: "#E26C5A",
                color: "#fff",
                border: "none",
                height: 40,
              }}
            >
              Submit Report
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Report;
