import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/zhou_style.css";

/**
 * Componente principal para mostrar la información de la Dinastía Zhou.
 */

export function Din_Zhou() {
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
      <h1 className="titulo-zhou text-center">Dinastia ZHOU</h1>
      <div className="container page-zhou text-center">
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
                src="https://sketchfab.com/models/8b566deb25ef457db4cfa041033e6a13/embed"
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
            <div className="info-zhou">
              <p>
                La Dinastía Zhou fue una de las dinastías más importantes en la
                historia de China. Gobernó aproximadamente desde el 1046 a.C.
                hasta el 256 a.C. y se divide en dos periodos principales: la
                Dinastía Zhou Occidental y la Dinastía Zhou Oriental.
              </p>
              <p>
                1. Fundación de la Dinastía Zhou: La Dinastía Zhou fue fundada
                por el rey Wu, también conocido como Rey Wu de Zhou. Según las
                leyendas, el rey Wu lideró una rebelión exitosa contra la
                Dinastía Shang, derrocando al último rey Shang y estableciendo
                la Dinastía Zhou en su lugar. Esta transición se conoce como la
                "Revolución de Zhou".
              </p>
              <p>
                2. Mandato del Cielo: La Dinastía Zhou se basó en la creencia
                del "Mandato del Cielo", que sostenía que el gobernante legítimo
                tenía el respaldo divino para gobernar. Se creía que el Cielo
                otorgaba el mandato a un gobernante justo y virtuoso, pero si un
                gobernante se volvía tiránico o incompetente, el Cielo podía
                retirar su mandato y otorgarlo a otro gobernante más digno.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/King_Wen_of_Zhou.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Rey Wen de Zhou</h3>
                  <p>
                    Gobernante de la Dinastía Zhou en el período de Zhou
                    Occidental. Se le atribuye un papel crucial en el
                    establecimiento y la consolidación de la dinastía.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/dinastia-zhou-confucio.jpeg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Las enseñanzas de Confucio</h3>
                  <p>
                    El filósofo Confucio propagaba los principios morales y
                    éticos que rigen la conducta individual y las relaciones
                    sociales, mientras la China gobernada por la dinastía Zhou
                    estaba sumida en la inmoralidad y la conspiración.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/mandato-del-cielo-zhou.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Mandato del Cielo</h3>
                  <p>
                    Según esta creencia, el Cielo otorga el derecho de gobernar
                    a un monarca legítimo y virtuoso. Se basa en la idea de que
                    el gobernante debe estar en armonía con el orden cósmico y
                    actuar en beneficio del pueblo.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row info-zhou" style={{ marginTop: "2rem" }}>
            <p>
              Durante el período de Zhou Occidental, la Dinastía Zhou alcanzó su
              apogeo y se caracterizó por una fuerte autoridad central y
              estabilidad política. El gobierno se basaba en un sistema feudal,
              donde el rey Zhou gobernaba sobre una red de estados vasallos.
              Estos estados, gobernados por nobles leales al rey, estaban
              obligados a proporcionar apoyo militar y pagar tributo al rey a
              cambio de protección y respaldo.
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
                src="https://sketchfab.com/models/6314f789bfa14dfa9608ca67b822e650/embed"
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
                El filósofo chino Confucio (551 a.C. a 479 a.C.)
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
            categoria= 'zhou'
          />
        </div>
      </div>
    </>
  );
}
