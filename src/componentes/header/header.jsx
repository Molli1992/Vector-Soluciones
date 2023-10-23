import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo/logo-vector-3-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const onClickRoute = () => {
    navigate("/contacto");
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.remove("active");
    login.classList.remove("active");
    cobranzas.classList.remove("active");
    setState(false);
  };

  const activeInicio = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.add("active");
    nosotros.classList.remove("active");
    proveedores.classList.remove("active");
    login.classList.remove("active");
    cobranzas.classList.remove("active");
  };

  const activeNosotros = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.remove("active");
    nosotros.classList.add("active");
    proveedores.classList.remove("active");
    login.classList.remove("active");
    cobranzas.classList.remove("active");
  };

  const activeProveedores = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.add("active");
    login.classList.remove("active");
    cobranzas.classList.remove("active");
  };

  const activeCobranzas = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.remove("active");
    login.classList.remove("active");
    cobranzas.classList.add("active");
  };

  const activeLogin = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");
    let login = document.getElementById("login");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.remove("active");
    cobranzas.classList.remove("active");
    login.classList.add("active");
  };

  return (
    <div className="body-header">
      <div className="header-container-left">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="header-container-rigth">
        <Link
          id="inicio"
          to={"/"}
          className="link-header active"
          onClick={activeInicio}
        >
          Inicio
        </Link>

        <Link
          id="nosotros"
          to={"quienes-somos"}
          className="link-header"
          onClick={activeNosotros}
        >
          Quienes Somos
        </Link>

        <Link
          id="proveedores"
          to={"pago-proveedores"}
          className="link-header"
          onClick={activeProveedores}
        >
          Pago Proveedores
        </Link>

        <Link
          id="cobranzas"
          to={"cobranzas-regulares"}
          className="link-header"
          onClick={activeCobranzas}
        >
          Cobranzas Regulares
        </Link>

        <Link
          id="login"
          to={"login"}
          className="link-header"
          onClick={activeLogin}
        >
          Login
        </Link>

        <button onClick={onClickRoute}>Contacto</button>
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
            <Link
              id="inicio-2"
              to={"/"}
              className="link-header-responsive"
              onClick={() => {
                onClick();
              }}
            >
              Inicio
            </Link>

            <Link
              id="nosotros-2"
              to={"quienes-somos"}
              className="link-header-responsive"
              onClick={() => {
                onClick();
              }}
            >
              Quienes Somos
            </Link>

            <Link
              id="proveedores-2"
              to={"pago-proveedores"}
              className="link-header-responsive"
              onClick={() => {
                onClick();
              }}
            >
              Pago Proveedores
            </Link>

            <Link
              id="cobranzas-2"
              to={"cobranzas-regulares"}
              className="link-header-responsive"
              onClick={() => {
                onClick();
              }}
            >
              Cobranzas Regulares
            </Link>
            <button onClick={onClickRoute}>Contacto</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
