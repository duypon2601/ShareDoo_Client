import React from "react";
import { Modal, Descriptions, Button, Space, message } from "antd";

const WithdrawalDetailPopup = ({
  visible,
  onClose,
  withdrawal,
  onApprove,
  onReject,
  loading
}) => {
  if (!withdrawal) return null;
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      title={`Chi tiết lệnh rút tiền #RQ-${withdrawal.id}`}
    >
      <Descriptions column={1} bordered size="small">
        <Descriptions.Item label="Người yêu cầu">
          {withdrawal.userFullName}
        </Descriptions.Item>
        <Descriptions.Item label="Số tiền">
          {withdrawal.amount?.toLocaleString()} VND
        </Descriptions.Item>
        <Descriptions.Item label="Phương thức thanh toán">
          {withdrawal.paymentMethodName}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          {withdrawal.status}
        </Descriptions.Item>
        <Descriptions.Item label="Thời gian tạo">
          {withdrawal.createdAt ? new Date(withdrawal.createdAt).toLocaleString() : ""}
        </Descriptions.Item>
      </Descriptions>
      <Space style={{ marginTop: 24, float: "right" }}>
        <Button
          type="primary"
          danger
          onClick={() => onReject(withdrawal.id)}
          loading={loading === "reject"}
        >
          Từ chối
        </Button>
        <Button
          type="primary"
          onClick={() => onApprove(withdrawal.id)}
          loading={loading === "approve"}
        >
          Duyệt
        </Button>
      </Space>
    </Modal>
  );
};

export default WithdrawalDetailPopup;
