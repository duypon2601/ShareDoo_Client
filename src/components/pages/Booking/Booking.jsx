import React from "react";
import { Layout } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { BookingFormSection } from "./BookingFormSection";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div
      style={{
        width: "99vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Header />
      </div>

      <div style={{ flex: 1 }}>
        <BookingFormSection product={product} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
