import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Progress,
  Row,
  Typography,
  Select,
} from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemName,
  setCategory,
  setDescription,
  setRentalPrice,
} from "../../redux/productCreateSlice";

const { Title, Text } = Typography;

const MainContentSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemName, category, description, rentalPrice } = useSelector(
    (state) => state.productCreate
  );
  const [isPriceFocused, setIsPriceFocused] = useState(false);

  const handleCategoryChange = (value) => {
    dispatch(setCategory(value));
  };

  // Format số tiền theo định dạng Việt Nam (1.000.000)
  const formatCurrency = (value) => {
    if (!value) return "";
    return Number(value).toLocaleString("vi-VN");
  };

  // Xử lý khi focus vào ô giá
  const handlePriceFocus = () => {
    setIsPriceFocused(true);
  };

  // Xử lý khi blur khỏi ô giá
  const handlePriceBlur = () => {
    setIsPriceFocused(false);
  };

  // Ngăn scroll ngang toàn bộ trang
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f5f5f5",
        padding: "40px 0",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          boxShadow:
            "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)",
          width: "100%",
          maxWidth: 700,
          boxSizing: "border-box",
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 12 }}
        >
          <Col>
            <Title level={2} style={{ marginBottom: 0 }}>
              List Your Item
            </Title>
          </Col>
          <Col>
            <Text type="secondary">Step 1 of 4</Text>
          </Col>
        </Row>

        <Progress percent={25} showInfo={false} style={{ marginBottom: 24 }} />

        <Title level={4}>Basic Information</Title>
        <Form layout="vertical">
          <Form.Item label="Item Name" required>
            <Input
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => dispatch(setItemName(e.target.value))}
            />
          </Form.Item>

          <Form.Item
            label="Category"
            required
            tooltip="You can select multiple categories or type your own"
          >
            <Select
              mode="multiple"
              placeholder="Select categories"
              style={{ width: "100%" }}
              value={category}
              onChange={handleCategoryChange}
              options={[
                { label: "Camping", value: "CAMPING" },
                { label: "Hiking", value: "HIKING" },
                { label: "Fishing", value: "FISHING" },
                { label: "Bicycling", value: "BICYCLING" },
                { label: "City", value: "CITY" },
                { label: "Beach", value: "BEACH" },
                { label: "Mountains", value: "MOUNTAINS" },
                { label: "Forest", value: "FOREST" },
                { label: "Skiing", value: "SKIING" },
                { label: "Snowboarding", value: "SNOWBOARDING" },
                { label: "Other", value: "OTHER" },
              ]}
            />
          </Form.Item>

          <Form.Item label="Rental Price" required>
            <Input
              placeholder="Enter price per day"
              value={isPriceFocused ? rentalPrice : formatCurrency(rentalPrice)}
              onChange={(e) => {
                const numeric = e.target.value.replace(/\D/g, "");
                dispatch(setRentalPrice(numeric));
              }}
              onFocus={handlePriceFocus}
              onBlur={handlePriceBlur}
              suffix="đồng"
            />
          </Form.Item>

          <Form.Item label="Description" required>
            <Input.TextArea
              placeholder="Describe your item (max 500 characters)"
              maxLength={500}
              showCount
              style={{ width: "100%" }}
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
            />
          </Form.Item>

          <Row justify="space-between" align="middle">
            <Col>
              <Button type="text">Cancel</Button>
            </Col>
            <Col>
              <Button
                type="primary"
                icon={<RightOutlined />}
                onClick={() => navigate("/SelectNewItemPage")}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default MainContentSection;
