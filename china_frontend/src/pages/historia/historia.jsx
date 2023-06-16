import React from 'react';
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/historia_style.css";
import "../../scss/boton_toggler_style.css";
import { Boton_next } from "../../components/boton-next";

/**
 * Componente Historia.
 *
 * Este componente muestra información sobre la historia china, incluyendo las dinastías
 * Xia, Shang, Zhou, Qin y Han.
 */

export function Historia() {
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
          <h1>Historia</h1>
        </div>

        <div className="contenido-historia">
          <h2 className="titulo-hist">Conociendo la Historia...</h2>
          <div className="contenedor-hijo-Hist-izq">
            <img src="/images/Xia-dinasty.png" alt="" />
            <p>
              <b>1. Dinastía Xia:</b> La dinastía Xia, que se cree que gobernó desde el
              siglo XXI a.C. hasta el siglo XVI a.C., es la primera dinastía
              registrada en la historia china. Sin embargo, durante mucho tiempo
              se consideró una leyenda hasta que se descubrieron ruinas y
              reliquias en la provincia de Henan que respaldaron su existencia.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-der">
            <img src="/images/Chinashang.jpg" alt="" />
            <p>
              <b>2. Dinastía Shang:</b> La dinastía Shang, que gobernó desde el siglo
              XVI a.C. hasta el siglo XI a.C., fue conocida por su uso de los
              caracteres de escritura más antiguos encontrados en China. Estos
              caracteres se inscribían en huesos de animales y caparazones de
              tortugas en un proceso conocido como "escritura en huesos
              oraculares". Se utilizaban en rituales adivinatorios y
              proporcionan una valiosa fuente de información sobre la antigua
              cultura china.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-izq">
            <img src="/images/zhou-dinasty.png" alt="" />
            <p>
              <b>3. Dinastía Zhou:</b> La dinastía Zhou, que gobernó desde el siglo XI
              a.C. hasta el 256 a.C., fue un período importante para el
              desarrollo de la filosofía china. Durante esta época surgieron
              grandes pensadores como Confucio y Laozi, cuyas enseñanzas han
              influido profundamente en la cultura y el pensamiento chino hasta
              la actualidad.
            </p>
          </div>

          <div className="contenedor-hijo-Hist-der">
            <img src="/images/qin-dinasty.png" alt="" />
            <p>
              <b>4. Dinastía Qin y Han:</b> Estas dos dinastías están estrechamente
              relacionadas y se consideran un período de transición en la
              historia china. La dinastía Qin, que gobernó desde el 221 a.C.
              hasta el 206 a.C., es conocida por unificar China bajo un solo
              gobierno centralizado y por construir la Gran Muralla China. La
              dinastía Han, que siguió a la dinastía Qin, gobernó desde el 202
              a.C. hasta el 220 d.C. Durante la dinastía Han, se establecieron
              las bases del sistema imperial chino y se promovió el comercio a
              través de la Ruta de la Seda, lo que permitió un intercambio
              cultural y comercial significativo entre China y otras regiones
              del mundo.
            </p>
          </div>

            <Boton_next
              nombre="Dinastias"
              imagen="/images/dinastia-icono.png"
              identificador={123}
              href="/dinastias"
            />

          {/*           <h2
            className="titulo-hist"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            Mas información sobre las dinastias
          </h2> */}
          {/*           <div className="botones-dinasty">
            <button className="dinasty">
              <span className="button-content">
                <img
                  src="/images/dinastia-icono.png"
                  alt="Imagen"
                  className="button-icon"
                />
                XIA
              </span>
            </button>
            <button className="dinasty">
              <span className="button-content">
                <img
                  src="/images/dinastia-icono.png"
                  alt="Imagen"
                  className="button-icon"
                />
                SHANG
              </span>
            </button>
            <button className="dinasty">
              <span className="button-content">
                <img
                  src="/images/dinastia-icono.png"
                  alt="Imagen"
                  className="button-icon"
                />
                ZHOU
              </span>
            </button>
            <button className="dinasty">
              <span className="button-content">
                <img
                  src="/images/dinastia-icono.png"
                  alt="Imagen"
                  className="button-icon"
                />
                QIN
              </span>
            </button>
            <button className="dinasty">
              <span className="button-content">
                <img
                  src="/images/dinastia-icono.png"
                  alt="Imagen"
                  className="button-icon"
                />
                HAN
              </span>
            </button>
          </div> */}
        </div>
      </main>
    </>
  );
}
