import React from 'react';
import '../styles/Slider.css';

function Slider() {
    return (
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/slider01.jpg" className="slider-img" alt="Honda" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Honda</h5>
                        <p>Potencia y confiabilidad en cada motor.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/slider02.png" className="slider-img" alt="Kawasaki" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Kawasaki</h5>
                        <p>Velocidad y diseño para los que buscan adrenalina.</p>
                    </div>
                </div>
            </div>

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
