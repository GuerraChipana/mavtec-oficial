import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/About";
import Categorias from "./pages/Categorias";
import LoginModal from "./components/LoginModal/LoginModal";
import Contacto from "./pages/Contacto";
import CotizacionesPage from "./pages/Cotizaciones";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <>
      <Header onLoginClick={openLoginModal} />
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/cotizaciones" element={<CotizacionesPage />} />
        </Routes>
      </main>
      <WhatsAppButton/>
      <Footer />

      {/* Mostrar el modal si está activo */}
      {showLoginModal && <LoginModal closeLoginModal={closeLoginModal} />}
    </>
  );
}

export default App;
