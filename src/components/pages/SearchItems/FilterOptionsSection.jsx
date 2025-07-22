// src/components/pages/SearchItems/FilterOptionsSection.jsx

import { DownOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

const FilterOptionsSection = () => {
return (
<div style={{ backgroundColor: "#f3f4f6", width: "100%", padding: "24px 0" }}>
<Row justify="center">
<Col span={20}>
<Row
gutter={16}
style={{
backgroundColor: "#ffffff",
padding: "24px",
borderRadius: "16px",
boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
}}
>
<Col span={4}>
<div style={{ marginBottom: "8px", color: "#374151" }}>Category</div>
<Select defaultValue="All Categories" style={{ width: "100%" }} suffixIcon={<DownOutlined />}>
<Option value="all">All Categories</Option>
</Select>
</Col>
<Col span={4}>
<div style={{ marginBottom: "8px", color: "#374151" }}>Price Range</div>
<Select defaultValue="Any Price" style={{ width: "100%" }} suffixIcon={<DownOutlined />}>
<Option value="any">Any Price</Option>
</Select>
</Col>
<Col span={4}>
<div style={{ marginBottom: "8px", color: "#374151" }}>Location</div>
<Input placeholder="Enter location" />
</Col>
<Col span={4}>
<div style={{ marginBottom: "8px", color: "#374151" }}>Rating</div>
<Select defaultValue="Any Rating" style={{ width: "100%" }} suffixIcon={<DownOutlined />}>
<Option value="any">Any Rating</Option>
</Select>
</Col>
<Col span={4}>
<div style={{ marginBottom: "8px", color: "#374151" }}>Availability</div>
<Select defaultValue="Any Time" style={{ width: "100%" }} suffixIcon={<DownOutlined />}>
<Option value="any">Any Time</Option>
</Select>
</Col>
</Row>
</Col>
</Row>
</div>
);
};

export default FilterOptionsSection;