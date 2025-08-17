import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaTools,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import { categories } from "../constants/categories";
import Slider from "../components/Slider";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Slider */}
      <Slider />

      {/* Intro */}
      <section className="home-intro">
        <div className="intro-content">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="home-title">
              Soluciones integrales en <span>maquinaria pesada</span>
            </h2>
            <p className="home-description">
              En <strong>MAVTEC</strong> impulsamos la productividad de tu
              empresa con equipos de última generación y soporte especializado.
            </p>
            <div className="intro-buttons">
              <Link to="/categorias" className="btn-primary">
                Ver Soluciones
              </Link>
              <Link to="/contactanos" className="btn-secondary">
                Contáctanos
              </Link>
            </div>

            {/* Beneficios */}
            <div className="benefits">
              <div className="benefit">
                <FaIndustry /> <p>Maquinaria avanzada</p>
              </div>
              <div className="benefit">
                <FaTools /> <p>Soporte técnico especializado</p>
              </div>
              <div className="benefit">
                <FaChartLine /> <p>Mayor productividad</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="intro-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/Motoniveladora.png" alt="Maquinaria avanzada" />
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="services">
        <h2 className="section-title">Nuestras Soluciones</h2>
        <div className="services-grid-home">
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.07, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-icon">
              <FaCogs />
            </div>
            <h3>Automatización</h3>
            <p>Optimiza procesos industriales con equipos inteligentes y conectividad avanzada.</p>
          </motion.div>

          <motion.div
            className="service-card"
            whileHover={{ scale: 1.07, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-icon">
              <FaShieldAlt />
            </div>
            <h3>Seguridad</h3>
            <p>Máquinas confiables que cumplen con los más altos estándares internacionales.</p>
          </motion.div>

          <motion.div
            className="service-card"
            whileHover={{ scale: 1.07, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="service-icon">
              <FaUsers />
            </div>
            <h3>Asesoría</h3>
            <p>Expertos a tu disposición para seleccionar la maquinaria adecuada a tu negocio.</p>
          </motion.div>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="products">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="product-grid">
          {categories.slice(0, 2).map((cat) =>
            cat.machines.slice(0, 2).map((machine) => (
              <motion.div
                className="product-card"
                key={machine.id_maquina}
                whileHover={{ scale: 1.05 }}
              >
                <img src={machine.image} alt={machine.name_machine} />
                <h3>{machine.name_machine}</h3>
                <p>{machine.description}</p>
                <span className="marca">{machine.marca}</span>
                <Link to={"/categorias"} className="btn-primary">
                  Ver más
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Proyectos realizados */}
      <section className="projects">
        <h2 className="section-title">Casos de Éxito</h2>
        <div className="projects-grid">
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <FaProjectDiagram />
            <h3>Construcción de carreteras</h3>
            <p>
              Equipamos proyectos de infraestructura vial en distintas regiones,
              garantizando calidad y productividad.
            </p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <FaProjectDiagram />
            <h3>Minería</h3>
            <p>
              Soluciones de maquinaria pesada en operaciones mineras de gran
              escala con soporte 24/7.
            </p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <FaProjectDiagram />
            <h3>Obras civiles</h3>
            <p>
              Proveemos equipos para proyectos de urbanización y construcción
              sostenible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="workflow">
        <h2 className="section-title">Cómo trabajamos</h2>
        <div className="workflow-steps">
          <div className="step">
            <FaHandshake />
            <h3>Asesoría</h3>
            <p>Analizamos tus necesidades y te proponemos la mejor solución.</p>
          </div>
          <div className="step">
            <FaCogs />
            <h3>Implementación</h3>
            <p>
              Entregamos la maquinaria y realizamos la puesta en marcha en tu
              proyecto.
            </p>
          </div>
          <div className="step">
            <FaTools />
            <h3>Soporte</h3>
            <p>
              Te acompañamos con mantenimiento y asistencia técnica continua.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <motion.div
          className="testimonial-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="testimonial-quote">
            "Gracias a MAVTEC, nuestra maquinaria ha mejorado enormemente,
            permitiéndonos aumentar la eficiencia y reducir los costos
            operativos."
          </p>
          <p className="testimonial-author">
             Empresa MAVTEC
          </p>
        </motion.div>
      </section>

      {/* Clientes */}
      <section className="clients">
        <h2 className="section-title">Nuestros Socios y Clientes</h2>
        <div className="clients-logos">
          <img src="/assets/p1-m.jpg" alt="Cliente 1" />
          <img src="/assets/p2-h.jpg" alt="Cliente 2" />
          <img src="/assets/p3-h.jpg" alt="Cliente 3" />
          <img src="/assets/p4-m.jpg" alt="Cliente 4" />
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta">
        <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <p>
          Contáctanos hoy y descubre cómo nuestras soluciones pueden ayudarte.
        </p>
        <Link to="/contactanos" className="btn-primary">
          Solicitar Cotización
        </Link>
      </section>
    </div>
  );
}

export default Home;
