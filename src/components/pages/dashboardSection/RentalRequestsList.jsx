import React, { useEffect, useState } from "react";
import { List, Button, Avatar, Typography, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import api from "../../config/axios";

const { Text } = Typography;

const RentalRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMarkReceived = async (item) => {
    const token = localStorage.getItem('token');
    if (!item.orderCode) {
      message.error('Thiếu thông tin orderCode');
      return;
    }
    try {
      await api.post(`/api/rentals/mark-received?orderCode=${item.orderCode}`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(reqs => reqs.map(r => r.id === item.id ? { ...r, status: 'received' } : r));
      message.success('Đã xác nhận nhận hàng thành công');
    } catch (e) {
      message.error('Xác nhận nhận hàng thất bại');
    }
  };

  const handleMarkReturned = async (item) => {
    const token = localStorage.getItem('token');
    if (!item.orderCode) {
      message.error('Thiếu thông tin orderCode');
      return;
    }
    try {
      await api.post(`/api/rentals/mark-returned?orderCode=${item.orderCode}`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(reqs => reqs.map(r => r.id === item.id ? { ...r, status: 'returned' } : r));
      message.success('Đã xác nhận trả hàng thành công');
    } catch (e) {
      message.error('Xác nhận trả hàng thất bại');
    }
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(true);
      api.get('/api/rentals/owner-list', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          console.log('RENTAL REQUESTS RESPONSE:', res.data);
          setRequests(res.data);
        })
        .catch(() => setRequests([]))
        .finally(() => setLoading(false));
    }
  }, []);

  const handleAccept = async (requestId) => {
    const token = localStorage.getItem('token');
    try {
      await api.post(`/api/rental-requests/confirm?requestId=${requestId}`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(requests => requests.map(r => r.id === requestId ? { ...r, status: 'confirmed' } : r));
      message.success('Request approved');
    } catch (e) {
      message.error('Failed to approve request');
    }
  };

  const handleReject = async (requestId) => {
    const token = localStorage.getItem('token');
    try {
      await api.post(`/api/rental-requests/reject?requestId=${requestId}`, null, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(requests => requests.map(r => r.id === requestId ? { ...r, status: 'rejected' } : r));
      message.success('Request rejected');
    } catch (e) {
      message.error('Failed to reject request');
    }
  };

  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={requests}
      locale={{ emptyText: 'No pending rental requests.' }}
      renderItem={item => (
        <List.Item
          actions={
            item.status === 'pending' ? [
              <Button
                type="primary"
                icon={<CheckCircleOutlined />}
                onClick={() => handleAccept(item.id)}
              >
                Accept
              </Button>,
              <Button
                danger
                icon={<CloseCircleOutlined />}
                onClick={() => handleReject(item.id)}
              >
                Decline
              </Button>
            ] : item.status === 'return_wait' ? [
              <Button
                type="primary"
                onClick={() => handleMarkReceived(item)}
              >
                Đã nhận hàng
              </Button>,
              <Button
                type="primary"
                danger
                onClick={() => handleMarkReturned(item)}
              >
                Đã trả hàng
              </Button>
            ] : [<Text type={item.status === 'confirmed' ? 'success' : 'danger'}>{item.status}</Text>]
          }
        >
          <List.Item.Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={`Request ID: ${item.id}`}
            description={
              <>
                <div><b>Status:</b> {item.status}</div>
                <div><b>Rental ID:</b> {item.rentalId}</div>
                <div><b>User ID:</b> {item.userId}</div>
                <div><b>Created At:</b> {item.createdAt}</div>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default RentalRequestsList;
