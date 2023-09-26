import React from "react";
import { useNavigate } from "react-router-dom";
import "./nosotros.css";

function Nosotros() {
  const navigate = useNavigate();

  const onClickRoutePagoProveedores = () => {
    navigate("/pago-proveedores");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickRouteCotacto = () => {
    navigate("/contacto");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickRouteServices = () => {
    navigate("/financial-services");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1 imgBackground-nosotros">
        <div className="container-nosotros-1-header">
          <h1>Efectividad e Innovación en Soluciones de Cobranzas</h1>
        </div>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-2-div-1">
          <div className="line-nosotros"></div>
          <h1>Quienes Somos</h1>
        </div>

        <div className="container-nosotros-2-div-2">
          <text>
            Nuestra empresa nació con el objetivo de ayudar a las empresas a
            optimizar su gestión de cobranzas. Desde nuestros inicios, nos
            enfocamos en brindar soluciones efectivas y personalizadas para cada
            uno de nuestros clientes.
          </text>
          <text>
            Contamos con un equipo de profesionales altamente capacitados y una
            tecnología de vanguardia para ofrecer un servicio de primer nivel.
          </text>
          <text>
            Nos enfocamos en la transparencia y la honestidad en todas nuestras
            operaciones, y creemos que una comunicación cercana y efectiva es
            fundamental para el éxito de nuestros clientes.
          </text>
          <text>
            Estamos comprometidos con el crecimiento constante y la mejora
            continua para seguir innovando en la gestión de cobranzas y así
            ayudar a nuestros clientes a alcanzar sus objetivos financieros.
          </text>
          <text>
            Confiamos en que, con nuestra dedicación y experiencia, podemos
            convertirnos en una solución confiable y efectiva para la gestión de
            cobranzas.
          </text>
        </div>
      </div>

      <div className="conatiner-nosotros-3">
        <div onClick={onClickRoutePagoProveedores} className="card-nosotros">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#213B90"
            class="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
          </svg>
          <h1>Gestion</h1>
          <text>Optimiza tus cobranzas con un servicios especializado</text>
        </div>

        <div onClick={onClickRouteCotacto} className="card-nosotros">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#213B90"
            class="bi bi-emoji-smile"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          <h1>Confianza</h1>
          <text>Confia en nosotros para la gestion de cobranzas efectiva</text>
        </div>

        <div onClick={onClickRouteServices} className="card-nosotros">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#213B90"
            class="bi bi-globe2"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
          </svg>
          <h1>Innovacion</h1>
          <text>
            Soluciones innovadoras para una gestion de cobranza eficiente
          </text>
        </div>

        <div onClick={onClickRouteServices} className="card-nosotros">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#213B90"
            class="bi bi-check2"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
          <h1>Resultados</h1>
          <text>Resultados exitosos y garantizados para tus cobranzas</text>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
