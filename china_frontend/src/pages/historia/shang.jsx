import React from 'react';
import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/shang_style.css";

/**
 * Componente principal para mostrar la información de la Dinastía Shang.
 */

export function Din_Shang() {
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
      <h1 className="titulo-shang text-center">Dinastia SHANG</h1>
      <div className="container page-shang text-center">
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
                src="https://sketchfab.com/models/f1ca3cfcf11146d9b3166403e711f6ad/embed"
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
            <div className="info-shang">
              <p>
                La Dinastía Shang fue una antigua dinastía china que gobernó
                desde aproximadamente el 1600 a.C. hasta el 1046 a.C. También
                conocida como la Dinastía Yin, la Dinastía Shang fue una de las
                primeras dinastías registradas en la historia china y tuvo un
                papel crucial en el desarrollo de la civilización china.
              </p>
              <p>
                Bajo el dominio de la Dinastía Shang, la sociedad china se
                desarrolló y prosperó. El rey, considerado como un intermediario
                entre los dioses y el pueblo, gobernaba con autoridad divina. La
                sociedad estaba estructurada en una jerarquía claramente
                definida, con nobles, artesanos, agricultores y esclavos
                ocupando diferentes roles.
              </p>
              <p>
                La economía Shang se basaba en la agricultura, con el cultivo de
                arroz, mijo y trigo como principales fuentes de sustento. Los
                Shang también practicaban la caza, la pesca y la ganadería. Sin
                embargo, uno de los aspectos más destacados de la cultura Shang
                fue el dominio de la metalurgia del bronce. Los expertos
                artesanos Shang producían armas, herramientas y objetos rituales
                elaborados a partir de bronce.
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/shang-tang.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Pintura del primer rey de los Shang</h3>
                  <p>
                    Según las historias, Shang Tang nació en una familia noble
                    pero fue injustamente desterrado por el rey anterior debido
                    a una conspiración en su contra.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carro-de-guerra-shang.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Guerreros Shang</h3>
                  <p>
                    Los Guerreros Shang son notables por su detallada artesanía
                    y su papel en la cultura y las creencias militares de la
                    época.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/sacrificios-humanos-dinastia-de-los-shang.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Sacrificios Humanos</h3>
                  <p>
                    La Dinastía Shang practicaba sacrificios humanos como parte
                    de sus rituales religiosos y ceremonias. Según los registros
                    históricos y las excavaciones arqueológicas, los Shang
                    creían en la comunicación con los dioses y los antepasados a
                    través de los sacrificios.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row info-shang" style={{ marginTop: "2rem" }}>
            <p>
              Otro logro destacado de la Dinastía Shang fue el desarrollo de un
              sistema de escritura temprano. Utilizando huesos de animales y
              caparazones de tortuga, los escribas Shang inscribían caracteres
              en lo que se conoce como "escritura de oráculo". Estos caracteres
              grabados proporcionan una valiosa visión de las prácticas rituales
              y las creencias religiosas de la época.
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
                src="https://sketchfab.com/models/38f3f92cd27048fdaceb694d66615ddd/embed?ui_theme=dark"
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
                Escultura que data de 1600 a.C.
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
            categoria= 'shang'
          />
        </div>
      </div>
    </>
  );
}
