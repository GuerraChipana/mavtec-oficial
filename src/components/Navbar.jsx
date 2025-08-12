import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { navLinks } from "../constants/navLinks";
import { X } from "lucide-react"; // Icono de cerrar

const Navbar = ({ isMenuOpen, closeMenu }) => {
  const location = useLocation();

  return (
    <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
      {/* Botón de cerrar, solo visible en móvil cuando el menú está abierto */}
      {isMenuOpen && (
        <button className="close-menu-btn" onClick={closeMenu}>
          <X size={40} color="#fff" />
        </button>
      )}

      <ul className="nav-list">
        {isMenuOpen && (
          <li className="only-mobile">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Inicio
            </Link>
          </li>
        )}

        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active-link" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
