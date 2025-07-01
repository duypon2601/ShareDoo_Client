// components/Home/Header.jsx
import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Header = ({ onBellClick, hasNotification }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="group1-header">
      <div className="group1-header-content">
        <h1 className="group1-text01">ShareDoo</h1>
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            className="group1-textinput"
            placeholder="Search for items..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="group1-button" style={{ marginLeft: "8px" }}>
            Search
          </button>
        </form>
        <button className="group1-button">Explore Now</button>
        <button className="group1-button">List Your Item</button>

        {/* Biểu tượng chuông */}
        <div className="group1-notification" onClick={onBellClick}>
          <img
            src="https://img.icons8.com/sf-regular/48/appointment-reminders.png"
            alt="notification"
            width="24"
            height="24"
          />
          {hasNotification && <span className="notification-badge">1</span>}
        </div>

        <div className="group1-icon-avatar" />
      </div>
    </header>
  );
};

export default Header;