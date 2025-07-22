import React from "react";
import HeaderProfile from "./HeaderProfile";
import FooterProfile from "./FooterProfile";
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
      <HeaderProfile />
      <main style={{ flex: 1 }}>
        <PricingAvailabilitySection />
      </main>
      <FooterProfile />
    </div>
  );
};

export default PricingPage;
