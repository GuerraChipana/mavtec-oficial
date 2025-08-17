import { Users, Target, Heart, TrendingUp, Globe } from "lucide-react"
import '../styles/about.css'
import Aos from "aos";
import { useEffect } from "react";
import "/node_modules/aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function About() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    const values = [
        {
            icon: <Target />,
            title: "Calidad Certificada",
            description: "Garantizamos agua potable y equipos de primer nivel que cumplen con todas las  normas nacionales."
        },
        {
            icon: <Heart />,
            title: "Compromiso con el Perú",
            description: "Servimos con responsabilidad social, apoyando el crecimiento de comunidades y proyectos de infraestructura."
        },
        {
            icon: <Users />,
            title: "Trabajo en Equipo",
            description: "Nuestro equipo humano es el motor que impulsa soluciones eficientes para cada desafío logístico u operativo."
        },
        {
            icon: <TrendingUp />,
            title: "Innovación Continua",
            description: "Modernizamos nuestra flota y procesos para ofrecer un servicio rápido, seguro y sostenible."
        }
    ];

    return (
        <div className="about-page">
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <div className="hero-badge">
                                Nuestra Historia
                            </div>
                            <h1 className="hero-title">
                                Soluciones confiables <span className="hero-highlight"> para el Perú</span>
                            </h1>
                            <p className="hero-description">
                                Somos MAVTEC, empresa especializada en brindar servicios integrales de alquiler de maquinaria pesada y camiones cisterna, garantizando agua potable de la más alta calidad y equipamiento eficiente para tus proyectos. Estamos comprometidos a prestar servicios con eficiencia, calidad y rapidez, convirtiéndonos en aliados estratégicos para nuestros clientes.
                            </p>
                            <div className="hero-buttons">
                                <button className="button primary">
                                    Conoce Nuestros Servicios
                                </button>
                                <button onClick={() => navigate("/categorias")} className="button secundary">
                                    Solicita Cotización
                                </button>
                            </div>
                        </div>
                        <div className="hero-image-container">
                            <div className="hero-image-wrapper">
                                <img
                                    src="excavadora.png"
                                    alt="maquinaria_Pesada"
                                    className="hero-image"
                                />
                            </div>
                            <div className="hero-image-decoration"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Misión y Visión */}
            <section className="about-mission-vision">
                <div className="about-container">
                    <div className="about-section-header" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="1200">
                        <h2 className="about-title">Compromiso NAVTEC</h2>
                        <p className="about-subtitle">Conectando potencia y precisión para transformar el Perú.</p>
                    </div>

                    <div className="about-grid">
                        <div className="about-card" data-aos="zoom-in-up" data-aos-delay="200">
                            <div className="about-icon about-icon-mission">
                                <Target />
                            </div>
                            <h3 className="about-card-title">Nuestra Misión</h3>
                            <p className="about-card-description">
                                Brindar soluciones eficientes y confiables en alquiler de maquinaria pesada, con tecnología de punta y personal altamente calificado. Nuestra misión es impulsar proyectos de construcción y desarrollo del país con seguridad, puntualidad y compromiso ambiental.
                            </p>
                        </div>

                        <div className="about-card" data-aos="zoom-in-up" data-aos-delay="400">
                            <div className="about-icon about-icon-vision">
                                <Globe />
                            </div>
                            <h3 className="about-card-title">Nuestra Visión</h3>
                            <p className="about-card-description">
                                Ser la empresa líder en alquiler de maquinaria pesada en el Perú, reconocida por nuestra innovación, servicio de excelencia y responsabilidad con el desarrollo sostenible, marcando la diferencia en cada proyecto donde estemos presentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values-section">
                <div className="container">
                    <div
                        className="about-section-header"
                        data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1200"
                    >
                        <div className="about-section-badge">Nuestros Valores</div>
                        <h2 className="about-section-title">Principios que nos mueven</h2>
                        <p className="about-section-description">
                            En MAVTEC combinamos compromiso social, innovación tecnológica y eficiencia para transformar el Perú con cada entrega de agua y cada maquinaria en obra.
                        </p>
                    </div>

                    <div className="about-values-grid">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="about-value-card"
                                data-aos="flip-left"
                                data-aos-delay={index * 150}
                            >
                                <div className="about-value-card-content">
                                    <div className="about-value-icon-container">
                                        <div className="about-value-icon">
                                            {value.icon}
                                        </div>
                                    </div>
                                    <h3 className="about-value-title">{value.title}</h3>
                                    <p className="about-value-description">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* About CTA Section */}
            <section className="about-cta-section" data-aos="fade-up" data-aos-duration="1200">
                <div className="about-cta-container">
                    <h2 className="about-cta-title">
                        Soluciones confiables en agua potable y maquinaria pesada
                    </h2>
                    <p className="about-cta-description">
                        En MAVTEC abastecemos tus proyectos con agua potable certificada y maquinaria moderna. Desde viviendas hasta grandes obras, somos tu aliado estratégico.
                    </p>
                    <div className="about-cta-buttons">
                        <Link to="/cotizaciones" className="about-btn-primary">
                            Solicitar Cotización
                        </Link>

                        <Link to="/categorias" className="about-btn-secondary">
                            Ver Servicios
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default About


