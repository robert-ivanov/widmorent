import React from 'react';
import './Header.css'; // Add styles for header

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/widmorlogo.png" alt="Your Company Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
