import QuoteForm from "../components/QuoteForm";
import "../styles/cotizaciones.css";

export default function CotizacionesPage() {
  return (
    <div className="coti-page">
      {/* Columna izquierda: Formulario */}
      <section className="coti-form-section">
        <QuoteForm />
      </section>

      {/* Columna derecha: Información de valor */}
      <section className="coti-info">
        <div className="coti-info-container">
          <div className="coti-info-box">
            <div className="coti-info-number">24h</div>
            <h3 className="coti-info-title">Respuesta Rápida</h3>
            <p className="coti-info-text">
              Te enviamos tu cotización en menos de 24 horas hábiles.
            </p>
          </div>
          <div className="coti-info-box">
            <div className="coti-info-number">100%</div>
            <h3 className="coti-info-title">Sin Compromiso</h3>
            <p className="coti-info-text">
              Solicita cotizaciones gratis y sin obligación de contratar.
            </p>
          </div>
          <div className="coti-info-box">
            <div className="coti-info-number">24/7</div>
            <h3 className="coti-info-title">Soporte Técnico</h3>
            <p className="coti-info-text">
              Acompañamiento profesional durante todo tu proyecto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
