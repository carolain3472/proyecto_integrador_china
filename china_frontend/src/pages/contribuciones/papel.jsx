import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/papel_style.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 * Componente de Papel y tinta.
 *
 * Este componente muestra la interfaz de la información relacionada con la invención del papel y la tinta en el modulo de contribuciones
 * con sus respectivos modelos. 
 */

export function Papel() {
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
      <h1 className="titulo-papel text-center">Papel & Tinta</h1>
      <div className="container page-papel text-center">
        <div className="historia-titulo">
          <h1>Papel</h1>
        </div>
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
                src="https://sketchfab.com/3d-models/ink-and-quill-c944c0a7a1944fd9a6b31012bcf25f4a/embed"
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
            <div className="info-papel">



              <p>
                <strong>Origen y desarrollo del papel:</strong>

                <br></br>


                La invención del papel se atribuye a la antigua China durante la dinastía Han, alrededor del siglo II a.C.
                Antes del papel, los chinos utilizaban diferentes materiales para escribir, como huesos de animales, caparazones
                de tortuga, seda y tablillas de madera.



              </p>
              <p>
                <strong>Técnica de fabricación del papel:</strong>

                <br></br>

                Los primeros papeles chinos se producían utilizando fibras vegetales, como las del bambú y la morera,
                y otros materiales como el cáñamo y la corteza de árbol. Estas fibras se cocían, se batían y se mezclaban
                en agua para formar una pulpa. Luego, se vertía la pulpa en un tamiz y se presionaba y secaba para obtener hojas de papel.

              </p>

              <p>
                <strong>Difusión y perfeccionamiento del papel:</strong>
                <br></br>


                La técnica de fabricación del papel se mantuvo en secreto en China durante muchos siglos, pero finalmente se difundió a
                otras partes del mundo a través de la Ruta de la Seda y las interacciones comerciales.
                Durante la dinastía Tang (siglos VII-IX), se perfeccionaron las técnicas de fabricación del papel,
                utilizando una pulpa de fibras de calidad superior y mejorando los métodos de secado.




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
                  src="https://www.youtube.com/embed/RiWQbva744Q"


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
                  src="https://sketchfab.com/3d-models/book-43bab72da51b47b28379c7e094695708/embed"
                ></iframe>
                <Carousel.Caption>
                  <h3 style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>
                    Contribuciones culturales y científicas:
                  </h3>
                  <p style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>
                    El papel impulsó el desarrollo de la literatura y las artes en China, permitiendo la creación de libros,
                    poemas y obras literarias accesibles a una audiencia más amplia. También contribuyó al avance científico,
                    ya que los chinos utilizaron el papel para registrar observaciones astronómicas, experimentos científicos y
                    registros históricos.

                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/papel-chino.jpeg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>
                    Impacto y utilidades:
                  </h3>
                  <p>
                    La invención del papel tuvo un impacto trascendental en la comunicación escrita y la difusión del conocimiento.
                    Reemplazó a los materiales más costosos y limitados, como la seda y el pergamino, y permitió la producción en masa de libros, documentos y escritos.
                    Facilitó el almacenamiento y el acceso a la información, promoviendo la educación, la investigación y el intercambio de ideas.

                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/papel-moneda.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>
                    Invención del papel moneda:
                  </h3>
                  <p style={{
                    color: "black",
                    backgroundColor: "rgba(240, 240, 240, 0.7)",
                  }}>
                    En el siglo II d.C,
                    durante la dinastía Han, se introdujo el papel moneda como una forma de facilitar el
                    comercio. Este sistema de dinero en papel se adoptó posteriormente en otras partes del
                    mundo.

                  </p>
                </Carousel.Caption>
              </Carousel.Item>



            </Carousel>
          </div>


        </div>
        <br></br>
        <br></br>
        <div className="historia-titulo">
          <h1>Tinta</h1>
        </div>
        <br></br>
        <br></br>

        <div className="row info-zhou" style={{ marginTop: "2rem" }}>


          <p>
            <strong>Origen y desarrollo:</strong>

            La tinta se inventó en China alrededor del siglo III a.C., durante la dinastía Han.
            Los primeros tipos de tinta utilizados fueron a base de pigmentos naturales, como la tinta
            negra hecha de hollín o carbón y la tinta roja hecha de cinabrio.
          </p>
          <p>

            <strong>Composición y técnica de fabricación:</strong>

            La tinta china tradicional se compone de pigmentos, generalmente de origen vegetal o mineral, mezclados con un aglutinante.
            El aglutinante más común utilizado en la tinta china es la resina de pino, aunque también
            se emplearon otros materiales, como la goma arábiga o la melaza.
            La técnica de fabricación de la tinta china implicaba moler los pigmentos y mezclarlos
            cuidadosamente con el aglutinante para obtener una consistencia adecuada.

          </p>
          <p>

            <strong>Impacto histórico y legado:</strong>
            La invención de la tinta en la antigua China tuvo un impacto significativo en la escritura,
            la caligrafía y las artes visuales. La tinta china fue esencial para preservar y transmitir la
            cultura china, ya que permitía la creación de documentos, libros y obras de arte duraderos.
            La técnica y los conocimientos relacionados con la fabricación y el uso de la tinta se transmitieron a
            otras culturas a través de las rutas comerciales y contribuyeron al desarrollo de la escritura y las artes
            en todo el mundo.


          </p>
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
                src="https://www.youtube.com/embed/5rojqD5CHAo"



              ></iframe>


            </Carousel.Item>


            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/tinta-china.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 style={{
                  color: "black",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                }}
                >
                  Impacto y utilidades:
                </h3>
                <p style={{
                  color: "black",
                  backgroundColor: "rgba(240, 240, 240, 0.7)",
                }}>
                  La invención del papel tuvo un impacto trascendental en la comunicación escrita y la difusión del conocimiento.
                  Reemplazó a los materiales más costosos y limitados, como la seda y el pergamino, y permitió la producción en masa de libros, documentos y escritos.
                  Facilitó el almacenamiento y el acceso a la información, promoviendo la educación, la investigación y el intercambio de ideas.

                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Aportes"
            imagen="/images/icono-contribuciones.png"
            identificador='contribuciones'
            categoria= 'papel'
            href="/ver-contribuciones"
          />
        </div>
      </div>
    </>
  );
}



