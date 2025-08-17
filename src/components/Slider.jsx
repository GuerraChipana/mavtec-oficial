import React from 'react';
import '../styles/Slider.css';
import { useNavigate } from 'react-router-dom';

function Slider() {
    const navigate = useNavigate();

    return (
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

            {/* Indicadores */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">

                {/* Slide 1 - Cisterna */}
                <div className="carousel-item active">
                    <div className="overlay"></div>
                    <img src="slider2.png" className="slider-img" alt="Cisterna de maquinaria pesada" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Sistemas de Cisternas</h5>
                        <p>Soluciones industriales para transporte seguro y eficiente.</p>
                        <button onClick={() => navigate("/cotizaciones")} className="btn-slider">Solicitar Cotización</button>
                    </div>
                </div>

                {/* Slide 2 - Maquinaria */}
                <div className="carousel-item">
                    <div className="overlay"></div>
                    <img src="slider1.png" className="slider-img" alt="Maquinaria pesada" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Maquinaria de Alto Rendimiento</h5>
                        <p>Equipos confiables diseñados para maximizar tu productividad.</p>
                        <button onClick={() => navigate("/categorias")} className="btn-slider">Explorar Equipos</button>
                    </div>
                </div>
            </div>

            {/* Botones de navegación */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}

export default Slider;
