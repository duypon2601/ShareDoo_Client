import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Xe đạp", icon: "🚲" },
    { name: "Điện tử", icon: "💻" },
    { name: "Sách", icon: "📚" },
    { name: "Nội thất", icon: "🛋️" },
    { name: "Thời trang", icon: "👕" },
    { name: "Xem thêm", icon: "⋯" },
  ];

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "Xem thêm") {
      navigate("/searchItems");
    } else {
      console.log(`Điều hướng đến trang danh mục ${categoryName}`);
      // navigate(`/products?category=${categoryName.toLowerCase()}`); // nếu cần route riêng
    }
  };

  return (
    <section className="group1-section2">
      <div className="group1-text20">Danh mục phổ biến</div>
      <div
        className="group1-div15"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="group1-category-card"
            onClick={() => handleCategoryClick(category.name)}
            style={{
              flex: "0 0 120px",
              padding: "12px",
              textAlign: "center",
              cursor: "pointer",
              background: "#f5f5f5",
              borderRadius: "12px",
              transition: "0.3s",
            }}
          >
            <div style={{ fontSize: "32px" }}>{category.icon}</div>
            <div style={{ marginTop: "8px", fontWeight: "bold" }}>
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
