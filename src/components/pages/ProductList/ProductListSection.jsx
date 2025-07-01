import {
HeartOutlined,
StarOutlined
} from "@ant-design/icons";
import {
Button,
Card,
Checkbox,
Col,
Pagination,
Row,
Select,
Slider
} from "antd";
import React from "react";

const { Option } = Select;

export const ProductListSection = () => {
return (
<Row gutter={16} style={{ marginTop: 32 }}>
<Col span={6}>
<Card>
<div style={{ marginBottom: 24 }}>
<h3>Price Range</h3>
<Slider range defaultValue={[0, 100]} />
<div style={{ display: "flex", justifyContent: "space-between" }}>
<span>$0</span>
<span>$100/day</span>
</div>
</div>
<div style={{ marginBottom: 24 }}>
<h3>Brand</h3>
<Checkbox.Group>
<Row>
{["Apple", "Dell", "HP", "Lenovo"].map((brand) => (
<Col span={24} key={brand}>
<Checkbox value={brand}>{brand}</Checkbox>
</Col>
))}
</Row>
</Checkbox.Group>
</div>
<div style={{ marginBottom: 24 }}>
<h3>Location</h3>
<Select defaultValue="All Locations" style={{ width: "100%" }}>
<Option value="All Locations">All Locations</Option>
</Select>
</div>
<div style={{ marginBottom: 24 }}>
<h3>Condition</h3>
<Checkbox.Group>
<Row>
<Col span={24}><Checkbox value="New">New</Checkbox></Col>
<Col span={24}><Checkbox value="Used">Used</Checkbox></Col>
</Row>
</Checkbox.Group>
</div>
<div>
<h3>Owner Rating</h3>
<Checkbox.Group>
<Row>
<Col span={24}><Checkbox value="4+ Stars">4+ Stars</Checkbox></Col>
<Col span={24}><Checkbox value="3+ Stars">3+ Stars</Checkbox></Col>
</Row>
</Checkbox.Group>
</div>
</Card>
</Col>

  <Col span={18}>
    <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
      <Col>Showing 24 results</Col>
      <Col>
        <span>Sort by: </span>
        <Select defaultValue="Most Popular" style={{ width: 120 }}>
          <Option value="Most Popular">Most Popular</Option>
        </Select>
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      {[1, 2].map((i) => (
        <Col span={12} key={i}>
          <Card
            cover={
              <img
                alt="example"
                src="https://c.animaapp.com/wFDyQwSi/img/img-3@2x.png"
              />
            }
            actions={[<HeartOutlined key="heart" />]}
          >
            <Card.Meta
              title="Demo Product"
              description={
                <>
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
                    ${i === 1 ? "45" : "35"}/day
                  </div>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                    <img
                      src={`https://c.animaapp.com/wFDyQwSi/img/img-${i + 1}@2x.png`}
                      alt="User"
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        marginRight: 8,
                      }}
                    />
                    {i === 1 ? "John Smith" : "Sarah Johnson"}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                    <StarOutlined style={{ color: "#fadb14" }} />
                    <span style={{ marginLeft: 8 }}>
                      {i === 1 ? "4.8 (124 reviews)" : "4.6 (98 reviews)"}
                    </span>
                  </div>
                  <Button type="primary" style={{ marginTop: 16 }}>
                    View Details
                  </Button>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
    <Row justify="center" style={{ marginTop: 32 }}>
      <Pagination defaultCurrent={1} total={50} />
    </Row>
  </Col>
</Row>
);
};