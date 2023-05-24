import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav_bar } from "../components/nav-bar";
import "../scss/page_init_style.css";
import { Carousel } from "react-bootstrap";

import encontrarImg from "../images/encontrar-img.png";
import registroImg from "../images/registro.png";
import temploCarousel1 from "../images/templo-carousel1.png";
import temploCarousel2 from "../images/templo-carousel2.jpg";

export function Page_init() {
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
                  src={registroImg}
                  alt="Registro"
                />
              </button>
            </Link>
          </div>
          <div className="encontrar">
            <div className="encontrar-izq">
              <img
                src={encontrarImg}
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
                <button className="quiz" type="text">
                  Quices
                </button>
                <button className="info" type="text">
                  Información
                </button>
                <button className="juegos" type="text">
                  Minijuegos
                </button>
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
                  src={temploCarousel1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={temploCarousel2}
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
