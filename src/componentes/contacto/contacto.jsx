import React, { useState } from "react";
import Swal from "sweetalert2";
import "./contacto.css";

function Contacto() {
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    comentarios: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (
      state.nombre === "" ||
      state.apellido === "" ||
      state.email === "" ||
      state.comentarios === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Mensaje enviado correctamente!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        setState({
          nombre: "",
          apellido: "",
          email: "",
          comentarios: "",
        });
      });
    }
  };

  return (
    <div className="body-contacto">
      <div className="container-contaco-1">
        <h1>
          Contáctanos para más información sobre nuestros servicios para tu
          empresa
        </h1>
        <h3>info@vectorsoluciones.com</h3>
      </div>

      <div className="container-contacto-2">
        <h3>¿Tienes alguna consulta?</h3>

        <div className="container-text-contacto">
          <text>Nombre y Apellido *</text>
        </div>

        <div className="container-inputs-contacto">
          <input
            name="nombre"
            onChange={onChange}
            className="input-contacto"
            placeholder="Nombre"
            value={state.nombre}
          />
          <input
            name="apellido"
            onChange={onChange}
            className="input-contacto"
            placeholder="Apellido"
            value={state.apellido}
          />
        </div>

        <div className="container-text-contacto">
          <text>Email *</text>
        </div>

        <input
          name="email"
          onChange={onChange}
          className="input-contacto"
          placeholder="Email"
          value={state.email}
        />

        <div className="container-text-contacto">
          <text>Comentarios</text>
        </div>

        <textarea
          name="comentarios"
          onChange={onChange}
          className="text-area-contacto"
          placeholder="Dejanos aca tu consulta"
          value={state.comentarios}
        />

        <div>
          <button onClick={onSubmit} className="button-contacto">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
