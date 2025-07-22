// src/components/pages/SearchItems/SearchResultsSection.jsx

import { EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import { Button, Card, Col, Pagination, Row } from "antd";
import React from "react";

const SearchResultsSection = () => {
return (
<div style={{ width: "100%" }}>
<Row justify="center" style={{ marginTop: 48 }}>
<Col span={20}>
<Row justify="space-between" align="middle">
<Col>
<h2 style={{ fontWeight: "bold" }}>Search Results (24)</h2>
</Col>
<Col>
<Button type="text" style={{ marginRight: 16 }}>
<img
src="https://c.animaapp.com/oj8qg6qS/img/group@2x.png"
alt="Group"
style={{ width: 19, height: 19 }}
/>
</Button>
<Button type="text">
<img
src="https://c.animaapp.com/oj8qg6qS/img/frame-4.svg"
alt="Frame"
style={{ width: 20, height: 20 }}
/>
</Button>
</Col>
<Col>
<Button type="primary" style={{ backgroundColor: "#a1bfa7", borderColor: "#a1bfa7" }}>
View Full Page
</Button>
</Col>
</Row>

      <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
        {[1, 2, 3, 4].map((item) => (
          <Col key={item} span={6}>
            <Card
              hoverable
              style={{
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt="example"
                    src="https://c.animaapp.com/oj8qg6qS/img/img-1@2x.png"
                    style={{ width: "100%", borderRadius: "16px 16px 0 0" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 13,
                      right: 10,
                      backgroundColor: "#ffffffcc",
                      borderRadius: "50px",
                      padding: "4px 12px",
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    {item === 1 ? "100.000/day" : "50.000/day"}
                  </div>
                </div>
              }
            >
              <Card.Meta
                title="Demo Product"
                description={
                  <>
                    <div>
                      <EnvironmentOutlined /> University District, 0.5 miles
                    </div>
                    <div>
                      <StarFilled style={{ color: "#ffc107" }} /> 4.{item + 5} (4{item} reviews)
                    </div>
                  </>
                }
              />
              <Button
                type="primary"
                block
                style={{
                  marginTop: 16,
                  backgroundColor: "#a1bfa7",
                  borderColor: "#a1bfa7",
                }}
              >
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Row justify="center" style={{ marginTop: 40 }}>
        <Pagination defaultCurrent={1} total={24} />
      </Row>
    </Col>
  </Row>
</div>
);
};

export default SearchResultsSection;