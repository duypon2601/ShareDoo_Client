// src/components/pages/SearchItems/Body.jsx

import React from "react";
import { Row, Col } from "antd";
import FilterOptionsSection from "./FilterOptionsSection";
import SearchResultsSection from "./SearchResultsSection";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Body = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div
            style={{
              minHeight: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              background: "#f5f5f5",
              padding: "40px 0",
              boxSizing: "border-box",
              overflowX: "hidden",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 12,
                boxShadow:
                  "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.05)",
                width: "100%",
                maxWidth: 1400,
                boxSizing: "border-box",
              }}
            >
              <FilterOptionsSection />
              <SearchResultsSection />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default Body;
