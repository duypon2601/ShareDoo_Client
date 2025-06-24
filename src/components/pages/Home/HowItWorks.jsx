// components/Home/HowItWorks.jsx
import React from "react";
import "./Home.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "Find & Request",
      description: "Search & send a rental request for the items you need",
      icon: "🔍",
    },
    {
      title: "Pick Up or Deliver",
      description: "Arrange pickup or delivery with the owner",
      icon: "🤝",
    },
    {
      title: "Return & Review",
      description: "Return the item and share your experience",
      icon: "⭐",
    },
  ];

  return (
    <section className="group1-section4">
      <div className="group1-text42">How It Works</div>
      <div className="group1-div50">
        {steps.map((step, index) => (
          <div key={index} className={`group1-div${51 + index * 2}`}>
            <div className={`group1-div${52 + index * 2}`}>
              <div className={`group1i${7 + index}`}>
                <div className={`group1-svg${7 + index}`}><span className="group1-step-icon">{step.icon}</span></div>
              </div>
            </div>
            <span className={`group1-text${43 + index * 2}`}>{step.title}</span>
            <span className={`group1-text${44 + index * 2}`}>{step.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;