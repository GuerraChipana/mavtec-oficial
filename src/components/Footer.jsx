import '../styles/Footer.css';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaHome } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';
import { MdEmail, MdPhone } from 'react-icons/md';

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer-container">
      <div className="footer-top">

        {/* Logo y descripción */}
        <div className="footer-logo-section">
          <img src="/logo-blanco-v.png" alt="logo-v" className="footer-logo" />
          <div className="footer-logo-texts">
            <p className="footer-slogan">Soluciones confiables en maquinaria pesada</p>
          </div>
        </div>

        {/* Enlaces */}
        <div className="footer-column">
          <h4 className="footer-title">Enlaces</h4>
          <div className="footer-card-link">
            <Link to="/">
              <FaHome size={18} />
              <span>Inicio</span>
            </Link>
          </div>
          {navLinks.map((link) => (
            <div key={link.path} className="footer-card-link">
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.icon && link.icon}
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Contáctanos */}
        <div className="footer-column">
          <h4 className="footer-title">Contáctanos</h4>

          {/* WhatsApp */}
          <div className="footer-contact-item">
            <FaWhatsapp size={32} className="footer-contact-icon whatsapp" />
            <div className="footer-contact-texts">
              <strong>Chatea con nosotros</strong>
              <span>Y conversa con un agente especializado</span>
              <a
                href="https://wa.me/957682641?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20maquinaria%20pesada."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                Iniciar chat
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="footer-contact-item">
            <MdEmail size={32} className="footer-contact-icon email" />
            <div className="footer-contact-texts">
              <strong>Escríbenos</strong>
              <span>Estamos para ayudarte</span>
              <a href="mailto:atencionalcliente@mavtec.com" className="footer-contact-link">
                atencionalcliente@mavtec.com              </a>
            </div>
          </div>

          {/* Teléfono */}
          <div className="footer-contact-item">
            <MdPhone size={32} className="footer-contact-icon phone" />
            <div className="footer-contact-texts">
              <strong>Llámanos al +51 957 682 641</strong>
              <span>De lunes a domingo de 8:00 a 18:00 </span>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="footer-column">
          <h4 className="footer-title">Síguenos</h4>
          <div className="footer-social-card facebook">
            <a href="#">
              <FaFacebookF size={20} />
              <span>Facebook</span>
            </a>
          </div>
          <div className="footer-social-card linkedin">
            <a href="#">
              <LiaLinkedinIn size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="footer-social-card instagram">
            <a href="#">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        <p>© 2025 NAVTEC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
