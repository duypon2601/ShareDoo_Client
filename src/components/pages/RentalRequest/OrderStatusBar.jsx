import React from "react";
import { Steps, Tooltip } from "antd";

const ORDER_STATUS_STEPS = [
  { key: "pending", label: "Chờ thanh toán", fullLabel: "Chờ thanh toán" },
  { key: "paid", label: "Đã thanh toán", fullLabel: "Đã thanh toán" },
  { key: "confirmed", label: "Chờ xác nhận", fullLabel: "Chờ xác nhận của chủ sở hữu" },
  { key: "packed", label: "Chờ gửi hàng", fullLabel: "Chủ sở hữu chuẩn bị/gửi hàng" },
  { key: "received", label: "Đã nhận", fullLabel: "Người thuê đã nhận hàng" },
  { key: "handover", label: "Đã bàn giao", fullLabel: "người cho thuê đã bàn giao sản phẩm" },
  { key: "return_wait", label: "Chờ gửi trả", fullLabel: "Chờ người thuê gửi trả" },
  { key: "returned", label: "Đã trả hàng", fullLabel: "Đã hoàn tất trả hàng" },
  { key: "cancelled", label: "Đã hủy", fullLabel: "Đơn hàng đã bị hủy" },
  { key: "rejected", label: "Từ chối", fullLabel: "Yêu cầu bị từ chối" },
];

function getOrderStepIndex(status) {
  switch (status) {
    case "pending": return 0;
    case "paid": return 1;
    case "confirmed": return 2;
    case "packed": return 3;
    case "received": return 4;
    case "handover": return 5;
    case "return_wait": return 6;
    case "returned": return 7;
    case "cancelled": return 8;
    case "rejected": return 9;
    default: return 0;
  }
}

const OrderStatusBar = ({ status }) => {
  const current = getOrderStepIndex(status);
  return (
    <Steps
      size="small"
      current={current}
      style={{ margin: "10px 0", maxWidth: "100%" }}
      items={ORDER_STATUS_STEPS.map((step, index) => ({
        title: (
          <Tooltip title={step.fullLabel}>
            <span>{step.label}</span>
          </Tooltip>
        ),
        status:
          index < current
            ? "finish"
            : index === current
            ? "process"
            : step.key === "cancelled" || step.key === "rejected"
            ? "error"
            : "wait",
      }))}
    />
  );
};

export default OrderStatusBar;
