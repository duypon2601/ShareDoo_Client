import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Col,
  Image,
  Progress,
  Row,
  Typography,
  Upload,
  message,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { setImageUrls } from "../../redux/productCreateSlice";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const SelectItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemName, category, description, imageUrls } = useSelector(
    (state) => state.productCreate
  );

  const [localImageUrls, setLocalImageUrls] = useState(imageUrls || []);

  useEffect(() => {
    console.log("✅ Step 1 data from Redux:", {
      itemName,
      category,
      description,
      imageUrls,
    });
  }, []);

  const handleUpload = async ({ file, onSuccess, onError }) => {
    if (!file.type.startsWith("image/")) {
      message.error("Chỉ chấp nhận ảnh JPG/PNG.");
      onError("Invalid file type");
      return;
    }

    if (localImageUrls.length >= 5) {
      message.warning("Tối đa 5 ảnh.");
      return;
    }

    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      const updatedUrls = [...localImageUrls, downloadURL];
      setLocalImageUrls(updatedUrls);
      dispatch(setImageUrls(updatedUrls));
      onSuccess("OK");
    } catch (error) {
      console.error("❌ Upload error:", error);
      onError(error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
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
                name="file"
                customRequest={handleUpload}
                multiple
                showUploadList={false}
                accept="image/*"
                style={{ border: "2px dashed #e3d5be", borderRadius: 8 }}
              >
                <p className="ant-upload-drag-icon">
                  <UploadOutlined style={{ fontSize: 40, color: "#e3d5be" }} />
                </p>
                <p className="ant-upload-text">Kéo & thả ảnh vào đây</p>
                <p className="ant-upload-hint">hoặc</p>
                <Button style={{ backgroundColor: "#e3d5be" }}>Chọn ảnh</Button>
                <Paragraph style={{ marginTop: 16 }}>
                  Tối đa 5 ảnh. Hỗ trợ JPG, PNG.
                </Paragraph>
              </Upload.Dragger>

              <Title level={4} style={{ marginTop: 32 }}>
                Uploaded Photos
              </Title>
              <Row gutter={16}>
                {localImageUrls.map((url, index) => (
                  <Col key={index}>
                    <Image
                      width={128}
                      height={128}
                      src={url}
                      style={{ borderRadius: 8, objectFit: "cover" }}
                    />
                  </Col>
                ))}
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
                  disabled={localImageUrls.length === 0}
                >
                  Next
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SelectItem;
