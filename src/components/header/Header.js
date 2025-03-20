import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false); // State for About Us submenu
  const location = useLocation();

  const navItems = [
    { name: "About Us", path: "about-us" },
    { name: "Services", path: "services" },
    { name: "Go Solar", path: "gosolar" },
    { name: "Financing", path: "financing" },
    { name: "FAQ", path: "faq" },
    { name: "Careers", path: "careers" },
    { name: "Solar News", path: "solar-news" },
    { name: "Contact", path: "contact" },
  ];

  const aboutUsSubItems = [
    { name: "Our Gallery", path: "our-gallery" },
    { name: "Our Team", path: "about-us/our-team" },
   
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
          const isActive = location.pathname === `/${item.path}`;
          if (item.name === "About Us") {
            return (
              <div key={index} className={`nav-item dropdown ${isActive ? "active" : ""}`}>
                <Link
                  className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`}
                  to={`/${item.path}`} // Navigate to About Us page
                  id="navbarDropdown"
                  role="button"
                  onClick={(e) => {
                    if (isActive) {
                      // If already on the About Us page, toggle the dropdown
                      e.preventDefault(); // Prevent default anchor behavior
                      setIsAboutUsOpen(!isAboutUsOpen);
                    } else {
                      // If not on the About Us page, close the menu
                      setIsMenuOpen(false);
                      setIsAboutUsOpen(false); // Close dropdown
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={isAboutUsOpen}
                >
                  {item.name}
                </Link>
                <div className={`dropdown-menu ${isAboutUsOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  {aboutUsSubItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`/${subItem.path}`}
                      className="dropdown-item"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutUsOpen(false); // Close submenu on item click
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                  <div className="dropdown-divider" />
                </div>
              </div>
            );
          }
          return (
            <div key={index}>
              <Link
                to={`/${item.path}`}
                className={`navbar-link ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
        {/* Phone Button */}
        <a
          href=""
          className="navbar-link button-header"
          onClick={() => navigate('/estimated')}
        >
           Get An Estimate
        </a>
      </nav>
    </header>
  );
};

export default Header;