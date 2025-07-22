import { EyeInvisibleOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Input, Row, Switch } from "antd";
import React from "react";

const UserDetailsSection = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Profile Picture */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <div style={styles.card}>
            <h2>Profile Picture</h2>
            <Row gutter={[16, 16]} align="middle">
              <Col>
                <div style={styles.avatar} />
              </Col>
              <Col>
                <Button icon={<UploadOutlined />} style={{ marginBottom: 8 }}>
                  Upload New Picture
                </Button>
                <div>Maximum file size: 2MB</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Personal Information */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <div style={styles.card}>
            <h2>Personal Information</h2>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <label>Full Name</label>
                <Input placeholder="ABC" />
              </Col>
              <Col span={12}>
                <label>Email</label>
                <Input placeholder="ABC123@gmail.com" type="email" />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={24}>
                <label>Bio</label>
                <Input.TextArea placeholder="ShareDoo wowww" rows={3} />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={12}>
                <label>Phone Number</label>
                <Input placeholder="0584728995" />
              </Col>
              <Col span={12}>
                <label>Location</label>
                <Input
                  placeholder="Select your location"
                  suffix={
                    <img
                      src="https://c.animaapp.com/KqNKvGAg/img/frame-1.svg"
                      alt="location icon"
                    />
                  }
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Payment Methods */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <div style={styles.card}>
            <h2>Payment Methods</h2>
            <Checkbox>Mobile Money</Checkbox>
            <Checkbox>Bank Transfer</Checkbox>
            <Checkbox>Cash</Checkbox>
          </div>
        </Col>
      </Row>

      {/* Password and Security */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <div style={styles.card}>
            <h2>Password & Security</h2>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <label>Current Password</label>
                <Input.Password
                  placeholder="Enter current password"
                  iconRender={() => <EyeInvisibleOutlined />}
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={24}>
                <label>New Password</label>
                <Input.Password
                  placeholder="Enter new password"
                  iconRender={() => <EyeInvisibleOutlined />}
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={24}>
                <div style={styles.twoFactorBox}>
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                  <Switch />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Buttons */}
      <Row gutter={[16, 16]}>
        <Col>
          <Button type="primary">Save Changes</Button>
        </Col>
        <Col>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </div>
  );
};

// ✅ Styles Object
const styles = {
  card: {
    background: "#fff",
    padding: 24,
    borderRadius: 8,
    boxShadow: "0px 1px 2px #0000000d",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    backgroundImage: "url(https://c.animaapp.com/KqNKvGAg/img/img@2x.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  twoFactorBox: {
    background: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
  },
};

export default UserDetailsSection;
