import React, { useState } from "react";
import "./header.css";

function Header() {
  const [state, setState] = useState(false);

  const onClick = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="body-header">
      <div className="header-container-left">
        <img
          src="https://unionadtech.com/wp-content/themes/yootheme/cache/de/logo-de28899c.png"
          alt="Logo"
        />
      </div>

      <div className="header-container-rigth">
        <text>Inicio</text>
        <text>Quienes Somos</text>
        <text>Pago Proveedores</text>
        <text>Cobranzas Regulares</text>
        <button>Contacto</button>
      </div>

      <div className="svg-container" onClick={onClick}>
        {state === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}
      </div>

      {state === true ? (
        <div className="header-container-responsive">
          <div className="container-link-responsive">
            <text>Inicio</text>
            <text>Quienes Somos</text>
            <text>Pago Proveedores</text>
            <text>Cobranzas Regulares</text>
            <button>Contacto</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
