import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/About";
import Categorias from "./pages/Categorias";
import Contacto from "./pages/Contacto";
import CotizacionesPage from "./pages/Cotizaciones";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/cotizaciones" element={<CotizacionesPage />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />

    </>
  );
}

export default App;
