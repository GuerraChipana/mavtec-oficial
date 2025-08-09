import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { navLinks } from "../constants/navLinks";



const Navbar = ({ isMenuOpen, closeMenu }) => {
    const location = useLocation();



    return (
        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
                {/* Mostrar "Inicio" solo si el menú hamburguesa está activo */}
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

                {/* Resto de enlaces */}
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
