import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import PricingAvailabilitySection from "./PricingAvailabilitySection";

const PricingPage = () => {
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
      <Header />
      <main style={{ flex: 1 }}>
        <PricingAvailabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
