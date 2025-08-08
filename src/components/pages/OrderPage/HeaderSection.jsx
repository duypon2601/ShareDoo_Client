import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import zonCropped1 from "./11zon-cropped-1.png";
import frame2 from "./frame-2.svg";

const HeaderSection = () => {
  return (
    <header className="bg-[#fffffff2] shadow-[0px_1px_2px_#0000000d]" style={{ width: '100vw', margin: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
      <Row align="middle" justify="space-between" style={{ width: '100%', margin: 0, padding: 0 }}>
        <Col>
          <Row align="middle">
            <Col>
              <Image
                width={56}
                height={56}
                src={zonCropped1}
                preview={false}
                alt="Element cropped"
              />
            </Col>
            <Col>
              <div className="font-bold text-gray-800 text-2xl">ShareDoo</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row align="middle" gutter={24}>
            <Col>
              <Link to="/orders-page" className="text-gray-600 text-base">
                Home
              </Link>
            </Col>
            <Col>
              <Link to="/orders-page" className="text-gray-600 text-base">
                My Orders
              </Link>
            </Col>
            <Col>
              <div className="text-gray-600 text-base">Products</div>
            </Col>
            <Col>
              <div className="text-gray-600 text-base">Support</div>
            </Col>
            <Col>
              <BellOutlined style={{ fontSize: "18px" }} />
            </Col>
            <Col>
              <Image
                width={20}
                height={20}
                src={frame2}
                preview={false}
                alt="Frame"
              />
            </Col>
            <Col>
              <UserOutlined style={{ fontSize: "24px" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderSection;
