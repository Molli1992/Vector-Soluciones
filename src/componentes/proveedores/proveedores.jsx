import React from "react";
import { Link } from "react-router-dom";
import "./proveedores.css";

function Proveedores() {
  return (
    <div className="body-proveedores">
      <div className="container-nosotros-1 imgBackground-proveedores">
        <div className="container-nosotros-1-header">
          <h1>Servicio pago a proveedores personalizado</h1>
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-2-div-1">
          <div className="line-nosotros"></div>
          <h1>Pago Proveedores</h1>
        </div>

        <div className="container-nosotros-2-div-2">
          <text>
            Nuestro servicio de pago a proveedores se enfoca en ofrecer
            soluciones adaptadas a las necesidades de cada uno de nuestros
            clientes. Ya sea que necesiten una gestión completa del proceso de
            pago o solo una parte específica del mismo, nos aseguramos de
            brindar un servicio personalizado que cumpla con sus requerimientos.
          </text>
          <text>
            Nos encargamos de la coordinación y seguimiento de todos los pagos a
            proveedores, garantizando que se realicen en tiempo y forma. Además,
            nos aseguramos de que todos los procesos sean transparentes y
            confiables, para generar una relación de confianza con nuestros
            clientes y sus proveedores
          </text>
          <text>
            Nuestro equipo de profesionales altamente capacitados y con
            experiencia en el mercado de pagos a proveedores, junto con nuestra
            tecnología de última generación, nos permiten ofrecer un servicio de
            calidad y eficiente.
          </text>
          <text>
            Estamos comprometidos con la mejora continua y la innovación en
            nuestros servicios, para seguir brindando soluciones efectivas y
            adaptadas a las necesidades específicas de cada cliente en el área
            de pago a proveedores.
          </text>
        </div>
      </div>

      <div className="body-proveedores-2">
        <div className="container-proveedores-1">
          <h1>Servicios</h1>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">Atencion de Proveedores</Link>
          </div>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">Preaviso de pago</Link>
          </div>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">
              Confeccion de ordenes de pago
            </Link>
          </div>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">
              Emision de instrumentos de pago
            </Link>
          </div>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">Entrega de valores</Link>
          </div>

          <div className="container-arrow-text-proveedores">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8000"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
            <Link className="link-proveedores">
              Aplicaciones y conciliaciones de cuentas a pagar
            </Link>
          </div>
        </div>
      </div>

      <div className="container-proveedores-2">
        <div className="container-proveedores-2-left">
          <h1>Nuestras Experiencias</h1>

          <div>
            <text>
              Diseñamos procesos personalizados, asumiendo la total
              responsabilidad del ciclo de pago a proveedores con garantía y
              calidad de servicio.
            </text>
          </div>
        </div>

        <div className="container-proveedores-2-left">
          <h1>Beneficios</h1>

          <div>
            <text>
              Delegue una tarea administrativa no esencial a expertos para
              centrarse en su negocio principal y agregar más valor.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proveedores;
