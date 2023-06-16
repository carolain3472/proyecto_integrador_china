import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import "../../scss/creencias_style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Button } from "react-bootstrap";

/**
 * Componente de la página de Creencias.
 * Muestra información sobre diferentes creencias de la antigua China.
 */

export function Creencias() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * Alternar la apertura y cierre de la barra lateral.
   *
   * Esta función cambia el estado de la variable 'isSidebarOpen' para controlar
   * si la barra lateral está abierta o cerrada. Si la barra lateral está abierta,
   * la función la cerrará y viceversa.
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [index, setIndex] = useState(0);

  /**
   *
   *Cambia el índice del carrusel al seleccionar una diapositiva.
   *@param {number} selectedIndex - El índice de la diapositiva seleccionada.
   *@param {Object} e - El evento de selección.
   *
   **/

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <button
        className={`boton-toggler ${isSidebarOpen ? "open" : ""}`}
        style={{ marginLeft: isSidebarOpen ? "310px" : "5px" }}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isSidebarOpen && (
        <div>
          <Nav_bar_perfil />
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        </div>
      )}
      <main
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
        className={`contenedor-historia ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="historia-titulo">
          <h1>Creencias</h1>
        </div>

        <div className="container page-creencias">
          <div
            className="row"
            style={{ marginTop: "2rem", marginBottom: "4rem" }}
          >
            <div className="col colCreencias">
              <div className="card prueba-tar">
                <div className="card__inner">
                  <div className="card__body card__body--front">
                    <h2 className="card__title">TAOISMO</h2>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        padding: "1rem",
                        textAlign: "justify",
                      }}
                    >
                      El taoísmo, una de las principales creencias en la antigua
                      China, se basaba en el Tao, que se traduce como "El
                      Camino". Esta filosofía enseñaba la importancia de vivir
                      en armonía con la naturaleza y seguir el flujo natural de
                      la vida. Los taoístas buscaban alcanzar el equilibrio y la
                      serenidad a través de prácticas como la meditación, el Tai
                      Chi y el cultivo de la energía vital conocida como "Qi".
                      El taoísmo también abogaba por la virtud, la humildad y la
                      simplicidad en la vida cotidiana.
                    </p>
                  </div>
                  <div className="card__body card__body--back">
                    <div className="card__title">
                      <div className="sketchfab-embed-wrapper">
                        <iframe
                          style={{
                            width: "380px",
                            height: "580px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                          }}
                          frameBorder="0"
                          allowFullScreen={true}
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          xr-spatial-tracking="true"
                          execution-while-out-of-viewport="true"
                          execution-while-not-rendered="true"
                          web-share="true"
                          src="https://sketchfab.com/models/b0990c4c81b34b31adfa9910a30e2584/embed"
                        ></iframe>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                          Simbolo Tao
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col colCreencias">
              <div className="card prueba-tar">
                <div className="card__inner">
                  <div className="card__body card__body--front">
                    <h2 className="card__title">CONFUCIANISMO</h2>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        padding: "1rem",
                        textAlign: "justify",
                      }}
                    >
                      El confucianismo, desarrollado por el filósofo Confucio,
                      fue una de las influencias más importantes en la sociedad
                      china. Esta filosofía se centraba en los valores morales,
                      la ética y el orden social. El confucianismo enfatizaba la
                      importancia de las relaciones familiares, la lealtad, el
                      respeto hacia los mayores y el cultivo de la virtud
                      personal. Se creía que siguiendo los principios
                      confucianos, se podía establecer una sociedad armoniosa y
                      una buena gobernanza.
                    </p>
                  </div>
                  <div className="card__body card__body--back">
                    <div className="card__title">
                      <div className="sketchfab-embed-wrapper">
                        <iframe
                          style={{
                            width: "380px",
                            height: "580px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                          }}
                          frameBorder="0"
                          allowFullScreen={true}
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          xr-spatial-tracking="true"
                          execution-while-out-of-viewport="true"
                          execution-while-not-rendered="true"
                          web-share="true"
                          src="https://sketchfab.com/models/2dda6f9f04124d0eb51575d068ce06bc/embed"
                        ></iframe>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                          Confucio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ marginTop: "2rem", marginBottom: "4rem" }}
          >
            <div className="col colCreencias">
              <div className="card prueba-tar">
                <div className="card__inner">
                  <div className="card__body card__body--front">
                    <h2 className="card__title">BUDISMO</h2>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        padding: "1rem",
                        textAlign: "justify",
                      }}
                    >
                      El budismo, originario de la India, se introdujo en China
                      alrededor del siglo I d.C. y se convirtió en una
                      influencia significativa en la vida espiritual de la
                      antigua China. Esta filosofía se basaba en las enseñanzas
                      del Buda y promovía la búsqueda de la iluminación y la
                      liberación del sufrimiento. Los seguidores del budismo
                      practicaban la meditación, realizaban actos de bondad y
                      buscaban alcanzar la compasión y la sabiduría. El budismo
                      coexistió con otras creencias en la antigua China y se
                      integró con las prácticas y creencias locales.
                    </p>
                  </div>
                  <div className="card__body card__body--back">
                    <div className="card__title">
                      <div className="sketchfab-embed-wrapper">
                        <iframe
                          style={{
                            width: "380px",
                            height: "580px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                          }}
                          frameBorder="0"
                          allowFullScreen={true}
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          xr-spatial-tracking="true"
                          execution-while-out-of-viewport="true"
                          execution-while-not-rendered="true"
                          web-share="true"
                          src="https://sketchfab.com/models/4bfe00013c394595b243384628a2881d/embed"
                        ></iframe>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                          Budha
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col colCreencias">
              <div className="card prueba-tar">
                <div className="card__inner">
                  <div className="card__body card__body--front">
                    <h2 className="card__title">FENG SHUI</h2>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        padding: "1rem",
                        textAlign: "justify",
                      }}
                    >
                      El Feng Shui, que significa "viento y agua", era una
                      práctica que buscaba armonizar a las personas con su
                      entorno. Se creía que la disposición de los espacios y los
                      objetos tenía un impacto en la energía y el equilibrio de
                      la vida. El Feng Shui se aplicaba en la construcción de
                      edificios, la ubicación de tumbas y la disposición de los
                      muebles en los hogares. Esta creencia buscaba aprovechar
                      las fuerzas de la naturaleza para fomentar la buena
                      fortuna y la prosperidad.
                    </p>
                  </div>
                  <div className="card__body card__body--back">
                    <div className="card__title">
                      <div className="sketchfab-embed-wrapper">
                        <iframe
                          style={{
                            width: "380px",
                            height: "580px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                          }}
                          frameBorder="0"
                          allowFullScreen={true}
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          xr-spatial-tracking="true"
                          execution-while-out-of-viewport="true"
                          execution-while-not-rendered="true"
                          web-share="true"
                          src="https://sketchfab.com/models/20f4baedfeee4a7c9bdc695265e5db3f/embed"
                        ></iframe>
                        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
                          Ba gua
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="next-back"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Boton_back
              nombre="Vestimenta"
              imagen="/images/vestimenta-icono.png"
              identificador={123}
              href="/vestimenta"
            />

            <Boton_next
              nombre="Cultura"
              imagen="/images/cultura-icon.png"
              identificador='cultura'
              href="/cultura"
              categoria='creencias'
            />
          </div>
        </div>
      </main>
    </>
  );
}
