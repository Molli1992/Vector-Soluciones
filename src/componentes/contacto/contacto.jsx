import React from "react";
import "./contacto.css";

function Contacto() {
  return (
    <div className="body-contacto">
      <div className="container-contaco-1">
        <h1>
          Contáctanos para más información sobre nuestros servicios para tu
          empresa
        </h1>
        <h3>vectors@gmail.com</h3>
      </div>

      <div className="container-contacto-2">
        <h3>¿Tienes alguna consulta?</h3>

        <div className="container-text-contacto">
          <text>Nombre y Apellido *</text>
        </div>

        <div className="container-inputs-contacto">
          <input className="input-contacto" placeholder="Nombre" />
          <input className="input-contacto" placeholder="Apellido" />
        </div>

        <div className="container-text-contacto">
          <text>Email *</text>
        </div>

        <input className="input-contacto" placeholder="Email" />

        <div className="container-text-contacto">
          <text>Comentarios</text>
        </div>

        <textarea
          className="text-area-contacto"
          placeholder="Dejanos aca tu consulta"
        />

        <div>
          <button className="button-contacto">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
