import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/acupuntura_style.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 * Componente de Acupuntura.
 *
 * Este componente muestra la interfaz de la información relacionada con la invención de la acupuntura en el modulo de contribuciones
 * con sus respectivos modelos. 
 */

export function Acupuntura() {
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
      <h1 className="titulo-acupuntura text-center">Acupuntura</h1>
      <div className="container page-acupuntura text-center">

        <br></br>
        <br></br>
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
                src="https://sketchfab.com/3d-models/acupuncture-statue-4ef08c449b9a4a19bb01a7948caa535f/embed"

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
            <div className="info-acupuntura">
              <p>
                <strong>Origen y desarrollo:</strong>
                <br></br>
                La acupuntura se originó en China hace más de 2,000 años durante el período de la dinastía Han (206 a.C. - 220 d.C.).
                Sus principios se basan en las antiguas filosofías chinas del yin y yang, y en el concepto de Qi (energía vital) y los meridianos o canales de energía en el cuerpo.
              </p>
              <p>
                <strong>Principios de la acupuntura:</strong>
                <br></br>
                Según la teoría de la acupuntura, el cuerpo humano está atravesado por canales de energía llamados meridianos, a lo largo de los cuales fluye el Qi.
                Cuando hay un desequilibrio o bloqueo en el flujo de Qi, se cree que puede causar enfermedades o malestar.
                Mediante la inserción de agujas finas en puntos específicos a lo largo de los meridianos, se busca restablecer el equilibrio energético y promover la salud.
              </p>

              <p>
                <strong>Técnicas y aplicación:</strong>
                <br></br>
                Las agujas utilizadas en la acupuntura son muy finas y se insertan en puntos específicos del cuerpo, conocidos como puntos de acupuntura.
                La estimulación de estos puntos se puede realizar mediante la inserción de las agujas, la aplicación de calor (moxibustión), la presión (acupresión) o mediante técnicas más modernas como la electroacupuntura.
                La selección de los puntos de acupuntura y las técnicas utilizadas dependen del diagnóstico y la condición específica del paciente.

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
                  src="https://www.youtube.com/embed/xUbhmxOFl1Y"

                ></iframe>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/acupuntura.avif"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>
                    Efectos y aplicaciones:
                  </h3>
                  <p style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>

                    La acupuntura se utiliza para tratar una amplia variedad de condiciones de salud,
                    tanto físicas como emocionales. Se ha utilizado tradicionalmente para aliviar el dolor,
                    mejorar la circulación, fortalecer el sistema inmunológico, reducir el estrés y promover la salud general.
                    En la actualidad, la acupuntura se utiliza en muchos países como una terapia complementaria en combinación con la medicina convencional.
                  </p>

                  <h3 style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>Investigación y reconocimiento:</h3>

                  <p style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>

                    A lo largo de los años, la acupuntura ha sido objeto de investigación científica para evaluar su eficacia y mecanismos de acción.
                    Algunos estudios han encontrado evidencia de que la acupuntura puede tener efectos beneficiosos en el alivio del dolor, la reducción del estrés y otros trastornos.
                    Organizaciones de salud reconocidas, como la Organización Mundial de la Salud (OMS), han reconocido la acupuntura como una terapia válida en determinadas condiciones.

                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Aportes"
            imagen="/images/icono-contribuciones.png"
            identificador='contribuciones'
            categoria= 'acupuntura'
            href="/ver-contribuciones"
          />
        </div>
      </div>
    </>
  );
}

