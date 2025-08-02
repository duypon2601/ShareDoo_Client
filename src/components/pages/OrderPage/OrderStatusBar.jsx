import React from "react";
import { Steps } from "antd";

const ORDER_STATUS_STEPS = [
  { key: "pending", label: "Chờ thanh toán" },
  { key: "paid", label: "Đã thanh toán" },
  { key: "confirmed", label: "Chờ xác nhận" },
  { key: "packed", label: "Chờ gửi hàng" },
  { key: "received", label: "Đã nhận hàng" },
  { key: "return_wait", label: "Chờ gửi trả" },
  { key: "completed", label: "Đã trả hàng" },
  { key: "cancelled", label: "Đã hủy" },
];

function getOrderStepIndex(status) {
  switch (status) {
    case "pending": return 0;
    case "paid": return 1;
    case "confirmed": return 2;
    case "packed": return 3;
    case "received": return 4;
    case "return_wait": return 5;
    case "completed": return 6;
    case "cancelled":
    case "rejected": return 7;
    default: return 0;
  }
}

const OrderStatusBar = ({ status }) => {
  const current = getOrderStepIndex(status);
  return (
    <Steps
      size="small"
      current={current}
      style={{ margin: "16px 0" }}
      items={ORDER_STATUS_STEPS.map(step => ({ title: step.label }))}
    />
  );
};

export default OrderStatusBar;
