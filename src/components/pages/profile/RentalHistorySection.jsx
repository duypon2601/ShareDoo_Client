import React, { useState } from "react";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Image,
  Input,
  Row,
  Typography,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { TextArea } = Input;

const RentalHistorySection = () => {
  const navigate = useNavigate();

  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState(
    "Computer Science student at Stanford University. Love sharing and renting items to help fellow students."
  );
  const [tempDescription, setTempDescription] = useState(description);

  const handleSaveDescription = () => {
    setDescription(tempDescription);
    setIsEditingDesc(false);
    message.success("Description updated!");
  };

  const handleCancelEdit = () => {
    setTempDescription(description);
    setIsEditingDesc(false);
  };

  const handleEditProfilePage = () => {
    navigate("/edit-profile"); // 👉 chuyển hướng sang trang chỉnh sửa
  };

  return (
    <Row justify="center" style={{ width: "100%", marginTop: 24 }}>
      <Col xs={22} sm={20} md={18} lg={16}>
        <Card
          style={{
            borderRadius: "16px",
            backgroundColor: "#f9f9f9",
            padding: "24px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          <Row gutter={24} align="middle">
            <Col>
              <Image
                width={100}
                height={100}
                src="https://c.animaapp.com/LQrXRuVX/img/img@2x.png"
                style={{ borderRadius: "50%", objectFit: "cover" }}
                preview={false}
              />
            </Col>

            <Col flex="auto">
              <Title level={4} style={{ margin: 0, color: "#111827" }}>
                Sarah Johnson
              </Title>

              {!isEditingDesc ? (
                <div>
                  <Text style={{ color: "#6b7280", display: "block", marginBottom: 12 }}>
                    {description}
                  </Text>
                  <Button
                    size="small"
                    style={{ padding: "0 12px", color: "#6b7280" }}
                    onClick={() => setIsEditingDesc(true)}
                  >
                    Change
                  </Button>
                </div>
              ) : (
                <div>
                  <TextArea
                    rows={3}
                    value={tempDescription}
                    onChange={(e) => setTempDescription(e.target.value)}
                    style={{ marginBottom: 8 }}
                  />
                  <div style={{ display: "flex", gap: 8 }}>
                    <Button
                      type="primary"
                      icon={<SaveOutlined />}
                      onClick={handleSaveDescription}
                      size="small"
                      style={{
                        backgroundColor: "#a1bfa7",
                        borderColor: "#a1bfa7",
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      icon={<CloseOutlined />}
                      onClick={handleCancelEdit}
                      size="small"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              <Button
                type="primary"
                onClick={handleEditProfilePage}
                style={{
                  marginTop: "16px",
                  backgroundColor: "#a1bfa7",
                  borderColor: "#a1bfa7",
                }}
              >
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default RentalHistorySection;
