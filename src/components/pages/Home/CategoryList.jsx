// components/Home/CategoryList.jsx
import React from "react";
import "./Home.css";

const CategoryList = () => {
  const categories = [
    { name: "Bicycles", icon: "🚲" },
    { name: "Electronics", icon: "💻" },
    { name: "Books", icon: "📚" },
    { name: "Furniture", icon: "🛋️" },
    { name: "Fashion", icon: "👕" },
    { name: "More", icon: "⋯" },
  ];

  const handleCategoryClick = (categoryName) => {
    // Placeholder cho chuyển trang, bạn sẽ cập nhật URL sau
    // Ví dụ: window.location.href = `/category/${categoryName.toLowerCase()}`;
    console.log(`Navigating to ${categoryName} page`);
  };

  return (
    <section className="group1-section2">
      <div className="group1-text20">Popular Categories</div>
      <div className="group1-div15">
        {categories.map((category, index) => (
          <div key={index} className={`group1-div2${index + 17}`}>
            <div className={`group1i${index + 1}`}>
              <div className={`group1-svg${index + 1}`}><span className="group1-category-icon">{category.icon}</span></div>
            </div>
            <div className={`group1h3${index + 1}`}>
              <button
                className={`group1-text1${index + 4}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;