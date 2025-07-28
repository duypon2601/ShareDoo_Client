import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography, message } from "antd";
import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
const { Title, Text } = Typography;

const Succes = () => {
  // Hiển thị message thành công khi component mount
  React.useEffect(() => {
    console.log("Success component mounted - showing message");

    // Sử dụng Ant Design message
    message.success(
      "🎉 Success! Your product has been published successfully!",
      6
    );
    console.log("Ant Design message shown");
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "91vh",
          width: "99vw",
          background: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 40,
            borderRadius: 24,
            boxShadow:
              "0 8px 32px rgba(161,191,167,0.18), 0 2px 8px rgba(0,0,0,0.08)",
            width: "100%",
            maxWidth: 420,
            boxSizing: "border-box",
            textAlign: "center",
            transition: "box-shadow 0.3s",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              margin: "0 auto 28px",
              background: "linear-gradient(135deg, #a1bfa7 0%, #e6f4ea 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(161,191,167,0.18)",
              animation: "pop 0.5s cubic-bezier(.68,-0.55,.27,1.55)",
            }}
          >
            <CheckOutlined style={{ fontSize: "32px", color: "#1f1f1f" }} />
          </div>
          <Title
            level={3}
            style={{
              fontWeight: 800,
              marginBottom: 8,
              color: "#1f1f1f",
              letterSpacing: 1,
            }}
          >
            Success!
          </Title>
          <Text
            type="secondary"
            style={{ display: "block", fontSize: 18, marginBottom: 12 }}
          >
            Your item has been successfully listed!
          </Text>
          <Text
            style={{
              display: "block",
              color: "#7a7a7a",
              marginBottom: 32,
              fontSize: 15,
            }}
          >
            You can now manage your listing in your profile or list another
            item.
          </Text>
          <Button
            type="primary"
            block
            size="large"
            style={{
              background: "linear-gradient(90deg, #a1bfa7 0%, #c3d8cd 100%)",
              border: "none",
              color: "#fff",
              marginBottom: 14,
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(161,191,167,0.12)",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#8bb08e")}
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #a1bfa7 0%, #c3d8cd 100%)")
            }
          >
            View My Listing
          </Button>
          <Button
            type="default"
            block
            size="large"
            style={{
              borderColor: "#a1bfa7",
              color: "#a1bfa7",
              fontWeight: "bold",
              background: "#f5f5f5",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#e6f4ea";
              e.currentTarget.style.color = "#7a9c87";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#f5f5f5";
              e.currentTarget.style.color = "#a1bfa7";
            }}
          >
            List Another Item
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Succes;
