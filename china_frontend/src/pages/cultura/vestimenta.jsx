import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import "../../scss/tradiciones_style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Button } from "react-bootstrap";

/**
 * Componente que muestra una página de vestimenta en la aplicación.
 * Proporciona información sobre las vestimenta de la antigua civilización china.
 */

export function Vestimenta() {
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
          <h1>Vestimenta</h1>
        </div>

        <div className="contenido-tradiciones">
          <div className="cultura-parrafo">
            <p>
              ¡Bienvenido al módulo de Vestimenta en la civilización china!
              Sumérgete en la fascinante historia y las tradiciones de la
              antigua China a través de su vestimenta. Descubre cómo la moda y
              el estilo reflejaban la rica cultura y los valores de esta
              civilización milenaria. Acompáñanos en este viaje a través de los
              diferentes períodos y estilos de la vestimenta china, y aprende
              sobre su simbolismo y su impacto en la sociedad.
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
                              src="/images/vestimenta_han.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Dinastía Han (206 a.C. - 220 d.C.):
                            </h4>
                            <p className="card-text">
                              Durante la dinastía Han, la vestimenta china se
                              caracterizaba por su elegancia y sofisticación.
                              Tanto hombres como mujeres llevaban túnicas largas
                              conocidas como "Hanfu". Las túnicas de los hombres
                              eran cruzadas y atadas con un cinturón, mientras
                              que las mujeres usaban túnicas sueltas y ajustadas
                              en la cintura. Los colores vivos y los detalles
                              ornamentales, como los bordados y los diseños
                              florales, eran comunes en esta época.
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
                              src="/images/dinastia_tang_moda.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Dinastía Tang (618 - 907):
                            </h4>
                            <p className="card-text">
                              La dinastía Tang se considera una época dorada
                              para la moda china. La vestimenta era lujosa y
                              extravagante, con telas suaves y colores
                              brillantes. Las mujeres llevaban "Ruqun", una
                              blusa suelta y una falda larga, mientras que los
                              hombres usaban túnicas amplias y pantalones
                              anchos. Los accesorios, como sombreros, cinturones
                              y zapatos, eran elaborados y se usaban para
                              resaltar el estatus social y la moda.
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
                              src="/images/song_vestimenta.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Dinastía Song (960 - 1279):
                            </h4>
                            <p className="card-text">
                              Durante la dinastía Song, la vestimenta china se
                              volvió más refinada y sutil. Las túnicas se
                              volvieron más ceñidas al cuerpo y se utilizaban
                              cinturones para marcar la cintura. Las mujeres
                              usaban "Duijin", una túnica de dos piezas que
                              consistía en una blusa y una falda. Los hombres
                              preferían las túnicas cruzadas y los pantalones
                              ajustados. Los colores neutros y los diseños
                              simples eran populares en esta época.
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
                              src="/images/ming_vestimenta.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Dinastía Ming (1368 - 1644):
                            </h4>
                            <p className="card-text">
                              Durante la dinastía Ming, la vestimenta china se
                              caracterizaba por su elegancia y formalidad. Las
                              túnicas largas y amplias eran populares tanto para
                              hombres como para mujeres. Las túnicas de las
                              mujeres tenían mangas anchas y se complementaban
                              con faldas largas. Los colores sólidos y los
                              diseños bordados a mano eran comunes en esta
                              época.
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
                              src="/images/qing_vestimenta.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center">
                              Dinastía Qing (1644 - 1912):
                            </h4>
                            <p className="card-text">
                              Durante la dinastía Qing, la vestimenta china
                              experimentó influencias de las minorías étnicas y
                              culturas extranjeras. Los trajes de "qipao" se
                              hicieron populares entre las mujeres,
                              caracterizados por su cuello alto y su corte
                              ajustado al cuerpo. Los hombres usaban túnicas
                              largas y pantalones anchos. Los colores vibrantes
                              y los bordados intrincados eran distintivos de
                              esta época.
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
                              src="/images/era_vestimenta.jpg"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-center"></h4>
                            <p className="card-text">
                              La vestimenta en la civilización china era más que
                              simples prendas de ropa; representaba la identidad
                              cultural, el estatus social y los valores
                              estéticos de la sociedad. Desde la elegancia de la
                              dinastía Han hasta la sofisticación de la dinastía
                              Qing, la moda china ha dejado un legado duradero
                              en la historia de la moda. Explora más a fondo
                              cada período y estilo de vestimenta para
                              comprender la diversidad y la belleza de la
                              vestimenta en la antigua China. ¡Adéntrate en la
                              historia de la moda china y descubre su fascinante
                              evolución a lo largo del tiempo!
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
            nombre="Festividades"
            imagen="/images/festividades-icono.png"
            identificador={123}
            href="/festividades"
          />

          <Boton_next
            nombre="Creencias"
            imagen="/images/creencias-icono.png"
            identificador='cultura'
            href="/creencias"
            categoria= "vestimenta"
          />
        </div>
      </main>
    </>
  );
}
