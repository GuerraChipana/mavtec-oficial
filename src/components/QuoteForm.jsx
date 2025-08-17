import React, { useState } from "react";
import "../styles/cotizaciones.css";
import { useNavigate } from 'react-router-dom';

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
  "Minicargador",
  "Otros",
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
  const navigate = useNavigate();
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
    alert("✅ Cotización enviada. Te contactaremos en las próximas 24h.");
  };

  return (
    <section className="coti-form-section">
      <div className="coti-form-container">
        <h1 className="coti-title-main">Solicitud de Cotización</h1>
        <p className="coti-subtitle">
          Completa el formulario para recibir una propuesta personalizada.
        </p>

        <form onSubmit={handleSubmit} className="coti-form-grid">

          {/* Información de Contacto */}
          <div className="coti-form-card">
            <h2 className="coti-section-title">Información de Contacto</h2>
            <div className="coti-input-grid">
              <input
                type="text"
                className="coti-input"
                placeholder="Nombre Completo *"
                required
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
              />
              <input
                type="text"
                className="coti-input"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={(e) => handleInputChange("empresa", e.target.value)}
              />
              <input
                type="email"
                className="coti-input"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <input
                type="number"
                className="coti-input"
                placeholder="RUC/DNI *"
                required
                value={formData.ruc}
                onChange={(e) => handleInputChange("ruc", e.target.value)}
              />
              <input
                type="tel"
                className="coti-input"
                placeholder="Teléfono *"
                required
                value={formData.telefono}
                onChange={(e) => handleInputChange("telefono", e.target.value)}
              />
            </div>
          </div>

          {/* Detalles del Proyecto */}
          <div className="coti-form-card">
            <h2 className="coti-section-title">Detalles del Proyecto</h2>
            <div className="coti-input-grid">
              {/* <div className="coti-input-group">
                <label className="coti-label" htmlFor="ubicacion">Ubicación *</label>
                <input
                  id="ubicacion"
                  type="text"
                  className="coti-input"
                  placeholder="Ej: Lima, Perú"
                  required
                  value={formData.ubicacion}
                  onChange={(e) => handleInputChange("ubicacion", e.target.value)}
                />
              </div> */}
              <div className="coti-input-group">
                <label className="coti-label" htmlFor="tipoProyecto">Tipo de Proyecto *</label>
                <select
                  id="tipoProyecto"
                  className="coti-select"
                  required
                  value={formData.tipoProyecto}
                  onChange={(e) => handleInputChange("tipoProyecto", e.target.value)}
                >
                  <option value="">Seleccione...</option>
                  {tipoProyecto.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="coti-input-group">
                <label className="coti-label" htmlFor="duracionMeses">Duración (meses) *</label>
                <input
                  id="duracionMeses"
                  type="number"
                  className="coti-input"
                  placeholder="Ej: 12"
                  min="1"
                  required
                  value={formData.duracionMeses}
                  onChange={(e) => handleInputChange("duracionMeses", e.target.value)}
                />
              </div>
              <div className="coti-input-group">
                <label className="coti-label" htmlFor="fechaInicio">Inicio *</label>
                <input
                  id="fechaInicio"
                  type="date"
                  className="coti-input"
                  required
                  value={formData.fechaInicio}
                  onChange={(e) => handleInputChange("fechaInicio", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Maquinaria */}
          <div className="coti-form-card">
            <h2 className="coti-section-title">Maquinaria Requerida *</h2>
            <div className="coti-machinery-grid">
              {maquinarias.map((m) => (
                <label
                  key={m}
                  className={`coti-machinery-item ${selectedMaquinarias.includes(m) ? "selected" : ""}`}
                >
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
          <div className="coti-form-card">
            <h2 className="coti-section-title">Información Adicional</h2>
            <textarea
              className="coti-textarea"
              placeholder="Detalles del proyecto..."
              value={formData.detalles}
              onChange={(e) => handleInputChange("detalles", e.target.value)}
              rows={5}
            ></textarea>
          </div>

          {/* Botones */}
          <div className="coti-buttons">
            <button
              type="submit"
              className="coti-btn-primary"
              disabled={selectedMaquinarias.length === 0}
            >
              Enviar Solicitud
            </button>
            <button
              type="button"
              className="coti-btn-outline"
              onClick={() => navigate('/categorias')}
            >
              Volver al Catálogo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
