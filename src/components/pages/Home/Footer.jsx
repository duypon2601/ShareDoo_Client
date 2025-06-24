// components/Footer.jsx
import React from "react";
import "./Home.css";

const Footer = () => {
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=61577146375627";
  };

  return (
    <footer className="group1-footer">
      <div className="group1-footer-columns">
        <div className="group1-footer-column">
          <h4>About</h4>
          <p>About Us</p>
          <p>How It Works</p>
          <p>Careers</p>
        </div>
        <div className="group1-footer-column">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety Center</p>
          <p>Contact Us</p>
        </div>
        <div className="group1-footer-column">
          <h4>Legal</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="group1-footer-column">
          <h4>Follow Us</h4>
          <div className="group1-social-icons">
            <button className="group1-social-button facebook" onClick={handleFacebookClick}>
              <img width="50" height="50" src="https://img.icons8.com/nolan/50/facebook-new.png" alt="facebook-new"/>
            </button>
          </div>
        </div>
      </div>
      <p className="group1-text-copyright">© 2025 ShareDoo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;