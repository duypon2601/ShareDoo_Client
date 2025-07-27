import React from "react";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { UserReviewsSection } from "./UserReviewsSection";

const { Content } = Layout;

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "40px 80px", background: "#fff" }}>
        {id ? (
          <>
        <ProductDetailsSection productId={id} />
        <UserReviewsSection />
          </>
        ) : (
          <div>Product ID is missing.</div>
        )}
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default ProductDetail;
