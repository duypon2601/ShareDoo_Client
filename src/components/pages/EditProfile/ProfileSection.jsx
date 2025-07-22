import React from "react";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const ProfileSection = () => {
  return (
    <Row style={{ marginBottom: 24 }}>
      <Col span={24}>
        <Title level={2}>Edit Profile</Title>
        <Text type="secondary">
          Update your personal information and account settings
        </Text>
      </Col>
    </Row>
  );
};

export default ProfileSection;
