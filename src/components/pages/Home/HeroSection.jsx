// HeroSection.jsx
import React from "react";
import "./Home.css";


const HeroSection = () => {
  return (
    <section className="group1-section1">
      <div className="group1-img1" />
      <div className="group1-div11" />
      <div className="group1-div12">
        <div className="group1-div13">
          <h1 className="group1-text10">
            Smart Renting for Students – Save Money, Rent with Ease!
          </h1>
          <p className="group1-text11">
            Join thousands of students saving money through smart sharing.
          </p>
          <div className="group1-div14">
  <button className="group1-button10">
    <span className="group1-text12">Explore Now</span>
  </button>
  <button className="group1-button11">
    <span className="group1-text13">List Your Item</span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
