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
                Simplifica y optimiza tus procesos financieros con nuestra
                solución de gestión de cobros y pagos. Ahorra tiempo y reduce el
                estrés de la gestión financiera
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
            Ofrecemos soluciones de gestión de pago a proveedores adaptadas a
            las necesidades específicas de tu negocio. Ya sea que necesites una
            gestión completa o personalizada, nuestro equipo te brindará el
            soporte necesario. ¡Contáctanos hoy y descubre cómo podemos
            ayudarte!
          </text>
        </div>
      </div>

      <div className="container-inicio-2 displayNone">
        <div className="container-inicio-2-div-2">
          <text>
            Ofrecemos soluciones de gestión de cobranzas adaptadas a las
            necesidades específicas de tu negocio. Realizamos la gestión
            completa del proceso o personalizamos nuestro servicio para
            satisfacer tus necesidades. ¡Contáctanos hoy para mejorar tu gestión
            de cobranzas!
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
            Ofrecemos soluciones de gestión de cobranzas adaptadas a las
            necesidades específicas de tu negocio. Realizamos la gestión
            completa del proceso o personalizamos nuestro servicio para
            satisfacer tus necesidades. ¡Contáctanos hoy para mejorar tu gestión
            de cobranzas!
          </text>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
