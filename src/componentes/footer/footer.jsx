import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="body-footer">
      <div className="container-1-footer">
        <Link to={"quienes-somos"} className="link-footer" onClick={onClick}>
          Quienes Somos
        </Link>
        <div className="line-footer"></div>
        <Link to={"pago-proveedores"} className="link-footer" onClick={onClick}>
          Pago Proveedores
        </Link>
        <div className="line-footer"></div>
        <Link
          to={"cobranzas-regulares"}
          className="link-footer"
          onClick={onClick}
        >
          Cobranzas Regulares
        </Link>
      </div>
      <div className="container-2-footer">
        <text>
          © 2023 Union Ads Technology S.A. Todos los derechos reservados.
        </text>
      </div>
      <div className="arrow-container-footer" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="white"
          class="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Footer;
