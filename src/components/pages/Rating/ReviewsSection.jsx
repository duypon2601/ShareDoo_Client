import { Button, Card, Col, Input, Rate, Row } from "antd";
import React from "react";

const ReviewsSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Row justify="center" style={{ marginTop: 16 }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>4.8</h1>
          <Rate disabled defaultValue={5} style={{ fontSize: "18px" }} />
          <div style={{ marginTop: 8, fontSize: "16px", color: "#888" }}>
            Based on 52 reviews
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 32 }}>
        <Col>
          <Card style={{ borderRadius: "50px", textAlign: "center" }}>
            <div style={{ fontSize: "16px" }}>5</div>
            <div style={{ fontSize: "16px" }}>(30)</div>
            <Rate disabled defaultValue={5} style={{ fontSize: "18px" }} />
          </Card>
        </Col>
        <Col>
          <Card style={{ borderRadius: "50px", textAlign: "center" }}>
            <div style={{ fontSize: "16px" }}>4</div>
            <div style={{ fontSize: "16px" }}>(15)</div>
            <Rate disabled defaultValue={4} style={{ fontSize: "18px" }} />
          </Card>
        </Col>
        <Col>
          <Card style={{ borderRadius: "50px", textAlign: "center" }}>
            <div style={{ fontSize: "16px" }}>3</div>
            <div style={{ fontSize: "16px" }}>(5)</div>
            <Rate disabled defaultValue={3} style={{ fontSize: "18px" }} />
          </Card>
        </Col>
        <Col>
          <Card style={{ borderRadius: "50px", textAlign: "center" }}>
            <div style={{ fontSize: "16px" }}>2</div>
            <div style={{ fontSize: "16px" }}>(2)</div>
            <Rate disabled defaultValue={2} style={{ fontSize: "18px" }} />
          </Card>
        </Col>
        <Col>
          <Card style={{ borderRadius: "50px", textAlign: "center" }}>
            <div style={{ fontSize: "16px" }}>1</div>
            <div style={{ fontSize: "16px" }}>(0)</div>
            <Rate disabled defaultValue={1} style={{ fontSize: "18px" }} />
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card style={{ borderRadius: "8px" }}>
            <Row>
              <Col span={2}>
                <img
                  src="https://c.animaapp.com/qfkFLqiP/img/img@2x.png"
                  alt="Sarah Johnson"
                  style={{ borderRadius: "50%", width: "48px", height: "48px" }}
                />
              </Col>
              <Col span={22}>
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Sarah Johnson
                </div>
                <div style={{ color: "#888", fontSize: "12px" }}>
                  March 15, 2025
                </div>
                <Rate disabled defaultValue={5} style={{ fontSize: "18px" }} />
                <p style={{ marginTop: 16, color: "#888" }}>
                  Amazing rental experience! The property was exactly as
                  described, clean, and well-maintained. The host was very
                  responsive and accommodating. Would definitely recommend this
                  place to anyone looking for a comfortable stay.
                </p>
                <Button type="link">Read More</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card style={{ borderRadius: "8px" }}>
            <Row>
              <Col span={2}>
                <img
                  src="https://c.animaapp.com/qfkFLqiP/img/img-1@2x.png"
                  alt="Michael Chen"
                  style={{ borderRadius: "50%", width: "48px", height: "48px" }}
                />
              </Col>
              <Col span={22}>
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Michael Chen
                </div>
                <div style={{ color: "#888", fontSize: "12px" }}>
                  March 10, 2025
                </div>
                <Rate disabled defaultValue={4} style={{ fontSize: "18px" }} />
                <p style={{ marginTop: 16, color: "#888" }}>
                  Great location and value for money. The amenities were good,
                  though some minor maintenance issues could be addressed.
                  Overall, a pleasant stay.
                </p>
                <Button type="link">Read More</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card style={{ borderRadius: "8px" }}>
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>
              Leave a Review
            </div>
            <div style={{ marginTop: 16, fontSize: "16px", color: "#888" }}>
              Rate your experience
            </div>
            <Rate style={{ fontSize: "24px" }} />
            <Input.TextArea
              placeholder="Share your experience (max 250 characters)"
              maxLength={250}
              style={{ marginTop: 16, borderRadius: "8px" }}
            />
            <div style={{ textAlign: "right", color: "#888", marginTop: 8 }}>
              0/250 characters
            </div>
            <Button
              type="primary"
              style={{
                marginTop: 16,
                backgroundColor: "#a1bfa7",
                borderColor: "#a1bfa7",
                borderRadius: "8px",
              }}
            >
              Submit Review
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ReviewsSection;