import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getCurrentUser } from "../../../api/user";

const { Title, Text } = Typography;
const { TextArea } = Input;

const RentalHistorySection = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null); // State để lưu userId
  const [imageUrl, setImageUrl] = useState(null); // State để lưu imageUrl từ API
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState(
    "Computer Science student at Stanford University. Love sharing and renting items to help fellow students."
  );
  const [tempDescription, setTempDescription] = useState(description);

  console.log("User from Redux:", user);

  // Giải mã token và gọi API để lấy imageUrl
  useEffect(() => {
    let decodedUserId = null;
    try {
      if (user?.token) {
        const decoded = jwtDecode(user.token);
        decodedUserId = decoded.userId;
        console.log("Decoded userId from token:", decodedUserId);
        setUserId(decodedUserId);
      } else {
        console.log("No token found in Redux user");
        message.error("Không tìm thấy token. Vui lòng đăng nhập lại.");
        return;
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      message.error("Không thể giải mã token. Vui lòng đăng nhập lại.");
      return;
    }

    // Gọi API GET /api/users/{userId} để lấy imageUrl
    if (decodedUserId) {
      getCurrentUser(decodedUserId)
        .then((res) => {
          const userData = res.data.data;
          console.log("User data from API:", userData);
          setImageUrl(userData.imageUrl || null);
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
          message.error("Không thể lấy thông tin người dùng.");
        });
    }
  }, [user?.token]);

  const handleSaveDescription = () => {
    setDescription(tempDescription);
    setIsEditingDesc(false);
    message.success("Cập nhật mô tả thành công!", 3);
  };

  const handleCancelEdit = () => {
    setTempDescription(description);
    setIsEditingDesc(false);
  };

  const handleEditProfilePage = () => {
    navigate("/edit-profile");
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
                src={imageUrl || "/img/ShareDoo.png"}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                preview={false}
              />
            </Col>

            <Col flex="auto">
              <Title level={4} style={{ margin: 0, color: "#111827" }}>
                {user?.username || user?.name || "User Name"}
              </Title>

              {!isEditingDesc ? (
                <div>
                  <Text
                    style={{
                      color: "#6b7280",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
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
