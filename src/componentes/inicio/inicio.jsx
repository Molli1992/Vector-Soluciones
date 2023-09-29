import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

function Inicio() {
  const navigate = useNavigate();

  const onClickRouteNosotros = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");

    inicio.classList.remove("active");
    nosotros.classList.add("active");
    proveedores.classList.remove("active");
    cobranzas.classList.remove("active");
    navigate("/quienes-somos");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickRoutePagoProveedores = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.add("active");
    cobranzas.classList.remove("active");
    navigate("/pago-proveedores");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickRouteCobranzarRegulares = () => {
    let inicio = document.getElementById("inicio");
    let nosotros = document.getElementById("nosotros");
    let proveedores = document.getElementById("proveedores");
    let cobranzas = document.getElementById("cobranzas");

    inicio.classList.remove("active");
    nosotros.classList.remove("active");
    proveedores.classList.remove("active");
    cobranzas.classList.add("active");
    navigate("/cobranzas-regulares");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="body-inicio">
      <div className="container-inicio-1">
        <div className="container-inicio-1-container">
          <div className="container-inicio-1-container-text">
            <h1>Vector Soluciones</h1>
            <h3>Solución en cobranza</h3>
            <div>
              <text>
                Estamos comprometidos con el crecimiento constante y la mejora
                continua para innovar en la gestión de cobros y así ayudar a
                nuestros clientes a alcanzar sus metas financieras.
              </text>
            </div>
            <button onClick={onClickRouteNosotros} className="button-inicio">
              Quienes Somos
            </button>
          </div>
        </div>
      </div>

      <div className="container-inicio-2">
        <div className="container-inicio-2-div">
          <h1>Pago Proveedores</h1>
          <button
            onClick={onClickRoutePagoProveedores}
            className="button-inicio position-button-inicio"
          >
            Mas informacion
          </button>
        </div>
        <div className="container-inicio-2-div-2">
          <text>
            Nuestro enfoque en el servicio de pago a proveedores se centra en
            proporcionar soluciones adaptadas a medida para cada cliente. Sea
            que necesiten gestionar completamente el proceso de pago o solo una
            parte específica del mismo, nos aseguramos de ofrecer un servicio
            personalizado que se ajuste a sus necesidades.
          </text>
        </div>
      </div>

      <div className="container-inicio-2 displayNone">
        <div className="container-inicio-2-div-2">
          <text>
            Nuestra atención en la gestión rutinaria de cobros se enfoca en
            proporcionar soluciones integrales que abarquen todo el proceso de
            cobranzas. Nos adaptamos cuidadosamente a las necesidades
            individuales de nuestros clientes para asegurar un servicio eficaz y
            de alta calidad.
          </text>
        </div>

        <div className="container-inicio-2-div nueva-img">
          <h1>Cobranzas Regulares</h1>
          <button
            onClick={onClickRouteCobranzarRegulares}
            className="button-inicio position-button-inicio"
          >
            Mas informacion
          </button>
        </div>
      </div>

      <div className="container-inicio-2 displayBlock">
        <div className="container-inicio-2-div nueva-img">
          <h1>Cobranzas Regulares</h1>
          <button
            onClick={onClickRouteCobranzarRegulares}
            className="button-inicio position-button-inicio"
          >
            Mas informacion
          </button>
        </div>
        <div className="container-inicio-2-div-2">
          <text>
            Nuestra atención en la gestión rutinaria de cobros se enfoca en
            proporcionar soluciones integrales que abarquen todo el proceso de
            cobranzas. Nos adaptamos cuidadosamente a las necesidades
            individuales de nuestros clientes para asegurar un servicio eficaz y
            de alta calidad.
          </text>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
