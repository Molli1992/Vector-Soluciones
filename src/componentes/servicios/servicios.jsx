import React from "react";
import "./servicios.css";

function Servicios() {
  return (
    <div className="body-servicios">
      <img
        src="https://unionadtech.com/wp-admin/admin-ajax.php?action=kernel&p=image&src=file%3Dwp-content%252Fuploads%252Fyootheme%252Ffinancial-services-hero.jpg%26thumbnail%3D1560%2C%2C&hash=d04ba0ae&quot"
        alt="servicios"
        className="img-servicios"
      />

      <div className="container-texts-servicios">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bi bi-bar-chart"
          viewBox="0 0 16 16"
        >
          <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
        </svg>
        <h1>Finance & Restructuring</h1>
        <text>
          Lorem ipsum dolor sit amet consete tursad ing elitr, sed diam nonumy
          eirmod
        </text>
      </div>

      <div className="container-flex-servicios">
        <div>
          <div className="container-texts-servicios-2">
            <h3>01</h3>
            <h1>Capital Markets Services</h1>
            <text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergre takimata Lorem ipsum dolor sit amet.
            </text>
          </div>

          <div className="container-texts-servicios-2">
            <h3>02</h3>
            <h1>Hedge Fund Management</h1>
            <text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.
            </text>
          </div>
        </div>

        <div className="container-texts-servicios-2">
          <h3>03</h3>
          <h1>Insurance Brokerage</h1>
          <div className="container-text-margin-servicios">
            <text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat.
            </text>
          </div>

          <div className="container-text-margin-servicios">
            <text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat.
            </text>
          </div>

          <div className="container-text-margin-servicios">
            <text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
