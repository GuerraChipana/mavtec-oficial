import { Link } from 'react-router-dom';
import Slider from '../components/Slider'
import { FaListAlt, FaIndustry, FaTools, FaChartLine } from "react-icons/fa";
import '../styles/Home.css'
function Home() {
  return (

    <div >
      <Slider />
      <section className="home-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="home-title">
              Impulsamos tu crecimiento con <span>tecnología avanzada</span>
            </h2>
            <p className="home-description">
              En <strong>MAVTEC</strong> combinamos experiencia e innovación para
              ofrecerte maquinaria de alto rendimiento y soporte especializado.
            </p>

            {/* Subtítulo adicional */}
            <p className="home-subdescription">
              Equipamos tu negocio con soluciones eficientes y adaptadas a tus
              necesidades, mejorando la productividad y eficiencia operativa.
            </p>

            {/* Botones de acción */}
            <div className="intro-buttons">
              <a href="#" className="btn-primary">
                Ver Soluciones
              </a>
              <Link to="/contactanos" className="btn-secondary">
                Contáctanos
              </Link>
              <Link to="/categorias" className="btn-download">
                <FaListAlt /> Ver Categorías
              </Link>
            </div>

            {/* Beneficios */}
            <div className="benefits">
              <div className="benefit">
                <FaIndustry />
                <p>Maquinaria de última generación</p>
              </div>
              <div className="benefit">
                <FaTools />
                <p>Soporte técnico especializado</p>
              </div>
              <div className="benefit">
                <FaChartLine />
                <p>Mejora de productividad garantizada</p>
              </div>
            </div>

            {/* Testimonio */}
            <div className="testimonials">
              <p className="testimonial-quote">
                "Gracias a MAVTEC, nuestra maquinaria ha mejorado enormemente,
                permitiéndonos aumentar la eficiencia y reducir los costos
                operativos."
              </p>
              <p className="testimonial-author">
                - Juan Pérez, Director de Operaciones, Empresa XYZ
              </p>
            </div>

            {/* Enlaces adicionales */}
            <div className="additional-links">
              <Link to="/nosotros" className="additional-link">
                Sobre Nosotros
              </Link>
            </div>
          </div>

          {/* Imagen Intro */}
          <div className="intro-image">
            <img src="/Motoniveladoras.png" alt="Maquinaria avanzada" />
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home