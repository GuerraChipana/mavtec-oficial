import { useState } from "react";
import "../styles/contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const services = [
    "Alquiler de Excavadora sobre orugas",
    "Alquiler de Cargador Frontal",
    "Alquiler de Retroexcavadora con cuchara",
    "Alquiler de Retroexcavadora con martillo neumático",
    "Alquiler de Tractor sobre orugas",
    "Alquiler de Rodillo compactador",
    "Alquiler de Motoniveladora",
    "Alquiler de Cisterna",
    "Suministro de agua potable",
    "Transporte de agua industrial",
    "Servicio de operadores especializados",
    "Mantenimiento de maquinaria",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="contacto-container">
      {/* <div className="contacto-header">
        <h1>Contáctanos</h1>
        <p>
          ¿Necesitas alquiler de maquinaria pesada o suministro de agua potable?
          Estamos aquí para ayudarte. Contamos con excavadoras, cargadores,
          retroexcavadoras, tractores, rodillos, motoniveladoras y cisternas.
          Obtén una cotización en menos de 5 minutos.
        </p>
      </div> */}

      <div className="contacto-grid">
        {/* FORM */}
        <div className="contacto-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Tu apellido"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@empresa.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Número de teléfono</label>
              <div className="phone-input">
                <select>
                  <option value="+51">PE +51</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="987 654 321"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Servicios de interés</label>
              <div className="services-grid">
                {services.map((service, index) => (
                  <label key={index} className="service-option">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="contacto-info">
          <div className="info-card">
            <h3>Chatea con nosotros</h3>
            <p>Habla con nuestro equipo especializado vía chat en vivo.</p>
            <a href="mailto:atencionalcliente@mavtec.com" className="info-link">
              📧 Envíanos un email
            </a>
            <a
              href="https://wa.me/957682641?text=Hola%2C%20estoy%20interesado..."
              className="info-link"
            >
              📱 Escríbenos por WhatsApp
            </a>
          </div>

          <div className="info-card">
            <h3>Llámanos</h3>
            <p>Llama a nuestro equipo de Lun-Vie de 8am a 6pm.</p>
            <a href="tel:+51957682641" className="info-link phone-link">
              📞 +51 957 682 641
            </a>
            <a href="tel:+51961437420" className="info-link phone-link">
              📞 +51 961 437 420
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
