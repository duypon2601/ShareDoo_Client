import React from "react";
import "./Home.css";

const Header = () => {
  return (
    <header className="group1-header">
      <div className="group1-header-content">
        <h1 className="group1-text01">ShareDoo</h1>
        <input
          className="group1-textinput"
          placeholder="Search for items..."
          type="text"
          aria-label="Search for items"
        />
        <button className="group1-button custom-list-button" aria-label="List your item">
          List Your Item
        </button>
        <button className="group1-notification" aria-label="Notifications">
  <img
    className="group1-icon-notification"
    src="https://img.icons8.com/sf-regular/48/appointment-reminders.png"
    alt="Notifications"
    width="24"
    height="24"
  />
</button>

        <div className="group1-icon-avatar" aria-label="User profile">
          <span>👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;