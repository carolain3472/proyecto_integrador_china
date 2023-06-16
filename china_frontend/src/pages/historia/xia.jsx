import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/xia_style.css";

/**
 * Componente principal para mostrar la información de la Dinastía Xia.
 */

export function Din_Xia() {
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
      <h1 className="titulo-xia text-center">Dinastia XIA</h1>
      <div className="container page-xia text-center">
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
                title="Guerreiro de Xi´an"
                frameBorder="0"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/a32a121d308a4c91a0b9d606b577365e/embed"
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
            <div className="info-xia">
              <p>
                La Dinastía Xia es considerada la primera dinastía legendaria de
                la antigua China, aunque no hay evidencia arqueológica sólida
                para respaldar su existencia. Según los registros históricos
                chinos, la Dinastía Xia gobernó aproximadamente desde el año
                2070 a.C. hasta el 1600 a.C., pero su cronología y los detalles
                de sus gobernantes y logros son objeto de debate.
              </p>
              <p>
                Según la tradición, la Dinastía Xia fue fundada por Yu el
                Grande, quien supuestamente controló las inundaciones del río
                Amarillo y estableció un gobierno centralizado. Sin embargo,
                gran parte de lo que se sabe sobre la Dinastía Xia se basa en
                relatos mitológicos y leyendas transmitidas oralmente, lo que
                dificulta la separación de la realidad histórica de la fantasía.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/yu-elgrande.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Yu El Grande</h3>
                  <p>
                    También conocido como Yu el Constructor, es una figura
                    legendaria en la historia china.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/palacio-erlitou.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Yacimiento de Erlitou</h3>
                  <p>
                    Este sitio arqueológico es considerado por muchos como el
                    lugar de la antigua capital de la legendaria Dinastía Xia,
                    aunque aún existe debate sobre este tema.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/maqueta-yacimiento-erlitou.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Maqueta del Palacio de los Reyes Xia en Erlitou</h3>
                  <p>
                    Representación a escala del antiguo palacio que se cree que
                    existió durante la Dinastía Xia en China. Dado que no hay
                    evidencia arqueológica directa del palacio, su diseño y
                    aspecto exactos son objeto de especulación y debate.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
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
                src="https://sketchfab.com/models/62db2057c0c7474e8b3a324016187149/embed"
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
                Yu The Great
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
            identificador='historia'
            href="/dinastias"
            categoria= 'xia'
          />
        </div>
      </div>
    </>
  );
}
