'use client'
import { useState } from 'react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.')
  }

  const services = [
    'Alquiler de Excavadora sobre orugas',
    'Alquiler de Cargador Frontal',
    'Alquiler de Retroexcavadora con cuchara',
    'Alquiler de Retroexcavadora con martillo neumático',
    'Alquiler de Tractor sobre orugas',
    'Alquiler de Rodillo compactador',
    'Alquiler de Motoniveladora',
    'Alquiler de Cisterna',
    'Suministro de agua potable',
    'Transporte de agua industrial',
    'Servicio de operadores especializados',
    'Mantenimiento de maquinaria'
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F2F2F0', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            color: '#021f59',
            marginBottom: '1rem'
          }}>
            Contáctanos
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            ¿Necesitas alquiler de maquinaria pesada o suministro de agua potable? Estamos aquí para ayudarte.
            Contamos con excavadoras, cargadores, retroexcavadoras, tractores, rodillos, motoniveladoras y cisternas.
            Obtén una cotización en menos de 5 minutos.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 400px' : '1fr',
          gap: '3rem'
        }}>
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 640 ? '1fr 1fr' : '1fr',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Tu apellido"
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@empresa.com"
                  required
                  style={{
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                  Número de teléfono
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <select style={{
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    minWidth: '100px'
                  }}>
                    <option value="+51">PE +51</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="987 654 321"
                    required
                    style={{
                      flex: '1',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu proyecto: ¿qué tipo de maquinaria necesitas? ¿Por cuánto tiempo? ¿Ubicación del proyecto?"
                  rows="4"
                  required
                  style={{
                    padding: '0.75rem 1rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500', color: '#374151', fontSize: '0.875rem' }}>
                  Servicios de interés
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 640 ? '1fr 1fr' : '1fr',
                  gap: '0.75rem'
                }}>
                  {services.map((service, index) => (
                    <label key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '0.375rem'
                    }}>
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#021f59',
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#024873'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#021f59'}
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Chat Section */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Chatea con nosotros
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Habla con nuestro equipo especializado vía chat en vivo.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: '#374151',
                  border: '1px solid #e5e7eb'
                }}>
                  <span style={{ fontSize: '1.25rem' }}>💬</span>
                  Iniciar chat en vivo
                </a>
                <a href="mailto:info@mavtec.pe" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: '#374151',
                  border: '1px solid #e5e7eb'
                }}>
                  <span style={{ fontSize: '1.25rem' }}>📧</span>
                  Envíanos un email
                </a>
                <a href="https://wa.me/957682641?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20maquinaria%20pesada."
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: '#374151',
                    border: '1px solid #e5e7eb'
                  }}>
                  <span style={{ fontSize: '1.25rem' }}>📱</span>
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            {/* Call Section */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Llámanos
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Llama a nuestro equipo de Lun-Vie de 8am a 6pm.
              </p>
              <a href="tel:+5114567890" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#374151',
                border: '1px solid #e5e7eb',
                fontWeight: '600',
                fontSize: '1.125rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📞</span>
                +51 957 682 641
              </a>
            </div>

            {/* Visit Section */}
            {/* <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Visítanos
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Chatea con nosotros en persona en nuestra oficina principal en Lima.
              </p>
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#374151',
                border: '1px solid #e5e7eb',
                lineHeight: '1.4'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                Av. Javier Prado Este 123, San Isidro, Lima 15036
              </a>
            </div> */}

            {/* Emergency Section */}
            {/* <div style={{
              background: 'linear-gradient(135deg, #D9631E 0%, #e67e22 100%)',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#ffffff'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#ffffff' }}>
                Servicio de Emergencia
              </h3>
              <p style={{ color: '#ffffff', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5', opacity: '0.9' }}>
                ¿Necesitas maquinaria pesada urgente para tu proyecto? Servicio 24/7 disponible.
              </p>
              <a href="tel:+5119876543" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <span style={{ fontSize: '1.25rem' }}>🚨</span>
                Línea de Emergencia: +51 (01) 987-6543
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
