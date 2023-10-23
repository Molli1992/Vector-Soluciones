import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import Header from "./componentes/header/header";
import Inicio from "./componentes/inicio/inicio";
import Footer from "./componentes/footer/footer";
import Nosotros from "./componentes/nosotros/nosotros";
import Proveedores from "./componentes/proveedores/proveedores";
import Cobranzas from "./componentes/cobranzas/cobranzas";
import Contacto from "./componentes/contacto/contacto";
import Servicios from "./componentes/servicios/servicios";
import Login from "./componentes/login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="body-app">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quienes-somos" element={<Nosotros />} />
          <Route path="/pago-proveedores" element={<Proveedores />} />
          <Route path="/cobranzas-regulares" element={<Cobranzas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/financial-services" element={<Servicios />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
