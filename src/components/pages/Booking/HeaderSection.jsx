import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import React from "react";

const { Header } = Layout;

export const HeaderSection = () => {
  return (
    <Header
      style={{ background: "#fffffff2", boxShadow: "0px 1px 2px #0000000d" }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Row align="middle">
            <img
              src="https://c.animaapp.com/MTOlWwgI/img/11zon-cropped-2@2x.png"
              alt="Element cropped"
              style={{ width: 56, height: 56, objectFit: "cover" }}
            />
            <div
              style={{
                fontFamily: "Poppins, Helvetica",
                fontWeight: "bold",
                fontSize: "24px",
                color: "#4a4a4a",
                marginLeft: "16px",
              }}
            >
              ShareDoo
            </div>
          </Row>
        </Col>
        <Col>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            style={{ borderBottom: "none" }}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="orders">My Orders</Menu.Item>
            <Menu.Item key="products">Products</Menu.Item>
            <Menu.Item key="support">Support</Menu.Item>
          </Menu>
        </Col>
        <Col>
          <Row align="middle" gutter={16}>
            <Col>
              <BellOutlined style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <MessageOutlined style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <Avatar
                src="https://c.animaapp.com/MTOlWwgI/img/img-2@2x.png"
                size="large"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
