import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/qin_style.css";
/**
 * Componente principal para mostrar la información de la Dinastía Qin.
 */

export function Din_Qin() {
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
      <h1 className="titulo-qin text-center">Dinastia QIN</h1>
      <div className="container page-qin text-center">
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
                src="https://sketchfab.com/models/c52b4448386d46f4ac42fac77890a512/embed"
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
            <div className="info-qin">
              <p>
                La Dinastía Qin, que gobernó desde el 221 a.C. hasta el 206
                a.C., fue un período de gran importancia en la historia de
                China. Fue durante la Dinastía Qin que se logró la unificación
                de China bajo un solo gobierno centralizado y se sentaron las
                bases para el futuro imperio chino. A continuación, te
                proporciono información detallada sobre la Dinastía Qin:
              </p>
              <p>
                1. Unificación de China: La Dinastía Qin fue fundada por el
                emperador Qin Shi Huangdi, también conocido como Qin Shi Huang.
                Antes de su reinado, China estaba dividida en varios estados en
                constante conflicto. Qin Shi Huangdi llevó a cabo una serie de
                campañas militares exitosas y logró la unificación de China,
                poniendo fin a los períodos de guerra y estableciendo una
                estructura centralizada de gobierno.
              </p>
              <p>
                2. Obras públicas y proyectos de construcción: Durante la
                Dinastía Qin, se llevaron a cabo numerosos proyectos de
                construcción a gran escala. Uno de los proyectos más famosos es
                la Gran Muralla China, que se construyó para defender las
                fronteras del reino contra invasiones externas. También se
                realizaron obras de infraestructura como la construcción de
                carreteras y canales para mejorar la comunicación y el
                transporte en todo el país.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/escritura-durante-la-dinastia-qin.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    Homologación de la escritura durante la dinastía Qin o Ch’in
                  </h3>
                  <p>
                    Se pasó a usar el estilo zhuanshu que permitía el uso del
                    pincel y que ha perdurado hasta la actualidad.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/gran-muralla-china-durante-la-dinastia-qin-o-chin.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Gran Muralla China durante la dinastía Qin
                  </h3>
                  <p
                    style={{
                      color: "black",
                      backgroundColor: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    La muralla de Qin debió de ser de adobe con torres de
                    vigilancia cuadradas, de madera, escalonadas a cierta
                    distancia. La mayoría era una construcción modesta hecha con
                    tierra apisonada y madera, uniendo las murallas de tierra
                    que se habían levantado en el periodo de los Reinos
                    Combatientes llegando a una longitud total de unos 2.000
                    kilómetros.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/Guerreros-de-terracota.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Guerreros de Terracota</h3>
                  <p>
                    El emperador dedicó cerca de 38 años a construir el
                    mausoleo, dejándonos el legado de su ejército de terracota
                    en Xian cerca de su tumba. Este ejército de unos 10.000
                    hombres estaba compuesto de ballesteros (300), arqueros
                    (300) que llevaban un carcaj con 100 flechas, jinetes (100),
                    infantería (7.000) y carros (250). Las tropas llevaban
                    arcos, espadas, lanzas y ballestas auténticas, las
                    aleaciones de metal eran muy sofisticadas para la época,
                    todavía estaban afiladas cuando se descubrieron y las puntas
                    de flecha contenían plomo para hacerlas venenosas.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row info-qin" style={{ marginTop: "2rem" }}>
            <p>
              La Dinastía Qin fue corta pero dejó un legado duradero en la
              historia de China. Aunque el gobierno de Qin Shi Huangdi fue
              autoritario y represivo en muchos aspectos, sentó las bases para
              la futura gobernanza imperial en China. Sus reformas
              administrativas, la unificación del país y los proyectos de
              construcción masivos sentaron las bases para la posterior Dinastía
              Han y el imperio chino.
            </p>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col">
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
                  src="https://sketchfab.com/models/04afa6c71d7244c58d7bb9fa8a939f27/embed"
                ></iframe>
              </div>
            </div>
            <div className="col">
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
                  src="https://sketchfab.com/models/ded2697cd0a2413a95fa5a9b478bc99c/embed"
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
                  Soldados de Terracota
                </p>
              </div>
            </div>
            <div className="col">
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
                  src="https://sketchfab.com/models/9746027fbe934fab9576930a037257c3/embed"
                ></iframe>
              </div>
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
