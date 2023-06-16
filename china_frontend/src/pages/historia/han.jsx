import React from "react";
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/han_style.css";

/**
 * Componente principal para mostrar la información de la Dinastía Han.
 */

export function Din_Han() {
  const [index, setIndex] = useState(0);

  /**
   *
   *Cambia el índice del carrusel al seleccionar una diapositiva.
   *@param {number} selectedIndex - El índice de la diapositiva seleccionada.
   *@param {Object} e - El evento de selección.
   *
   **/

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className="titulo-han text-center">Dinastia HAN</h1>
      <div className="container page-han text-center">
        <div className="row">
          <div
            className="col-sm"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="sketchfab-embed-wrapper">
              <iframe
                style={{
                  width: "500px",
                  height: "680px",
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
                src="https://sketchfab.com/models/623e483978cf40ee9de466f6623c7565/embed"
              ></iframe>
            </div>
          </div>
          <div
            className="col-sm"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="info-han">
              <p>
                La Dinastía Han, que gobernó desde el 206 a.C. hasta el 220
                d.C., fue una de las dinastías más importantes y duraderas en la
                historia de China. Se divide en dos períodos principales: la
                Dinastía Han Occidental y la Dinastía Han Oriental. A
                continuación, te proporciono información detallada sobre la
                Dinastía Han:
              </p>
              <p>
                1. Fundación de la Dinastía Han: La Dinastía Han fue fundada por
                Liu Bang, también conocido como el Emperador Gaozu de Han. Liu
                Bang fue un líder rebelde que derrocó a la Dinastía Qin y
                estableció su propio gobierno. Bajo su reinado, se estableció un
                gobierno centralizado y se implementaron políticas para promover
                la estabilidad y el bienestar del país.
              </p>
              <p>
                2. Confucianismo como ideología dominante: Durante la Dinastía
                Han, el confucianismo se convirtió en la ideología dominante del
                estado. Se adoptaron las enseñanzas de Confucio como base para
                la educación y la conducta social. El confucianismo enfatizaba
                la importancia de la moralidad, el respeto a la autoridad y la
                armonía social, y tuvo una influencia duradera en la sociedad
                china.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/emperador-wendi.webp"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Emperador Wendi
                  </h3>
                  <p
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    También conocido como Liu Heng, fue el fundador de la
                    Dinastía Han Occidental y gobernó desde el 180 a.C. hasta el
                    157 a.C. Durante su reinado, Wendi llevó a cabo una serie de
                    reformas significativas que sentaron las bases para la
                    estabilidad y el crecimiento del imperio.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/rebelion-de-los-turbantes-amarillos.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Rebelión de los Turbantes Amarillos</h3>
                  <p>
                    La más importante de todas estas rebeliones fue la de los
                    turbantes amarillos en las planicies del norte de China, la
                    principal zona agraria del país, la mayor parte del pueblo
                    consideraba al gobierno corrupto e incapaz.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carro-de-guerra-han-occidental.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Carro de guerra Han Occidental
                  </h3>
                  <p
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Solo se utilizaban para el transporte de mandos, desde donde
                    observaban el campo de batalla y daban órdenes, durante la
                    dinastía Han Oriental, desaparecieron de los ejércitos
                    chinos. Autor Michael Perry.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row info-han" style={{ marginTop: "2rem" }}>
            <p>
              Confucianismo como ideología dominante: Durante la Dinastía Han,
              el confucianismo se convirtió en la ideología dominante del
              estado. Se adoptaron las enseñanzas de Confucio como base para la
              educación y la conducta social. El confucianismo enfatizaba la
              importancia de la moralidad, el respeto a la autoridad y la
              armonía social, y tuvo una influencia duradera en la sociedad
              china.
            </p>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="sketchfab-embed-wrapper">
              <iframe
                style={{
                  width: "1080px",
                  height: "580px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                }}
                title="Guan yu"
                frameBorder="0"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/426931a8649149a89e08c0c76b003a8a/embed"
              ></iframe>
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: "normal",
                  fontFamily: "Noto Serif",
                  margin: "5px",
                  color: "black",
                  textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)"
                }}
              >
                General Guan Yu
              </p>
            </div>
          </div>
        </div>
        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Dinastias"
            imagen="/images/dinastia-icono.png"
            identificador={123}
            href="/dinastias"
          />
        </div>
      </div>
    </>
  );
}
