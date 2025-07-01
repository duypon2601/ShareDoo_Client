import { Badge, Button, Card, Col, Row, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const OrdersSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ width: "100%", padding: "24px 20px" }}>
        <Row>
          <Col span={24}>
            <Title level={2}>My Orders</Title>
            <Text type="secondary">Track and manage your rental orders</Text>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }}>
          <Col span={24}>
            <Row gutter={16} style={{ borderBottom: "1px solid #d9d9d9" }}>
              <Col>
                <Badge count={3} style={{ backgroundColor: "#a1bfa7" }}>
                  <Text strong style={{ color: "#a1bfa7" }}>
                    Ongoing
                  </Text>
                </Badge>
              </Col>
              <Col>
                <Badge count={12} style={{ backgroundColor: "#f0f0f0" }}>
                  <Text type="secondary">Completed</Text>
                </Badge>
              </Col>
              <Col>
                <Badge count={1} style={{ backgroundColor: "#f0f0f0" }}>
                  <Text type="secondary">Cancelled</Text>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }} gutter={[0, 24]}>
          <Col span={24}>
            <Card
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px #0000000d",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Row gutter={16}>
                <Col>
                  <div
                    style={{
                      width: "96px",
                      height: "96px",
                      backgroundImage: "url(/img-3.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                    }}
                  />
                </Col>
                <Col flex="auto">
                  <Row justify="space-between">
                    <Col>
                      <Title level={4}>Demo Product</Title>
                      <Text type="secondary">Order #ORD-2025-001</Text>
                    </Col>
                    <Col>
                      <Badge
                        count="Active"
                        style={{
                          backgroundColor: "#f6ffed",
                          color: "#52c41a",
                          borderRadius: "12px",
                          padding: "0 8px",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "16px" }} justify="space-between">
                    <Col>
                      <Text type="secondary">Rental Period</Text>
                      <br />
                      <Text>Jan 15 - Jan 22, 2025</Text>
                    </Col>
                    <Col>
                      <Text type="secondary">Total Price</Text>
                      <br />
                      <Text>$349.00</Text>
                    </Col>
                    <Col>
                      <Button type="primary">View Details</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Card
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px #0000000d",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Row gutter={16}>
                <Col>
                  <div
                    style={{
                      width: "96px",
                      height: "96px",
                      backgroundImage: "url(/image.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                    }}
                  />
                </Col>
                <Col flex="auto">
                  <Row justify="space-between">
                    <Col>
                      <Title level={4}>Demo Product</Title>
                      <Text type="secondary">Order #ORD-2025-002</Text>
                    </Col>
                    <Col>
                      <Badge
                        count="Pending"
                        style={{
                          backgroundColor: "#fff7e6",
                          color: "#fa8c16",
                          borderRadius: "12px",
                          padding: "0 8px",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "16px" }} justify="space-between">
                    <Col>
                      <Text type="secondary">Rental Period</Text>
                      <br />
                      <Text>Jan 15 - Jan 18, 2025</Text>
                    </Col>
                    <Col>
                      <Text type="secondary">Total Price</Text>
                      <br />
                      <Text>$189.00</Text>
                    </Col>
                    <Col>
                      <Button type="primary">View Details</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Card
              style={{
                borderRadius: "8px",
                boxShadow: "0px 1px 2px #0000000d",
              }}
              bodyStyle={{ padding: "24px" }}
            >
              <Row gutter={16}>
                <Col>
                  <div
                    style={{
                      width: "96px",
                      height: "96px",
                      backgroundImage: "url(/img-2.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                    }}
                  />
                </Col>
                <Col flex="auto">
                  <Row justify="space-between">
                    <Col>
                      <Title level={4}>Demo Product</Title>
                      <Text type="secondary">Order #ORD-2025-003</Text>
                    </Col>
                    <Col>
                      <Badge
                        count="Active"
                        style={{
                          backgroundColor: "#f6ffed",
                          color: "#52c41a",
                          borderRadius: "12px",
                          padding: "0 8px",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "16px" }} justify="space-between">
                    <Col>
                      <Text type="secondary">Rental Period</Text>
                      <br />
                      <Text>Jan 16 - Jan 19, 2025</Text>
                    </Col>
                    <Col>
                      <Text type="secondary">Total Price</Text>
                      <br />
                      <Text>$129.00</Text>
                    </Col>
                    <Col>
                      <Button type="primary">View Details</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrdersSection;
