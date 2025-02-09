import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img src="/widmorlogo.png" alt="Your Company Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={menuOpen ? 'menu-open' : ''}>
        <ul>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#case-studies" onClick={closeMenu}>Case Studies</a></li>
          <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
