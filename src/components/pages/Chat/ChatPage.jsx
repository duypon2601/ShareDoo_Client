import React, { useEffect } from "react";
import { Layout } from "antd";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
import ChatListSection from "./ChatListSection";

const { Content } = Layout;

const ChatPage = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = null;
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* ✅ Header */}
      <HeaderProfile />

      {/* ✅ Content - center content + max width */}
      <Content
        style={{
          background: "#ffffff",
          padding: "32px 16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "960px" }}>
          <ChatListSection />
        </div>
      </Content>

      {/* ✅ Footer */}
      <FooterProfile />
    </Layout>
  );
};

export default ChatPage;
