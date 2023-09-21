import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import Header from "./componentes/header/header";
import Inicio from "./componentes/inicio/inicio";


function App() {
  return (

 <div className="body">

    <BrowserRouter>

    <Header />

      <Routes>

        <Route path="/" element={<Inicio />} />

      </Routes>

    </BrowserRouter>

 </div>

  );

};

export default App;
