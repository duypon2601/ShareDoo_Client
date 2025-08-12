import React from "react";
import "./Home.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Tiết kiệm rất nhiều tiền khi thuê sách giáo khoa ở đây thay vì mua. Rất khuyên dùng!",
      stars: "★★★★★",
    },
    {
      name: "Mike Chen",
      text: "Nền tảng tuyệt vời! Tôi đã thuê một chiếc xe đạp cho cả học kỳ và tiết kiệm được cả trăm đô.",
      stars: "★★★★★",
    },
    {
      name: "Emma Davis",
      text: "Dễ sử dụng và dịch vụ khách hàng rất tốt. Hoàn hảo cho sinh viên!",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="group1-section5">
      <div className="group1-text49">Sinh Viên Nói Gì</div>
      <div className="group1-div58">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`group1-div${59 + index * 4}`}>
            <div className={`group1-div${60 + index * 4}`}>
              <div className={`group1-img${6 + index}`} />
              <div className={`group1-div${61 + index * 4}`}>
                <span className={`group1-text${50 + index * 4}`}>
                  {testimonial.name}
                </span>
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
