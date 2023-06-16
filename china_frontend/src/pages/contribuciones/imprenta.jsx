import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/imprenta_style.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 * Componente de Imprenta.
 *
 * Este componente muestra la interfaz de la información relacionada con la invención de la imprenta en el modulo de contribuciones
 * con sus respectivos modelos. 
 */

export function Imprenta() {
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
      <h1 className="titulo-imprenta text-center">Imprenta</h1>
      <div className="container page-imprenta text-center">

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
                src="https://sketchfab.com/3d-models/gutenbergs-printing-press-92bfd8b4a863400995134761fba73f38/embed"

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
            <div className="info-imprenta">



              <p>
                <strong>Origen y desarrollo:</strong>

                <br></br>
                La imprenta de tipos móviles fue inventada en China durante la dinastía Tang, en el siglo VIII d.C.
                Fue desarrollada por el artesano chino Bi Sheng, quien diseñó un sistema de tipos móviles hechos de arcilla.

              </p>
              <p>
                <strong>Funcionamiento de la imprenta de tipos móviles:</strong>

                <br></br>

                La imprenta de tipos móviles permitía la impresión de textos al disponer de caracteres móviles individuales que se podían reutilizar.
                Los caracteres se tallaban en pequeños bloques, generalmente de arcilla o madera, y se disponían en una tabla para formar palabras y oraciones.
                Una vez compuesta la página, se aplicaba tinta sobre los caracteres y se presionaba el papel o pergamino sobre ellos para transferir la tinta y crear la impresión.


              </p>

              <p>
                <strong>Impacto y legado:</strong>
                <br></br>

                La invención de la imprenta de tipos móviles en China tuvo un impacto significativo en la difusión de la información y la preservación del conocimiento.
                Facilitó la producción en masa de libros y documentos, lo que contribuyó a la expansión de la educación y el acceso a la información.
                La imprenta de tipos móviles sentó las bases para el desarrollo posterior de la imprenta en otros países, como Corea y Europa, donde se perfeccionaron y adaptaron diferentes técnicas de impresión.

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
                  src="https://www.youtube.com/embed/vVlDfy4o0R8"
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
                  src="https://sketchfab.com/3d-models/imprenta-6d52e83a2f2341f3b234651be1b96668/embed"
                ></iframe>
                <Carousel.Caption>
                  <h3 >
                    Avances y mejoras:
                  </h3>
                  <p >
                    Durante la dinastía Song (siglos X-XIII), se perfeccionaron las técnicas de fabricación de tipos móviles, utilizando metal en lugar de arcilla o madera.
                    La utilización de tipos metálicos permitió una mayor durabilidad y precisión en la impresión, acelerando el proceso de producción de libros y documentos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/imprenta-antigua.png"
                  alt="Third slide"
                />

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
            identificador={123}
            href="/ver-contribuciones"
          />
        </div>
      </div>
    </>
  );
}



