import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo/logo-vector-2-removebg-preview.png";
import { useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const [state, setState] = useState(false);
  const [inicio, setInicio] = useState(false);
  const [nosotros, setNostros] = useState(false);
  const [proveedores, setProveedores] = useState(false);
  const [cobranzas, setCobranzas] = useState(false);
  const [loop, setLopp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const onClick = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const onClickRoute = () => {
    setState(false);
    navigate("/contacto");
  };

  const onClickStateInicio = () => {
    if (inicio === false) {
      setInicio(true);
      setNostros(false);
      setProveedores(false);
      setCobranzas(false);
    }
  };

  const onClickStateNostros = () => {
    if (nosotros === false) {
      setNostros(true);
      setInicio(false);
      setProveedores(false);
      setCobranzas(false);
    }
  };

  const onClickStateProveedores = () => {
    if (proveedores === false) {
      setProveedores(true);
      setNostros(false);
      setInicio(false);
      setCobranzas(false);
    }
  };

  const onClickStateCobranzas = () => {
    if (cobranzas === false) {
      setCobranzas(true);
      setNostros(false);
      setInicio(false);
      setProveedores(false);
    }
  };

  if (location.pathname === "/" && loop === false) {
    console.log("hola");
    setLopp(true);
    setInicio(true);
  }

  if (location.pathname === "/quienes-somos" && loop === false) {
    console.log("hola");
    setLopp(true);
    setNostros(true);
  }

  if (location.pathname === "/pago-proveedores" && loop === false) {
    console.log("hola");
    setLopp(true);
    setProveedores(true);
  }

  if (location.pathname === "/cobranzas-regulares" && loop === false) {
    console.log("hola");
    setLopp(true);
    setCobranzas(true);
  }
  return (
    <div className="body-header">
      <div className="header-container-left">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="header-container-rigth">
        {inicio === false ? (
          <Link to={"/"} className="link-header" onClick={onClickStateInicio}>
            Inicio
          </Link>
        ) : (
          <Link to={"/"} className="link-header-2">
            Inicio
          </Link>
        )}

        {nosotros === false ? (
          <Link
            to={"quienes-somos"}
            className="link-header"
            onClick={onClickStateNostros}
          >
            Quienes Somos
          </Link>
        ) : (
          <Link to={"quienes-somos"} className="link-header-2">
            Quienes Somos
          </Link>
        )}

        {proveedores === false ? (
          <Link
            to={"pago-proveedores"}
            className="link-header"
            onClick={onClickStateProveedores}
          >
            Pago Proveedores
          </Link>
        ) : (
          <Link to={"pago-proveedores"} className="link-header-2">
            Pago Proveedores
          </Link>
        )}

        {cobranzas === false ? (
          <Link
            to={"cobranzas-regulares"}
            className="link-header"
            onClick={onClickStateCobranzas}
          >
            Cobranzas Regulares
          </Link>
        ) : (
          <Link to={"cobranzas-regulares"} className="link-header-2">
            Cobranzas Regulares
          </Link>
        )}
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
            <Link to={"/"} className="link-header-responsive" onClick={onClick}>
              Inicio
            </Link>
            <Link
              to={"quienes-somos"}
              className="link-header-responsive"
              onClick={onClick}
            >
              Quienes Somos
            </Link>
            <Link
              to={"pago-proveedores"}
              className="link-header-responsive"
              onClick={onClick}
            >
              Pago Proveedores
            </Link>
            <Link
              to={"cobranzas-regulares"}
              className="link-header-responsive"
              onClick={onClick}
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
