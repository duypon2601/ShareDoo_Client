// src/components/pages/SearchItems/Body.jsx

import {
AppstoreOutlined,
BellOutlined,
HomeOutlined,
QuestionCircleOutlined,
ShoppingCartOutlined,
UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import React from "react";
import FilterOptionsSection from "./FilterOptionsSection";
import SearchResultsSection from "./SearchResultsSection";

const { Header, Content } = Layout;

const Body = () => {
return (
<Layout style={{ minHeight: "100vh", background: "#f9fafb" }}>
<Header
style={{
background: "#ffffff",
boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06)",
padding: "0 40px",
height: 72,
display: "flex",
alignItems: "center",
}}
>
<Row style={{ width: "100%" }} justify="space-between" align="middle">
<Col>
<Menu
mode="horizontal"
defaultSelectedKeys={["home"]}
style={{ borderBottom: "none" }}
>
<Menu.Item key="home" icon={<HomeOutlined />}>
Home
</Menu.Item>
<Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
My Orders
</Menu.Item>
<Menu.Item key="products" icon={<AppstoreOutlined />}>
Products
</Menu.Item>
<Menu.Item key="support" icon={<QuestionCircleOutlined />}>
Support
</Menu.Item>
</Menu>
</Col>
<Col>
<Row align="middle" gutter={16}>
<Col>
<BellOutlined style={{ fontSize: "20px", color: "#374151" }} />
</Col>
<Col>
<Avatar size="large" icon={<UserOutlined />} />
</Col>
</Row>
</Col>
</Row>
</Header>
<Content style={{ padding: "24px 0" }}>
<FilterOptionsSection />
<SearchResultsSection />
</Content>
</Layout>
);
};

export default Body;