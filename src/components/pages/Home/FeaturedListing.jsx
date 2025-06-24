// components/Home/FeaturedListing.jsx
import React from "react";
import "./Home.css";

const FeaturedListing = () => {
  const listings = [
    { name: "Demo Product", price: "100.000/day", location: "Campus Area", rating: 4.8 },
    { name: "Demo Product", price: "80.000/day", location: "Downtown", rating: 4.9 },
    { name: "Demo Product", price: "30.000/day", location: "Library", rating: 4.7 },
    { name: "Demo Product", price: "20.000/day", location: "Dorm Area", rating: 4.6 },
  ];

  return (
    <section className="group1-section3">
      <div className="group1-section-header">
        <div className="group1-text21">Featured Listings</div>
      </div>
      <div className="group1-div24">
        {listings.map((listing, index) => (
          <div key={index} className="group1-listing-card">
            <div className="group1-listing-image" />
            <div className="group1-listing-details">
              <div className="group1-listing-title">
                <span>{listing.name}</span>
                <span className="group1-price">{listing.price}</span>
              </div>
              <div className="group1-location">
                <span className="group1-location-icon">📍</span>
                {listing.location}
              </div>
              <div className="group1-rating-action">
                <span className="group1-rating">★ {listing.rating}/5</span>
                <button className="group1-rent-button">
                  <span>Rent Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListing;