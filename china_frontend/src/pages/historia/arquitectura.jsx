import React from 'react';
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/arquitectura_style.css";
import "../../scss/boton_toggler_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Carousel } from "react-bootstrap";

/**
 * Página de Arquitectura.
 * Muestra información sobre la arquitectura tradicional china y presenta imágenes y modelos en 3D de estructuras arquitectónicas chinas.
 */

export function Arquitectura() {
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
          <h1>Arquitectura</h1>
        </div>

        <div className="container padre-arqui">
          <div className="row">
            <div className="col info-arqui">
              <p className="parraf-arqui">
                La arquitectura en la antigua China se caracterizó por su
                singularidad y su influencia en el desarrollo posterior de la
                arquitectura en el este de Asia.
              </p>
              <p className="parraf-arqui">
                La arquitectura tradicional china se basaba principalmente en
                <b>estructuras de madera</b>. El uso de la madera permitía la
                flexibilidad y la resistencia necesarias para enfrentar
                terremotos y otras condiciones adversas. Las estructuras se
                construían sin el uso de clavos, utilizando un sistema de
                ensamblaje de piezas de madera talladas con precisión. Este
                estilo arquitectónico ha perdurado a lo largo del tiempo y ha
                influido en la arquitectura china posterior.
              </p>
              <p className="parraf-arqui">
                Uno de los rasgos distintivos de la arquitectura china es el uso
                de <b>techos curvos</b>, conocidos como techos de "barco
                invertido" o "ala de cuervo". Estos techos se caracterizan por
                tener una forma curva en los bordes, lo que les confiere una
                apariencia elegante y distintiva. Además de su función estética,
                los techos curvos también ayudaban a canalizar el agua de lluvia
                hacia los aleros, protegiendo así las estructuras subyacentes de
                la humedad.
              </p>
              <p className="parraf-arqui">
                <b>Las puertas y ventanas</b> en la arquitectura china
                tradicional solían ser elaboradamente decoradas. Las puertas se
                consideraban puntos de entrada importantes y a menudo
                presentaban tallas intrincadas de dragones, leones o motivos
                florales. Las ventanas también se decoraban con motivos
                ornamentales y paneles de papel de arroz translúcido que
                permitían el paso de la luz natural.
              </p>
              <p className="parraf-arqui">
                <b>Las pagodas</b> son estructuras religiosas que se encuentran
                en toda China. Estas torres de varios pisos, generalmente de
                forma octogonal o cuadrada, eran utilizadas como lugares de
                adoración y almacenamiento de reliquias sagradas. Las pagodas
                presentaban una arquitectura distintiva, con voladizos en cada
                nivel y una escalera interna que permitía el acceso a los
                niveles superiores. Estas estructuras eran admiradas tanto por
                su belleza como por su simbolismo religioso.
              </p>
            </div>
            <div className="col cont-imagen-arqui">
              <Carousel indicators={false} prevIcon={null} nextIcon={null}>
                <Carousel.Item>
                  <img
                    className="imagen-arqui"
                    src="/images/arqui-china1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="imagen-arqui"
                    src="/images/arqui-china2.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="imagen-arqui"
                    src="/images/arqui-china3.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className="row" style={{ marginTop: "1rem" }}>
            <h1 className="text-center" style={{marginBottom:"1rem"}}>Arquitectura</h1>
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
                  src="https://sketchfab.com/models/e4158c26c10b4394ac2f97c4d3ea4af6/embed"
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
                  src="https://sketchfab.com/models/9b53a004479e49318ed48fe2eb5d1126/embed"
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
                  src="https://sketchfab.com/models/efb66bfef8af47d8a043c8e52bcf4aed/embed"
                ></iframe>
              </div>
            </div>
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
                  src="https://sketchfab.com/models/5a0c9a3099a040e28fdc90c681a89b35/embed"
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
                  src="https://sketchfab.com/models/117127fa30794e15b0b6fe1805273965/embed"
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
                  src="https://sketchfab.com/models/fdf7e0a8539c43dcbf751668b6e8b078/embed"
                ></iframe>
              </div>
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
            identificador={123}
            href="/dinastias"
          />

          <Boton_next
            nombre="Historia"
            imagen="/images/historia-icono.png"
            identificador={123}
            href="/historia"
          />
        </div>
      </main>
    </>
  );
}
