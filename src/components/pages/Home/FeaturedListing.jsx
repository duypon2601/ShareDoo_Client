import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const FeaturedListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("api/products");
        console.log("API response:", response.data);

        if (Array.isArray(response.data.content)) {
          // Lấy 4 sản phẩm đầu tiên
          const topFour = response.data.content.slice(0, 5);
          setListings(topFour);
        } else {
          console.warn("API không trả về content dạng mảng, set listings = []");
          setListings([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (
      <section className="group1-section3">
        <div className="group1-section-header">
          <div className="group1-text21">Featured Listings</div>
        </div>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="group1-section3">
      <div className="group1-section-header">
        <div className="group1-text21">Featured Listings</div>
      </div>
      <div className="group1-div24">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing.productId} className="group1-listing-card">
              <div
                className="group1-listing-image"
                style={{
                  backgroundImage: `url(${listing.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="group1-listing-details">
                <div className="group1-listing-title">
                  <span>{listing.name}</span>
                  <span className="group1-price">
                    {listing.pricePerDay?.toLocaleString()}đ/day
                  </span>
                </div>
                <div className="group1-location">
                  <span className="group1-location-icon">📍</span>
                  {listing.location}
                </div>
                <div className="group1-rating-action">
                  <span className="group1-rating">★ 4.8/5</span>
                  <button
                    className="group1-rent-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(listing.productId);
                    }}
                  >
                    <span>Rent Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedListing;
