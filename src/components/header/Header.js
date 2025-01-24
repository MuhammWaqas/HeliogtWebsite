import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    "about-us",
    "services-solar",
    "gosolar",
    "financing",
    "faq",
    "careers",
    "solar-news",
    "contact",
  ];

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="assets/content/right.png"
            alt="Helio GreenTech"
            className="navbar-logo-img"
          />
        </Link>
      </div>

      {/* Burger Toggle Button */}
      <button
        className={`navbar-burger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>

      {/* Navigation Links */}
      <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => {
          const isActive = location.pathname === `/${item}`;
          return (
            <Link
              key={index}
              to={`/${item}`}
              className={`navbar-link ${isActive ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </Link>
          );
        })}
        {/* Phone Button */}
        <a
          href="tel:18664354648"
          className="navbar-link button-header"
          onClick={() => setIsMenuOpen(false)}
        >
          1-866-435-4648
        </a>
      </nav>
    </header>
  );
};

export default Header;
