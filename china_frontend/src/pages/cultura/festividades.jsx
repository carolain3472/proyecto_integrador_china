import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import "../../scss/festividades_style.css";

/**
 * Componente que muestra una página de festividades en la aplicación.
 * Proporciona información sobre las festividades de la antigua civilización china.
 */

export function Festividades() {
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
          <h1>Festividades</h1>
        </div>
        <div className="container text-center">
          <p
            style={{
              fontSize: "1.2rem",
              fontFamily: "Noto Serif",
              marginTop: "1rem",
            }}
          >
            Bienvenido al módulo de Festividades de la antigua China!, Sumérgete
            en la celebración y el espíritu festivo de esta civilización
            milenaria.
          </p>
          <div className="row row-fest">
            <div className="col cont-fest">
              <img
                className="imagen-fest"
                src="/images/festival-primavera.jpg"
                alt=""
              />
            </div>
            <div className="col cont-fest">
              <p className="parraf-fest">
                <b>Festival de la Primavera:</b> El Festival de la Primavera,
                también conocido como el Año Nuevo Chino, es la festividad más
                importante en la cultura china. Se celebra en el primer día del
                calendario lunar y marca el comienzo del año nuevo.
              </p>
            </div>
          </div>

          <div className="row row-fest">
            <div className="col cont-fest">
              <img
                className="imagen-fest"
                src="/images/festival-faroles.jpg"
                alt=""
              />
            </div>
            <div className="col cont-fest">
              <p className="parraf-fest">
                <b>Festival de los Faroles: </b>
                El Festival de los Faroles se celebra el decimoquinto día del
                primer mes lunar y marca el final de las celebraciones del Año
                Nuevo Chino. Durante esta festividad, las calles se iluminan con
                coloridos faroles de papel y se realizan desfiles de faroles.
              </p>
            </div>
          </div>

          <div className="row row-fest">
            <div className="col cont-fest">
              <img
                className="imagen-fest"
                src="/images/fiesta-bote-del-dragon.jpg"
                alt=""
              />
            </div>
            <div className="col cont-fest">
              <p className="parraf-fest">
                <b>Festival del Bote del Dragón: </b>
                El Festival del Bote del Dragón se celebra el quinto día del
                quinto mes lunar y es una festividad dedicada a honrar al poeta
                Qu Yuan. Se realizan carreras de botes en ríos y lagos, donde
                los participantes reman al ritmo de tambores y ondean banderas.
                Además de las carreras de botes, durante esta festividad se
                consumen tamales de arroz llamados "zongzi" en honor a Qu Yuan,
                quien se dice que se arrojó al río y los peces no lo devoraron
                debido a los zongzi que flotaban en el agua.
              </p>
            </div>
          </div>

          <div className="row row-fest">
            <div className="col cont-fest">
              <img
                className="imagen-fest"
                src="/images/Festival-del-Medio-Otono.jpg"
                alt=""
              />
            </div>
            <div className="col cont-fest">
              <p className="parraf-fest">
                <b>Festival del Medio Otoño: </b>
                El Festival del Medio Otoño se celebra el decimoquinto día del
                octavo mes lunar y coincide con la luna llena. Esta festividad
                está asociada con la cosecha y la reunión familiar. Durante esta
                festividad, las familias se reúnen para admirar la luna,
                disfrutar de pasteles de luna y contar historias tradicionales.
                Se cree que la luna llena representa la reunión familiar y la
                plenitud de la vida.
              </p>
            </div>
          </div>
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Artesanias"
            imagen="/images/artesanias-icono.png"
            identificador={123}
            href="/artesanias"
          />

          <Boton_next
            nombre="Vestimenta"
            imagen="/images/vestimenta-icono.png"
            identificador={123}
            href="/vestimenta"
          />
        </div>
      </main>
    </>
  );
}
