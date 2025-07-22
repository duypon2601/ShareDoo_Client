import React from "react";
import { Layout } from "antd";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";
import { BookingFormSection } from "./BookingFormSection";
import { useLocation } from "react-router-dom";

const { Content } = Layout;

const Booking = () => {
  const location = useLocation();
  const product = location.state?.product;
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "40px 80px", background: "#f9f9f9" }}>
        <BookingFormSection product={product} />
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default Booking;
