import { BellOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import React from "react";

const { Header } = Layout;

 const HeaderSection = () => {
  return (
    <Header
      className="header"
      style={{
        background: "#fff",
        padding: 0,
        boxShadow: "0px 1px 2px #0000000d",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Row align="middle">
            <Col>
              <img
                src="https://c.animaapp.com/9aLtBZBi/img/11zon-cropped-1@2x.png"
                alt="Logo"
                style={{ width: 56, height: 56, objectFit: "cover" }}
              />
            </Col>
            <Col>
              <div
                style={{
                  fontFamily: "'Poppins', Helvetica",
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#333",
                }}
              >
                ShareDoo
              </div>
            </Col>
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
            <Menu.SubMenu key="products" title="Products">
              <Menu.Item key="product1">Product 1</Menu.Item>
              <Menu.Item key="product2">Product 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="support">Support</Menu.Item>
          </Menu>
        </Col>
        <Col>
          <Row align="middle" gutter={16}>
            <Col>
              <BellOutlined style={{ fontSize: "24px" }} />
            </Col>
            <Col>
              <Avatar
                src="https://c.animaapp.com/9aLtBZBi/img/img@2x.png"
                size="large"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
export default HeaderSection;