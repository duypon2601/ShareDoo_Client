import React, { useEffect, useState } from "react";
import { List, Button, Avatar, Typography, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";

const { Text } = Typography;

const RentalRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(true);
      axios.get('/api/rental-requests', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setRequests(res.data))
        .catch(() => setRequests([]))
        .finally(() => setLoading(false));
    }
  }, []);

  const handleAccept = async (requestId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`/api/rental-requests/confirm?requestId=${requestId}`, null, {
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
      await axios.post(`/api/rental-requests/reject?requestId=${requestId}`, null, {
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
