import React, { useEffect, useState } from "react";
import { Col, Row, message } from "antd";
import HeaderSection from "./HeaderSection";
import { useLocation } from "react-router-dom";
import { usePayOS } from "@payos/payos-checkout";

const Payment = () => {
  const location = useLocation();
  const order = location.state?.order;
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    const fetchCheckoutUrl = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:8080/api/payment/payos-create-link`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              returnUrl: "https://yourdomain.com/payment/success",
              cancelUrl: "https://yourdomain.com/payment/cancel"
            })
          }
        );
        const data = await response.text();
        if (!data.startsWith("http")) {
          message.error(data);
          setCheckoutUrl("");
        } else {
          setCheckoutUrl(data);
        }
      } catch {
        setCheckoutUrl("");
      }
    };
    fetchCheckoutUrl();
  }, []);

  // Cấu hình PayOS Checkout Script
  const payOSConfig = {
    CHECKOUT_URL: checkoutUrl,
    RETURN_URL: "https://yourdomain.com/payment/success",
    ELEMENT_ID: "payos-checkout-div",
    embedded: false,
    onSuccess: (event) => {
      alert("Thanh toán thành công!");
      console.log(event);
    },
    onCancel: (event) => {
      alert("Đã hủy thanh toán!");
      console.log(event);
    },
    onExit: (event) => {
      console.log("Đã đóng popup", event);
    },
  };
  const { open } = usePayOS(payOSConfig);

  if (!order) {
    return <div>Không có đơn hàng để thanh toán.</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        minHeight: "100vh",
        paddingBottom: "24px",
      }}
    >
      <Row>
        <Col span={24}>
          <HeaderSection />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: 32 }}>
          <button onClick={open} style={{ fontSize: 18, padding: "12px 32px" }} disabled={!checkoutUrl}>
            Thanh toán với PayOS
          </button>
          <div id="payos-checkout-div"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
