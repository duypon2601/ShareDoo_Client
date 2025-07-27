import React, { useRef } from "react";
import { Button } from "antd";
import { usePayOS } from "@payos/payos-checkout";

const OrderSummarySection = ({ checkoutUrl }) => {
  const payosDivRef = useRef(null);

  const returnUrl = "https://yourdomain.com/payment/success";

  // Cấu hình PayOS Checkout Script
  const payOSConfig = {
    RETURN_URL: returnUrl,
    ELEMENT_ID: "payos-checkout-div",
    CHECKOUT_URL: checkoutUrl,
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

  if (!checkoutUrl) {
    return (
      <div>
        <p>Chưa có link thanh toán PayOS. Vui lòng lấy checkoutUrl từ backend trước.</p>
      </div>
    );
  }

  return (
    <div>
      <Button type="primary" onClick={open}>
        Thanh toán với PayOS
      </Button>
      <div id="payos-checkout-div" ref={payosDivRef}></div>
    </div>
  );
};

export default OrderSummarySection;
