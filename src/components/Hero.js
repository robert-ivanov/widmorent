import React from 'react';
import './Hero.css'; // Import the external CSS file

const Hero = () => {
  return (
    <section id="hero" role="banner" aria-labelledby="hero-heading">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 id="hero-heading">Seamless Payment Solutions for Your Business</h1>
          <p>
            Expertise in payment integration and systems for merchants and PSPs.
          </p>
          <div className="cta-buttons">
            <a href="#about" className="btn primary">Learn More</a>
            <a href="#contact" className="btn secondary">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
