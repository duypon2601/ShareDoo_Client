import React from "react";
import { Layout } from "antd";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";
import { BookingFormSection } from "./BookingFormSection";

const { Content } = Layout;

const Booking = () => {
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "40px 80px", background: "#f9f9f9" }}>
        <BookingFormSection />
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default Booking;
