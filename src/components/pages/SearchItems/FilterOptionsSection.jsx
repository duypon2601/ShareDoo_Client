// src/components/pages/SearchItems/FilterOptionsSection.jsx
import { DownOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select, InputNumber } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const FilterOptionsSection = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleCategoryChange = (value) => {
    setCategory(value);
    onFilterChange({ category: value });
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    onFilterChange({ keyword: e.target.value });
  };

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
    onFilterChange({ minPrice: value });
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
    onFilterChange({ maxPrice: value });
  };

  return (
    <div
      style={{ backgroundColor: "#f3f4f6", width: "100%", padding: "24px 0" }}
    >
      <Row justify="center">
        <Col span={20}>
          <Row
            gutter={16}
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Col span={6}>
              <div style={{ marginBottom: "8px", color: "#374151" }}>
                Keyword
              </div>
              <Input
                placeholder="Search..."
                value={keyword}
                onChange={handleKeywordChange}
              />
            </Col>
            <Col span={6}>
              <div style={{ marginBottom: "8px", color: "#374151" }}>
                Category
              </div>
              <Select
                value={category}
                style={{ width: "100%" }}
                onChange={handleCategoryChange}
                allowClear
                suffixIcon={<DownOutlined />}
              >
                <Option value="CAMPING">Camping</Option>
                <Option value="HIKING">Hiking</Option>
                <Option value="FISHING">Fishing</Option>
                <Option value="BICYCLING">Bicycling</Option>
                <Option value="CITY">City</Option>
                <Option value="BEACH">Beach</Option>
                <Option value="MOUNTAINS">Mountains</Option>
                <Option value="FOREST">Forest</Option>
                <Option value="SKIING">Skiing</Option>
                <Option value="SNOWBOARDING">Snowboarding</Option>
                <Option value="OTHER">Other</Option>
              </Select>
            </Col>
            <Col span={6}>
              <div style={{ marginBottom: "8px", color: "#374151" }}>
                Min Price
              </div>
              <InputNumber
                placeholder="Min price"
                value={minPrice}
                onChange={handleMinPriceChange}
                style={{ width: "100%" }}
                min={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Col>
            <Col span={6}>
              <div style={{ marginBottom: "8px", color: "#374151" }}>
                Max Price
              </div>
              <InputNumber
                placeholder="Max price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                style={{ width: "100%" }}
                min={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FilterOptionsSection;
