import React, { useState } from "react";
import "../styles/cotizaciones.css";

const maquinarias = [
  "Excavadora sobre orugas",
  "Retroexcavadora con cuchara",
  "Retroexcavadora con martillo neumático",
  "Tractor sobre orugas",
  "Motoniveladora",
  "Cargador frontal",
  "Rodillo compactador",
  "Cisterna",
  "Volquetes",
  "Minicargaror",
  "Otros"
];

const tipoProyecto = [
  "Construcción residencial",
  "Construcción comercial",
  "Infraestructura vial",
  "Minería",
  "Agricultura",
  "Demolición",
  "Movimiento de tierras",
  "Otro",
];

export default function QuoteForm() {
  const [selectedMaquinarias, setSelectedMaquinarias] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    ruc: "",
    email: "",
    telefono: "",
    ubicacion: "",
    tipoProyecto: "",
    duracionMeses: "",
    fechaInicio: "",
    detalles: "",
  });

  const handleMaquinariaChange = (maquinaria, checked) => {
    setSelectedMaquinarias((prev) =>
      checked ? [...prev, maquinaria] : prev.filter((m) => m !== maquinaria)
    );
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cotización enviada:", { ...formData, maquinarias: selectedMaquinarias });
    alert("Cotización enviada exitosamente. Nos contactaremos contigo en las próximas 24 horas.");
  };

  return (
    <section className="quote-form-section">
      <div className="form-container">
        <h1 className="main-title">Solicitud de Cotización</h1>
        <p className="subtitle">Complete el formulario para recibir una cotización personalizada para su proyecto.</p>

        <form onSubmit={handleSubmit} className="form-grid">

          {/* Información de Contacto */}
          <div className="form-card">
            <h2 className="section-title">Información de Contacto</h2>
            <div className="input-grid">
              <input type="text" className="form-input" placeholder="Nombre Completo *" required value={formData.nombre} onChange={(e) => handleInputChange("nombre", e.target.value)} />
              <input type="text" className="form-input" placeholder="Empresa" value={formData.empresa} onChange={(e) => handleInputChange("empresa", e.target.value)} />
              <input type="email" className="form-input" placeholder="Email *" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
              <input type="number" className="form-input" placeholder="RUC/DNI *" required value={formData.ruc} onChange={(e) => handleInputChange("ruc", e.target.value)} />
              <input type="tel" className="form-input" placeholder="Teléfono *" required value={formData.telefono} onChange={(e) => handleInputChange("telefono", e.target.value)} />
            </div>
          </div>

          {/* Detalles del Proyecto */}
          <div className="form-card">
            <h2 className="section-title">Detalles del Proyecto</h2>
            <div className="input-grid">
              <div className="input-group">
                <label className="form-label" htmlFor="ubicacion">Ubicación del Proyecto *</label>
                <input
                  id="ubicacion"
                  type="text"
                  className="form-input"
                  placeholder="Ej: Lima, Perú"
                  required
                  value={formData.ubicacion}
                  onChange={(e) => handleInputChange("ubicacion", e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="form-label" htmlFor="tipoProyecto">Tipo de Proyecto *</label>
                <select
                  id="tipoProyecto"
                  className="form-input"
                  required
                  value={formData.tipoProyecto}
                  onChange={(e) => handleInputChange("tipoProyecto", e.target.value)}
                >
                  <option value="">Seleccione un tipo de proyecto</option>
                  {tipoProyecto.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label className="form-label" htmlFor="duracionMeses">Duración (meses) *</label>
                <input
                  id="duracionMeses"
                  type="number"
                  className="form-input"
                  placeholder="Ej: 12"
                  min="1"
                  required
                  value={formData.duracionMeses}
                  onChange={(e) => handleInputChange("duracionMeses", e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="form-label" htmlFor="fechaInicio">Inicio de Proyecto *</label>
                <input
                  id="fechaInicio"
                  type="date"
                  className="form-input"
                  required
                  value={formData.fechaInicio}
                  onChange={(e) => handleInputChange("fechaInicio", e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Maquinaria */}
          <div className="form-card">
            <h2 className="section-title">Maquinaria Requerida *</h2>
            <div className="machinery-grid">
              {maquinarias.map((m) => (
                <label key={m} className={`machinery-item ${selectedMaquinarias.includes(m) ? "selected" : ""}`}>
                  <input
                    type="checkbox"
                    checked={selectedMaquinarias.includes(m)}
                    onChange={(e) => handleMaquinariaChange(m, e.target.checked)}
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          {/* Información Adicional */}
          <div className="form-card">
            <h2 className="section-title">Información Adicional</h2>
            <textarea
              className="form-input"
              placeholder="Detalles del proyecto..."
              value={formData.detalles}
              onChange={(e) => handleInputChange("detalles", e.target.value)}
              rows={5}
            ></textarea>
          </div>

          {/* Botones */}
          <div className="form-buttons">
            <button type="submit" className="btn-primary" disabled={selectedMaquinarias.length === 0}>Enviar Solicitud</button>
            <button type="button" className="btn-outline" onClick={() => window.history.back()}>Volver al Catálogo</button>
          </div>
        </form>
      </div>
    </section>
  );
}
