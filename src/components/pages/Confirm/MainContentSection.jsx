import { CheckCircleOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Image, Row, Typography } from "antd";
import React from "react";

const { Title, Text, Paragraph } = Typography;
 const MainContentSection = () => {
  return (
    <Row justify="center" style={{ marginTop: 252 }}>
      <Col span={12}>
        <Card bordered={false} style={{ boxShadow: "0px 1px 2px #0000000d" }}>
          <Row gutter={16}>
            <Col>
              <Image
                width={96}
                height={96}
                src="https://c.animaapp.com/9aLtBZBi/img/img-1@2x.png"
                preview={false}
                style={{ borderRadius: "8px" }}
              />
            </Col>
            <Col>
              <Title level={4}>Canon EOS R5 Camera</Title>
              <Paragraph>Current Period: Jan 15 - Jan 22, 2025</Paragraph>
              <Text>Total Price: 245.000 ₫</Text>
              <Badge
                count="Active"
                style={{
                  backgroundColor: "#f6ffed",
                  color: "#52c41a",
                  borderRadius: "12px",
                  padding: "0 8px",
                }}
                icon={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
              />
            </Col>
          </Row>
        </Card>

        <Card
          bordered={false}
          style={{ marginTop: 24, boxShadow: "0px 1px 2px #0000000d" }}
        >
          <Title level={5}>Extend Your Rental</Title>
          <Text>Select New End Date</Text>
          <Row
            justify="space-between"
            style={{
              backgroundColor: "#e3d5be33",
              borderRadius: "8px",
              padding: "16px",
              marginTop: 8,
            }}
          >
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <Col key={day} style={{ textAlign: "center" }}>
                <Text>{day}</Text>
              </Col>
            ))}
            {["30", "31", "1", "2", "3", "4", "5", "6"].map((date, index) => (
              <Col
                key={date}
                style={{
                  textAlign: "center",
                  backgroundColor: index === 7 ? "#a1bfa7" : "transparent",
                  borderRadius: "8px",
                  color: index === 7 ? "#fff" : "#000",
                }}
              >
                <Text>{date}</Text>
              </Col>
            ))}
          </Row>

          <Card
            bordered={false}
            style={{
              backgroundColor: "#fafafa",
              borderRadius: "8px",
              marginTop: 24,
            }}
          >
            <Row justify="space-between">
              <Text>Extension Period</Text>
              <Text strong>7 days</Text>
            </Row>
            <Row justify="space-between" style={{ marginTop: 16 }}>
              <Text>Daily Rate</Text>
              <Text strong>35.000 ₫</Text>
            </Row>
            <Row
              justify="space-between"
              style={{
                marginTop: 16,
                borderTop: "1px solid #f0f0f0",
                paddingTop: 16,
              }}
            >
              <Text>Total Extension Cost</Text>
              <Text strong style={{ color: "#a1bfa7" }}>
                245.000 ₫
              </Text>
            </Row>
          </Card>

          <Card
            bordered={false}
            style={{
              backgroundColor: "#f6ffed",
              borderRadius: "8px",
              marginTop: 24,
            }}
          >
            <Row align="middle">
              <CheckCircleOutlined
                style={{ color: "#52c41a", marginRight: 8 }}
              />
              <Text style={{ color: "#52c41a" }}>
                This item is available for your selected dates!
              </Text>
            </Row>
          </Card>

          <Button
            type="primary"
            block
            style={{
              backgroundColor: "#a1bfa7",
              borderColor: "#a1bfa7",
              marginTop: 24,
            }}
          >
            Confirm Extension
          </Button>
          <Button block style={{ marginTop: 16 }}>
            Cancel
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
export default MainContentSection;