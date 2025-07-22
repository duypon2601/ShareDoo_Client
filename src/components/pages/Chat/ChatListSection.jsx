import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Badge, Col, Input, List, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "James Wilson",
    description: "Sure, the camera is available for rent next week...",
    time: "2min ago",
    avatar: "/img.png",
    unread: 0,
  },
  {
    id: 2,
    title: "Sarah Parker",
    description: "Hi! Is the drone still available for...",
    time: "10min ago",
    avatar: "/image.png",
    unread: 2,
  },
  {
    id: 3,
    title: "Michael Brown",
    description: "Thanks for the quick response!",
    time: "Yesterday",
    avatar: "/img-2.png",
    unread: 0,
  },
  {
    id: 4,
    title: "Emma Davis",
    description: "Perfect! I'll return the equipment on Friday.",
    time: "Yesterday",
    avatar: "/img-3.png",
    unread: 0,
  },
];

const ChatListSection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", maxWidth: "720px", margin: "0 auto", padding: "24px" }}>
      <Row style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Input
            placeholder="Search conversations..."
            prefix={<SearchOutlined />}
            style={{ borderRadius: 8 }}
          />
        </Col>
      </Row>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onClick={() => navigate(`/chat/${item.id}`)}
            style={{
              background: item.unread ? "#a1bfa71a" : "#fff",
              borderRadius: 8,
              marginBottom: 8,
              padding: 16,
              cursor: "pointer",
              boxShadow: item.unread ? "none" : "0px 1px 2px #0000000d",
            }}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <Row justify="space-between">
                  <Col>{item.title}</Col>
                  <Col>
                    {item.unread > 0 ? (
                      <Badge
                        count={item.unread}
                        style={{ backgroundColor: "#a1bfa7" }}
                      />
                    ) : (
                      item.time
                    )}
                  </Col>
                </Row>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatListSection;
