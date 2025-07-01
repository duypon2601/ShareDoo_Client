import React from "react";
import { Layout } from "antd";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { UserReviewsSection } from "./UserReviewsSection";

const { Content } = Layout;

const ProductDetail = () => {
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "40px 80px", background: "#fff" }}>
        <ProductDetailsSection />
        <UserReviewsSection />
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default ProductDetail;
