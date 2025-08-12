import React from "react";
import "../styles/WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <div className="whatsapp-container">
            <a
                href="https://wa.me/957682641?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20maquinaria%20pesada."
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"><FaWhatsapp size={32} className="" /></i>
            
            </a>
        </div>
    );
}
