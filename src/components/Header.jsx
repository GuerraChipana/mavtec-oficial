import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Header.css";
// import logoOficial from "VERTICAL-LOGO-WEB-AZUL.png";


const Header = ({ }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img
              className="header__logo-img"
              src='VERTICAL-LOGO-WEB-AZUL.png'
              alt="Logo Oficial"
            />
          </Link>
        </div>

        {/* Navbar */}
        <Navbar isMenuOpen={menuOpen} closeMenu={closeMenu} />

        {/* Botón Login */}
        <button className="login-btn" onClick={() => navigate("/cotizaciones")}
        >
          Cotizar
        </button>

        {/* Hamburguesa */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
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
