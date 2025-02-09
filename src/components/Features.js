import React from 'react';
import './Features.css'; // Add styles for the features section

const Features = () => {
  return (
    <section id="features">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Access the best global payment offers.</h3>
          <p>We partner with trusted payment service providers worldwide to ensure guaranteed safety and optimized solutions for every transaction, tailored to each geographic region.</p>
        </div>
        <div className="feature">
          <h3>Experience-driven strategies for your business.</h3>
          <p>Our team of seasoned experts crafts solutions uniquely designed to meet your specific business requirements and foster sustainable growth.</p>
        </div>
        <div className="feature">
          <h3>Always here when you need us</h3>
          <p>Our dedicated support team is available 24/7 to provide reliable assistance and keep your operations running smoothly without interruptions.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
