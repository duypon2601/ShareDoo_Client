import React from "react";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { UserReviewsSection } from "./UserReviewsSection";

const { Content } = Layout;

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Header />
      <Content style={{ padding: "40px 80px", background: "#fff" }}>
        {id ? (
          <>
            <ProductDetailsSection productId={id} />
          </>
        ) : (
          <div>Product ID is missing.</div>
        )}
      </Content>
      <Footer />
    </Layout>
  );
};

export default ProductDetail;
