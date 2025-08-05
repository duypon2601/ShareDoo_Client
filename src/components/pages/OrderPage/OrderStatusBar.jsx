import React from "react";
import { Steps, Tooltip } from "antd";
import {
  DollarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  TruckOutlined,
  GiftOutlined,
  UndoOutlined,
} from "@ant-design/icons";

const ORDER_STATUS_STEPS = [
  {
    key: "pending",
    label: "Chờ trả",
    fullLabel: "Chờ thanh toán",
    icon: <DollarOutlined />,
  },
  {
    key: "paid",
    label: "Đã trả",
    fullLabel: "Đã thanh toán",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "confirmed",
    label: "Xác nhận",
    fullLabel: "Chờ xác nhận",
    icon: <ClockCircleOutlined />,
  },
  {
    key: "packed",
    label: "Đóng gói",
    fullLabel: "Chờ gửi hàng",
    icon: <GiftOutlined />,
  },
  {
    key: "received",
    label: "Đã nhận",
    fullLabel: "Đã nhận hàng",
    icon: <TruckOutlined />,
  },
  {
    key: "return_wait",
    label: "Chờ trả",
    fullLabel: "Chờ gửi trả",
    icon: <UndoOutlined />,
  },
  {
    key: "completed",
    label: "Hoàn tất",
    fullLabel: "Đã trả hàng",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "cancelled",
    label: "Hủy",
    fullLabel: "Đã hủy",
    icon: <CloseCircleOutlined />,
  },
  {
    key: "rejected",
    label: "Từ chối",
    fullLabel: "Bị từ chối",
    icon: <CloseCircleOutlined />,
  },
];

function getOrderStepIndex(status) {
  const index = ORDER_STATUS_STEPS.findIndex((step) => step.key === status);
  return index >= 0 ? index : 0;
}

const OrderStatusBar = ({ status }) => {
  const current = getOrderStepIndex(status);

  return (
    <>
      <Steps
        size="small"
        current={current}
        style={{
          margin: "12px 0",
          maxWidth: 1000,
          padding: "12px 20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          animation: "fadeIn 0.5s ease-in",
        }}
        items={ORDER_STATUS_STEPS.map((step, index) => ({
          title: (
            <Tooltip title={step.fullLabel}>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: index === current ? 600 : 400,
                  color: index <= current ? "#1890ff" : "#595959",
                  transition: "all 0.3s ease",
                }}
                className="step-title"
              >
                {step.label}
              </span>
            </Tooltip>
          ),
          icon: (
            <span
              style={{
                color:
                  index < current
                    ? "#389e0d"
                    : index === current
                    ? "#1890ff"
                    : step.key === "cancelled" || step.key === "rejected"
                    ? "#a8071a"
                    : "#bfbfbf",
                fontSize: 18,
                transition: "all 0.3s ease",
              }}
            >
              {step.icon}
            </span>
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
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .step-title:hover {
          color: #40c4ff;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default OrderStatusBar;
