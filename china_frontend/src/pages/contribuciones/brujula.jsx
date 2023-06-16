import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/brujula_style.css";

/**
 * Componente de Brujula.
 *
 * Este componente muestra la interfaz de la información relacionada con la invención de la brujula en el modulo de contribuciones
 * con sus respectivos modelos. 
 */


export function Brujula() {
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
      <h1 className="titulo-brujula text-center">Invención de la brújula</h1>
      <div className="container page-brujula text-center">
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
                src="https://sketchfab.com/3d-models/brujula-de-jack-sparrow-55dfcde675a447e8a602f7c9f5bf1d11/embed"
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
            <div className="info-brujula">
              <p>
                La invención de la brújula es uno de los logros más importantes de la antigua China.
                Aquí tienes información detallada sobre su desarrollo y su impacto:

              </p>


              <p>
                <strong>Origen y desarrollo:</strong>

                <br></br>

                La brújula magnética fue inventada en China durante la dinastía Han, alrededor del siglo II a.C.
                Originalmente, se utilizaba una cuchara de piedra imantada, conocida como "piedra imán",
                para detectar los campos magnéticos. Posteriormente, se desarrolló una versión más
                refinada utilizando una aguja de hierro magnetizada colocada sobre un objeto
                flotante en agua para señalar la dirección.

              </p>
              <p>
                <strong>Impacto Historico:</strong>

                <br></br>

                La brújula tuvo un impacto revolucionario en la exploración y el comercio marítimo,
                ya que permitía a los navegantes aventurarse más lejos en el océano con mayor confianza.
                Contribuyó al desarrollo de la Ruta de la Seda y facilitó el intercambio cultural y
                comercial entre China y otras civilizaciones.La brújula también fue crucial para la
                navegación fluvial, la construcción de canales y el desarrollo de la infraestructura
                de transporte.


              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>


              <Carousel.Item>
                <iframe
                  style={{
                    width: "1000px",
                    height: "500px",
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
                  src="https://www.youtube.com/embed/H4Slksy13gY"
                ></iframe>


              </Carousel.Item>


              <Carousel.Item>
                <iframe
                  style={{
                    width: "1000px",
                    height: "500px",
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
                  src="https://sketchfab.com/3d-models/old-compass-49dd4dbfc330420f9520126bb8460652/embed"
                ></iframe>
                <Carousel.Caption>
                  <h3>
                    Principio de funcionamiento de la brujula:
                  </h3>
                  <p>
                    El principio de funcionamiento de la brújula china se basaba en las propiedades magnéticas de la
                    aguja. La aguja magnetizada tendía a alinearse con el campo magnético terrestre, apuntando hacia
                    el polo norte magnético. Esto permitía a los navegantes chinos determinar la dirección y orientarse
                    durante sus viajes.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>




            </Carousel>

            {/*
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
            </div>*/}
          </div>
        </div>
        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Aportes"
            imagen="/images/icono-contribuciones.png"
            identificador={123}
            href="/ver-contribuciones"
          />
        </div>
      </div>
    </>
  );
}



