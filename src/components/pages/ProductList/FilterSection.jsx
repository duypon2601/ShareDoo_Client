import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Col, Image, Layout, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Title, Text } = Typography;

export const FilterSection = () => {
return (
<div
style={{
width: "100%",
background:
"linear-gradient(90deg, rgba(227,213,190,1) 0%, rgba(240,232,217,1) 100%)",
}}
>
<Header
style={{ background: "#fffffff2", boxShadow: "0px 1px 2px #0000000d" }}
>
<Row justify="space-between" align="middle">
<Col>
<Row align="middle">
<Image width={56} height={56} src="https://c.animaapp.com/wFDyQwSi/img/11zon-cropped-2@2x.png" preview={false} />
<Title level={3} style={{ margin: 0, marginLeft: 16 }}>
ShareDoo
</Title>
</Row>
</Col>
<Col>
<Row gutter={32} align="middle">
<Col><Text>Home</Text></Col>
<Col><Text>My Orders</Text></Col>
<Col><Link to="/product-list"><Text>Products</Text></Link></Col>
<Col><Text>Support</Text></Col>
<Col><BellOutlined style={{ fontSize: "24px" }} /></Col>
<Col><ShoppingCartOutlined style={{ fontSize: "24px" }} /></Col>
<Col>
<Image
width={32}
height={32}
src="https://c.animaapp.com/wFDyQwSi/img/img@2x.png"
preview={false}
style={{ borderRadius: "50%" }}
/>
</Col>
</Row>
</Col>
</Row>
</Header>
<Row justify="center" style={{ padding: "32px 0" }}>
<Col>
<Title level={1}>List Rent Item</Title>
<Text>Find the perfect laptop for your needs</Text>
</Col>
</Row>
</div>
);
};