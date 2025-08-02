import React, { useEffect, useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
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
  Popconfirm,
  Spin,
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
  const [uploadedFiles, setUploadedFiles] = useState([]); // Lưu trữ file objects
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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

    try {
      // Tạo URL tạm thời để hiển thị ảnh
      const tempUrl = URL.createObjectURL(file);
      const updatedUrls = [...localImageUrls, tempUrl];
      const updatedFiles = [...uploadedFiles, file];

      setLocalImageUrls(updatedUrls);
      setUploadedFiles(updatedFiles);

      // Cập nhật Redux với URLs tạm thời
      dispatch(setImageUrls(updatedUrls));

      onSuccess("OK");
    } catch (error) {
      console.error("❌ Upload error:", error);
      onError(error);
    }
  };

  const handleDeleteImage = async (index) => {
    try {
      // Xóa ảnh khỏi state local
      const updatedUrls = localImageUrls.filter((_, i) => i !== index);
      const updatedFiles = uploadedFiles.filter((_, i) => i !== index);

      setLocalImageUrls(updatedUrls);
      setUploadedFiles(updatedFiles);

      // Cập nhật Redux
      dispatch(setImageUrls(updatedUrls));

      message.success("Đã xóa ảnh thành công");
    } catch (error) {
      console.error(" Delete error:", error);
      message.error("Lỗi khi xóa ảnh");
    }
  };

  const handleNext = async () => {
    if (uploadedFiles.length === 0) {
      message.warning("Vui lòng upload ít nhất 1 ảnh");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const firebaseUrls = [];
      const totalFiles = uploadedFiles.length;

      // Upload từng file lên Firebase
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];

        // Cập nhật progress
        const currentProgress = Math.round(((i + 1) / totalFiles) * 100);
        setUploadProgress(currentProgress);

        const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        firebaseUrls.push(downloadURL);

        // Thêm delay nhỏ để user thấy progress
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      // Cập nhật Redux với URLs Firebase thật
      dispatch(setImageUrls(firebaseUrls));

      message.success("Upload ảnh thành công!");

      // Delay nhỏ trước khi chuyển trang
      setTimeout(() => {
        navigate("/PricingAvailability");
      }, 1000);
    } catch (error) {
      console.error(" Upload to Firebase error:", error);
      message.error("Lỗi khi upload ảnh lên server");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
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

              {isUploading && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "8px 16px",
                    backgroundColor: "#f0f8ff",
                    borderRadius: 6,
                    marginBottom: 16,
                    border: "1px solid #d6e4ff",
                  }}
                >
                  <div
                    style={{ fontSize: 14, color: "#1890ff", fontWeight: 500 }}
                  >
                    Đang upload {uploadProgress}%...
                  </div>
                  <Progress
                    percent={uploadProgress}
                    size="small"
                    showInfo={false}
                    strokeColor="#1890ff"
                    style={{ marginTop: 8 }}
                  />
                </div>
              )}

              <Upload.Dragger
                name="file"
                customRequest={handleUpload}
                multiple
                showUploadList={false}
                accept="image/*"
                disabled={isUploading}
                style={{
                  border: "2px dashed #e3d5be",
                  borderRadius: 8,
                  opacity: isUploading ? 0.6 : 1,
                  pointerEvents: isUploading ? "none" : "auto",
                }}
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
                Uploaded Photos ({localImageUrls.length}/5)
              </Title>
              <Row gutter={16}>
                {localImageUrls.map((url, index) => (
                  <Col key={index} style={{ marginBottom: 16 }}>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <Image
                        width={128}
                        height={128}
                        src={url}
                        style={{
                          borderRadius: 8,
                          objectFit: "cover",
                          border: "2px solid #f0f0f0",
                          opacity: isUploading ? 0.7 : 1,
                        }}
                      />
                      {!isUploading && (
                        <Popconfirm
                          title="Xóa ảnh này?"
                          description="Bạn có chắc chắn muốn xóa ảnh này không?"
                          onConfirm={() => handleDeleteImage(index)}
                          okText="Xóa"
                          cancelText="Hủy"
                          placement="top"
                        >
                          <Button
                            type="primary"
                            danger
                            size="small"
                            icon={<DeleteOutlined />}
                            style={{
                              position: "absolute",
                              top: -10,
                              right: -10,
                              borderRadius: "50%",
                              width: 36,
                              height: 36,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background:
                                "linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)",
                              border: "2px solid #fff",
                              boxShadow:
                                "0 4px 12px rgba(255, 77, 79, 0.3), 0 2px 4px rgba(0,0,0,0.1)",
                              transition: "all 0.3s ease",
                              zIndex: 10,
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.1)";
                              e.target.style.background =
                                "linear-gradient(135deg, #ff7875 0%, #ff4d4f 100%)";
                              e.target.style.boxShadow =
                                "0 6px 16px rgba(255, 77, 79, 0.4), 0 4px 8px rgba(0,0,0,0.15)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
                              e.target.style.background =
                                "linear-gradient(135deg,rgb(65, 65, 87) 0%, #ff7875 100%)";
                              e.target.style.boxShadow =
                                "0 4px 12px rgba(255, 77, 79, 0.3), 0 2px 4px rgba(0,0,0,0.1)";
                            }}
                          />
                        </Popconfirm>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>

              <Row justify="space-between" style={{ marginTop: 32 }}>
                <Button
                  icon={<LeftOutlined />}
                  onClick={() => navigate("/ListNewItem")}
                  disabled={isUploading}
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  onClick={handleNext}
                  disabled={localImageUrls.length === 0 || isUploading}
                  loading={isUploading}
                  style={{
                    backgroundColor: isUploading ? "#52c41a" : "#a1bfa7",
                    borderColor: isUploading ? "#52c41a" : "#a1bfa7",
                    minWidth: 120,
                  }}
                >
                  {isUploading ? `Uploading ${uploadProgress}%` : "Next"}
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
