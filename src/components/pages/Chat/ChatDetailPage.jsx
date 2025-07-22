import React from "react";
import { useParams } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
import { Typography } from "antd";

const { Title } = Typography;

const ChatDetailPage = () => {
  const { id } = useParams(); // ✅ Lấy id từ URL

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <HeaderProfile />
      <div style={{ padding: "32px 16px", maxWidth: 960, margin: "0 auto" }}>
        <Title level={3}>Chat Detail - Conversation ID: {id}</Title>
        {/* TODO: Hiển thị đoạn hội thoại dựa vào id */}
      </div>
      <FooterProfile />
    </div>
  );
};

export default ChatDetailPage;
