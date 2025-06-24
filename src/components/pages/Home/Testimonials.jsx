// components/Home/Testimonials.jsx
import React from "react";
import "./Home.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Saved so much money renting textbooks here instead of buying. Highly recommend!",
      stars: "★★★★★",
    },
    {
      name: "Mike Chen",
      text: "Great platform! Rented a bike for the semester and saved hundreds.",
      stars: "★★★★★",
    },
    {
      name: "Emma Davis",
      text: "Easy to use and great customer service. Perfect for students!",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="group1-section5">
      <div className="group1-text49">What Students Say</div>
      <div className="group1-div58">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`group1-div${59 + index * 4}`}>
            <div className={`group1-div${60 + index * 4}`}>
              <div className={`group1-img${6 + index}`} />
              <div className={`group1-div${61 + index * 4}`}>
                <span className={`group1-text${50 + index * 4}`}>{testimonial.name}</span>
              </div>
            </div>
            <p className={`group1p1`}>
              <span className={`group1-text${51 + index * 4}`}>
                {`"${testimonial.text}"`}
              </span>
            </p>
            <div className={`group1-testimonial-stars${index}`}>
              <span>{testimonial.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;