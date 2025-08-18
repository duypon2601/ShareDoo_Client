import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CategoryList from "./CategoryList";
import FeaturedListing from "./FeaturedListing";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import "./Home.css";
import "./theme.css"; // add custom colors here

export default function Home() {
  const [hasNotification, setHasNotification] = useState(true);

  const handleShowNotifications = () => {
    alert("Bạn có 1 thông báo mới!");
    setHasNotification(false);
  };

  return (
    <div className="home-container"
   
      style={{
        width: "99vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header onBellClick={handleShowNotifications} hasNotification={hasNotification} />
      
      <HeroSection />
      <CategoryList />
      <FeaturedListing />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
} 
