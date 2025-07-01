import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { Col, Image, Layout, Row, Typography } from "antd";
import React from "react";

const { Header } = Layout;
const { Text, Title } = Typography;

export const HeaderSection = () => {
  return (
    <Header
      style={{ background: "#fffffff2", boxShadow: "0px 1px 2px #0000000d" }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Row align="middle">
            <Col>
              <Image
                width={56}
                height={56}
                src="https://c.animaapp.com/raHFUeD0/img/11zon-cropped-1@2x.png"
                preview={false}
              />
            </Col>
            <Col>
              <Title level={3} style={{ margin: 0, color: "#4a4a4a" }}>
                ShareDoo
              </Title>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={32} align="middle">
            <Col>
              <Text>Home</Text>
            </Col>
            <Col>
              <Text>My Orders</Text>
            </Col>
            <Col>
              <Text>Products</Text>
            </Col>
            <Col>
              <Text>Support</Text>
            </Col>
            <Col>
              <BellOutlined style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <MessageOutlined style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <Image
                width={32}
                height={32}
                src="https://c.animaapp.com/raHFUeD0/img/img-15@2x.png"
                preview={false}
                style={{ borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
