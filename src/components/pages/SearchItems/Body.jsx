// src/components/pages/SearchItems/Body.jsx
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import FilterOptionsSection from "./FilterOptionsSection";
import SearchResultsSection from "./SearchResultsSection";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import api from "../../config/axios";

const Body = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    minPrice: null,
    maxPrice: null,
    page: 0,
    size: 8,
    sortBy: "createdAt",
    direction: "desc",
  });

  const [products, setProducts] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Tạo object params cho API call
      const params = {
        page: filters.page,
        size: filters.size,
        sortBy: filters.sortBy,
        direction: filters.direction,
      };

      // Chỉ thêm các tham số có giá trị
      if (filters.keyword) params.keyword = filters.keyword;
      if (filters.category) params.category = filters.category;
      if (filters.minPrice !== null && filters.minPrice !== "")
        params.minPrice = filters.minPrice;
      if (filters.maxPrice !== null && filters.maxPrice !== "")
        params.maxPrice = filters.maxPrice;

      const response = await api.get("/api/products/search", { params });
      const data = response.data;

      setProducts(data.content || []);
      setTotalElements(data.totalElements || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (updatedFilters) => {
    setFilters({ ...filters, ...updatedFilters, page: 0 });
  };

  const handlePageChange = (page) => {
    setFilters((prev) => ({ ...prev, page: page - 1 }));
  };

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
              <FilterOptionsSection onFilterChange={handleFilterChange} />
              <SearchResultsSection
                products={products}
                total={totalElements}
                currentPage={filters.page}
                onPageChange={handlePageChange}
                loading={loading}
              />
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
