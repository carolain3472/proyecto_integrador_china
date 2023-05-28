import React from "react";
import { Link } from "react-router-dom";
import { Nav_bar } from "../components/nav-bar";
import "../scss/page_init_style.css";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Componente Page_init.
 *
 * Este componente representa la página de inicio de la aplicación. Muestra información
 * principal y un carrusel de imágenes. También incluye enlaces a otras páginas y botones
 * interactivos.
 */

export function Page_init() {
  const quiz = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      ¡En nuestra página encontrarás quices para evaluar lo que aprendes!
    </Tooltip>
  );

  const informacion = (props) => (
    <Tooltip className="mi-popover" id="button-tooltip" {...props}>
      ¡Tendrás toneladas de conocimiento sobre China!
    </Tooltip>
  );

  const minijuegos = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      ¡Minijuegos para entretenerte mientras aprendes!
    </Tooltip>
  );

  return (
    <>
      <Nav_bar />
      <main className="inicio-design">
        {/* Div izquierdo */}
        <div className="informacion">
          <div className="titulo-container">
            <h1 className="titulo">
              DESCUBRE LA <br /> HISTORIA
            </h1>
          </div>
          <div className="registro">
            <Link to="/register">
              <button className="boton-registro">
                Registrarse
                <img
                  className="icono-registro"
                  src="/images/registro.png"
                  alt="Registro"
                />
              </button>
            </Link>
          </div>
          <div className="encontrar">
            <div className="encontrar-izq">
              <img
                src="/images/encontrar-img.png"
                className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px"
                alt="profile"
              />
            </div>
            <div className="encontrar-der">
              <div className="encontrar-arriba">
                <h1 className="info-texto">Que encontrarás</h1>
              </div>
              <div className="encontrar-abajo">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={quiz}
                >
                  <Button className="quiz" variant="success">
                    Quices
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={informacion}
                >
                  <Button className="info" variant="success">
                    Información
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={minijuegos}
                >
                  <Button className="juegos" variant="success">
                    Minijuegos
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
        {/* Div derecho */}
        <div className="imagen-inicio">
          <div className="contenedor-carousel">
            <Carousel indicators={false} prevIcon={null} nextIcon={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/templo-carousel1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/templo-carousel2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </main>
    </>
  );
}
