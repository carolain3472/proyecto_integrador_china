import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import "../../scss/tradiciones_style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Button } from "react-bootstrap";

/**
 * Componente que muestra una página de tradiciones en la aplicación.
 * Proporciona información sobre las tradiciones de la antigua civilización china.
 */

export function Tradiciones() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * Alternar la apertura y cierre de la barra lateral.
   *
   * Esta función cambia el estado de la variable 'isSidebarOpen' para controlar
   * si la barra lateral está abierta o cerrada. Si la barra lateral está abierta,
   * la función la cerrará y viceversa.
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  const [index, setIndex] = useState(0);

  /**
  *
  *Cambia el índice del carrusel al seleccionar una diapositiva.
  *@param {number} selectedIndex - El índice de la diapositiva seleccionada.
  *@param {Object} e - El evento de selección.
  *
  **/

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <button
        className={`boton-toggler ${isSidebarOpen ? "open" : ""}`}
        style={{ marginLeft: isSidebarOpen ? "310px" : "5px" }}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isSidebarOpen && (
        <div>
          <Nav_bar_perfil />
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        </div>
      )}
      <main
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
        className={`contenedor-historia ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="historia-titulo">
          <h1>Tradiciones</h1>
        </div>

        <div className="contenido-tradiciones">
          <div className="cultura-parrafo">
            <p>
              La antigua civilización china estaba impregnada de una gran
              variedad de tradiciones culturales que se transmitían de
              generación en generación. Estas tradiciones abarcaban todos los
              aspectos de la vida, desde las celebraciones festivas hasta las
              prácticas religiosas y las costumbres diarias. A continuación, te
              sumergiré en un recorrido más extenso por algunas de las
              tradiciones culturales más destacadas de la antigua China:
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="mb-3"> </h3>
              </div>

              <div className="col-12">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                >
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopLeftRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopLeftRadius: "25px" }}
                              alt="100%x280"
                              src="/images/antepasados.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Culto a los antepasados
                            </h4>
                            <p className="card-text">
                              Los antiguos chinos creían firmemente en la
                              veneración de sus antepasados. Se dedicaban
                              altares especiales en los hogares donde se les
                              ofrecían alimentos, incienso y rituales para
                              honrar a los ancestros fallecidos. Este culto a
                              los antepasados tenía como objetivo mantener la
                              conexión entre las generaciones pasadas, presentes
                              y futuras, y se consideraba una responsabilidad
                              filial importante.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "red",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              alt="100%x280"
                              src="/images/ceremoniaTe.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Ceremonia del té
                            </h4>
                            <p className="card-text">
                              El té tenía un lugar destacado en la cultura
                              china, y la ceremonia del té era una tradición
                              común. Se realizaba con elegancia y precisión,
                              siguiendo pasos específicos para preparar y servir
                              el té. Esta ceremonia no solo era una forma de
                              disfrutar de la bebida, sino también un acto de
                              cortesía y hospitalidad hacia los invitados.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopRightRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopRightRadius: "25px" }}
                              alt="100%x280"
                              src="/images/caligrafia.jpeg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Arte de la caligrafía
                            </h4>
                            <p className="card-text">
                              La caligrafía era considerada un arte refinado y
                              un medio para expresar la belleza y la elegancia
                              del lenguaje escrito. Los antiguos chinos
                              practicaban la caligrafía como una forma de
                              automejora y autorreflexión. Era enseñada desde
                              temprana edad y se valoraba tanto por su estética
                              como por su contenido.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopLeftRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopLeftRadius: "25px" }}
                              alt="100%x280"
                              src="/images/boda.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Ceremonia de boda
                            </h4>
                            <p className="card-text">
                              Las bodas en la antigua China eran eventos
                              significativos y altamente ritualizados. Se
                              llevaban a cabo rituales simbólicos que
                              representaban la unión de las familias y la
                              bendición de los antepasados. El respeto hacia los
                              padres y la obediencia filial eran aspectos
                              fundamentales en estas ceremonias.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "red",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              alt="100%x280"
                              src="/images/rituales.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Ceremonias y rituales
                            </h4>
                            <p className="card-text">
                              Las ceremonias y rituales desempeñaban un papel
                              fundamental en la vida de los antiguos chinos.
                              Estos actos solemnes y cuidadosamente orquestados
                              se llevaban a cabo para celebrar ocasiones
                              especiales, honrar a los antepasados, adorar a los
                              dioses y buscar la protección y la buena fortuna.
                              La etiqueta y el protocolo eran esenciales en
                              estas ceremonias, que involucraban prácticas como
                              el intercambio de ofrendas, la quema de incienso,
                              las danzas rituales y los cantos sagrados.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopRightRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopRightRadius: "25px" }}
                              alt="100%x280"
                              src="/images/funeral.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Ceremonias de entierro
                            </h4>
                            <p className="card-text">
                              En la antigua China, se creía firmemente en la
                              vida después de la muerte y en la necesidad de
                              proporcionar un adecuado descanso y cuidado a los
                              seres queridos fallecidos. Las ceremonias de
                              entierro se consideraban una forma de respeto y
                              amor filial hacia los antepasados y se llevaban a
                              cabo con gran solemnidad y atención a los
                              detalles. Antes del entierro propiamente dicho, se
                              realizaban diversos rituales preparatorios. Estos
                              incluían lavar y vestir el cuerpo del difunto con
                              ropas ceremoniales, así como colocar objetos
                              personales y artículos simbólicos en el ataúd.
                              Estos objetos podían incluir joyas, monedas,
                              alimentos y utensilios, todo lo cual se creía que
                              sería útil y necesario en la vida después de la
                              muerte.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Cultura"
            imagen="/images/cultura-icon.png"
            identificador={123}
            href="/cultura"
          />

          <Boton_next
            nombre="Artesanias"
            imagen="/images/artesanias-icono.png"
            identificador='cultura'
            href="/artesanias"
            categoria="tradiciones"
          />
        </div>
      </main>
    </>
  );
}
