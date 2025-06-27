import { Card, Col, Row, Tabs, Tag } from "antd";
import React from "react";

const { TabPane } = Tabs;

export const ReviewsSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Card
        style={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0px 10px 15px #0000001a, 0px 4px 6px #0000001a",
        }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="My Listings" key="1">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://c.animaapp.com/LQrXRuVX/img/img-3@2x.png"
                    />
                  }
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a",
                  }}
                >
                  <Card.Meta
                    title="Computer Science Textbooks"
                    description={
                      <>
                        <div>$15/week</div>
                        <Tag color="green">Available</Tag>
                      </>
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://c.animaapp.com/LQrXRuVX/img/img-3@2x.png"
                    />
                  }
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a",
                  }}
                >
                  <Card.Meta
                    title="DSLR Camera Kit"
                    description={
                      <>
                        <div>$30/day</div>
                        <Tag color="red">Rented</Tag>
                      </>
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://c.animaapp.com/LQrXRuVX/img/img-3@2x.png"
                    />
                  }
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0px 4px 6px #0000001a, 0px 2px 4px #0000001a",
                  }}
                >
                  <Card.Meta
                    title="Engineering Calculator"
                    description={
                      <>
                        <div>$8/week</div>
                        <Tag color="green">Available</Tag>
                      </>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Rental History" key="2">
            Rental History Content
          </TabPane>
          <TabPane tab="Reviews" key="3">
            Reviews Content
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
export default ReviewsSection;