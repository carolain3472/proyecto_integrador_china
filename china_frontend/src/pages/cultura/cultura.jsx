import React from 'react';
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/cultura_estilo.css";
import "../../scss/boton_toggler_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { Float, Text, OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Boton_next } from "../../components/boton-next";
import { Modelo } from "../../components/ModeloDragonCute";

/**
 * Componente que muestra una página de cultura en la aplicación.
 * Proporciona información sobre las costumbres y tradiciones de la antigua civilización china.
 */

export function Cultura() {
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

  const [showModal, setShowModal] = useState(false);

  /**
   * Abre el modal.
   * Actualiza el estado 'showModal' a true para mostrar el modal.
   */
  const handleModalOpen = () => {
    setShowModal(true);
  };

  /**
   * Cierra el modal.
   * Actualiza el estado 'showModal' a false para ocultar el modal.
   */
  const handleModalClose = () => {
    setShowModal(false);
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
        className={`contenedor-cultura ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="cultura-titulo">
          <h1>Cultura</h1>
        </div>

        <div className="contenido-cultura">
          <h2 className="titulo-hist">¡Bienvenido al módulo de cultura!</h2>
          <div
            style={{
              marginLeft: "15rem",
              marginRight: "15rem",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            <p>
              ¡Bienvenido a conocer sobre las costumbres en la civilización
              china antigua! En este módulo introductorio, exploraremos las
              fascinantes tradiciones y prácticas de la antigua civilización
              china. Con una historia milenaria y una cultura rica y diversa,
              China ha dejado un legado importante en el mundo. Acompáñanos en
              este viaje para descubrir algunas de las costumbres más destacadas
              que influyeron en la vida cotidiana de los antiguos chinos.
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="sketchfab-embed-wrapper">
                  {" "}
                  <iframe
                    style={{width:'400px', height:'480px', marginLeft:'8rem'}}
                    title="Chinese wooden figure."
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src="https://sketchfab.com/models/5cc058c064f14cb18e3cb2ab484127f3/embed"
                  >
                    {" "}
                  </iframe>{" "}
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "normal",
                      margin: "5px",
                      color: "#4A4A4A",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <a
                      target="_blank"
                      rel="nofollow"
                      style={{ fontWeight: "bold", color: "black" , marginLeft:'10rem'}}
                    >
                      {" "}
                     Budismo como religión en la antigüa china
                    </a>{" "}
                  </p>
                </div>
              </div>

              <div className="col-lg">
                <div className="contenedor-hijo-Cult-izq">
                  <img src="/images/saludochina.png" alt="" />
                  <p>
                    1. Los chinos antiguos daban gran importancia a la etiqueta
                    y el respeto hacia los demás. El saludo más común era el
                    saludo de cortesía, que se realizaba inclinando ligeramente
                    la cabeza. También se valoraba mucho el respeto a los
                    ancianos y a los líderes comunitarios.
                  </p>
                </div>

                <div className="contenedor-hijo-Cult-der">
                  <img src="/images/festividad.jpg" alt="" />
                  <p>
                    2. China es famosa por sus coloridas festividades. Entre las
                    más importantes se encuentra el Año Nuevo Chino, una
                    celebración que marca el inicio del nuevo año lunar. Durante
                    esta festividad, las familias se reúnen para disfrutar de
                    banquetes, danzas del león y del dragón, y fuegos
                    artificiales.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contenedor-hijo-Cult-izq">
            <img src="/images/taoismo.png" alt="" />
            <p>
              3. China es el hogar de varias escuelas de pensamiento filosófico,
              como el confucianismo, el taoísmo y el budismo. Estas filosofías
              han influido profundamente en la mentalidad y los valores de los
              antiguos chinos. El confucianismo, en particular, promovía la
              importancia de la moral, la virtud y las relaciones humanas
              armoniosas.
            </p>
          </div>

          <div className="contenedor-hijo-Cult-der">
            <img src="/images/familia.png" alt="" />
            <p>
              4. La familia era el núcleo de la sociedad china antigua. Se
              valoraba la obediencia y el respeto hacia los padres y los
              ancianos. Además, se seguían tradiciones como la reunión familiar
              durante el Festival del Barco Dragón y el cuidado de los padres en
              su vejez.
            </p>
          </div>
          <Boton_next
            nombre="Tradiciones"
            imagen="/images/tradicion-icono.png"
            identificador='cultura'
            href="/tradiciones"
            categoria="datos_cultura"
          />
        </div>
      </main>
    </>
  );
}
