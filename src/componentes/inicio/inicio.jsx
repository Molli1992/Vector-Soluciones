import React from "react";
import "./inicio.css";

function Inicio() {
  return (
    <div className="body-inicio">
      <div className="container-inicio-1">
        <div className="container-inicio-1-container">
          <div className="container-inicio-1-container-text">
            <h1>Unión Ads Technology</h1>
            <h3>Solución en cobranza</h3>
            <div>
              <text>
                Simplifica y optimiza tus procesos financieros con nuestra
                solución de gestión de cobros y pagos. Ahorra tiempo y reduce el
                estrés de la gestión financiera
              </text>
            </div>
            <button className="button-inicio">Quienes Somos</button>
          </div>
        </div>
      </div>

      <div className="container-inicio-2">
        <div className="container-inicio-2-div">
          <h1>Pago Proveedores</h1>
          <button className="button-inicio position-button-inicio">
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
          <button className="button-inicio position-button-inicio">
            Mas informacion
          </button>
        </div>
      </div>

      <div className="container-inicio-2 displayBlock">
        <div className="container-inicio-2-div nueva-img">
          <h1>Cobranzas Regulares</h1>
          <button className="button-inicio position-button-inicio">
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
