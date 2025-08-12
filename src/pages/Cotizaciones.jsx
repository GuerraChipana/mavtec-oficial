import React from "react";
import QuoteForm from "../components/QuoteForm";
import "../styles/cotizaciones.css";

export default function CotizacionesPage() {
  return (
    <div className="cotizaciones-page">

      {/* Formulario */}
      <QuoteForm />

      {/* Info Section */}
      <section className="quote-info">
        <div className="info-container">
          <div>
            <div className="info-number">24h</div>
            <h3>Respuesta Rápida</h3>
            <p>Nos comprometemos a enviarte tu cotización en menos de 24 horas.</p>
          </div>
          <div>
            <div className="info-number">100%</div>
            <h3>Sin Compromiso</h3>
            <p>Cotiza sin costo y sin obligación de contratar.</p>
          </div>
          <div>
            <div className="info-number">24/7</div>
            <h3>Soporte Técnico</h3>
            <p>Asesoría especializada durante todo el desarrollo de tu proyecto.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
