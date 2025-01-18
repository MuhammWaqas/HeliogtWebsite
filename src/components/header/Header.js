import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    "about-us",
    "services-solar",
    "gosolar",
    "financing",
    "faq",
    "careers",
    "solar-news",
    "contact",
    "1-866-435-4648",
  ];

  return (
    <header className="navbar">
      <div className="navbar-logo ml-2">
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
        onClick={handleMenuToggle}
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
              {item
                .replace("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
