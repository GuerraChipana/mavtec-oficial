import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Header.css";
import logoOficial from "/logo-oficial-h.png";
import LoginModal from "./LoginModal/LoginModal";
// import logoOficial from "/Logo-oficial.png";

const Header = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img className="header__logo-img" src={logoOficial} alt="Logo Oficial" />
          </Link>
        </div>

        {/* Navbar */}
        <Navbar isMenuOpen={menuOpen} closeMenu={closeMenu} />

        {/* Botón Login */}
        <button className="login-btn" onClick={onLoginClick}>
          Login
        </button>

        {/* Hamburguesa */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    
    </header>
  );
};

export default Header;
