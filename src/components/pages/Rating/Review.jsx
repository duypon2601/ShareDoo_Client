import { Col, Row } from "antd";
import React from "react";
import Header from "../Home/Header";
import ReviewsSection from "./ReviewsSection";
import Footer from "../Home/Footer";

const Review = () => {
  return (
    <>
      <Header />
      <div
        className="inline-flex flex-col items-start relative bg-white border-2 border-solid border-[#ced4da]"
        data-model-id="35:325"
        style={{ minHeight: "100vh", width: "100%", padding: "20px" }}
      >
        <ReviewsSection />
      </div>
      <Footer />
    </>
  );
};

export default Review;
