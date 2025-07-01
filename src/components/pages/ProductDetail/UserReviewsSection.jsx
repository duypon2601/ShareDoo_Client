import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

export const UserReviewsSection = () => {
  return (
    <div className="bg-gray-50 border-0 border-none">
      <div className="container mx-auto py-8">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div className="font-bold text-black text-lg">About Us</div>
            <p className="text-gray-600 text-base">
              Connecting people with the equipment they need.
            </p>
          </Col>
          <Col span={6}>
            <div className="font-bold text-black text-lg">Quick Links</div>
            <div>
              <p className="text-gray-600 text-base">How it Works</p>
              <p className="text-gray-600 text-base">Browse Categories</p>
              <p className="text-gray-600 text-base">Trust &amp; Safety</p>
            </div>
          </Col>
          <Col span={6}>
            <div className="font-bold text-black text-lg">Support</div>
            <div>
              <p className="text-gray-600 text-base">Help Center</p>
              <p className="text-gray-600 text-base">Contact Us</p>
              <p className="text-gray-600 text-base">Terms of Service</p>
            </div>
          </Col>
          <Col span={6}>
            <div className="font-bold text-black text-lg">Follow Us</div>
            <div className="flex space-x-4">
              <FacebookOutlined className="text-gray-600 text-base" />
              <TwitterOutlined className="text-gray-600 text-base" />
              <InstagramOutlined className="text-gray-600 text-base" />
            </div>
          </Col>
        </Row>
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-gray-600 text-base">
            © 2025 RentApp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
