import React from 'react';
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/user_profile_style.css";
import "../../scss/boton_toggler_style.css";
import "../../scss/contribuciones_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Modelo } from "../../components/ModeloDragonCute";
import { Canvas } from "react-three-fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";

/**
 * Componente de contribuciones.
 *
 * Este componente muestra la interfaz de contribuciones introductoria en el modulo de contribuciones.
 */

export function Contribuciones() {
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
        className={`contenedor-perfil ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="aportes-titulo">
          <h1>Inventos y Contribuciones</h1>
        </div>

        <div
          className="formulario-settings"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="contenido-aportes">
            <h2 className="titulo-hist">
              Conoce los importantes aportes de la civilización antigua China a la humanidad...
            </h2>

            <div className="contenedor-hijo-Hist-der">
              <img src="/images/brujula.jpg" alt="" />
              <p>
                <b>1. La brújula:</b> La invención de la brújula es
                considerada uno de los logros más destacados de la antigua
                civilización china, que tuvo un impacto trascendental en la
                navegación y la exploración del mundo. Desde su creación, la
                brújula ha sido una herramienta indispensable para los
                marinos y viajeros, permitiéndoles orientarse y trazar rutas
                precisas. Exploraremos la fascinante historia de la
                invención de la brújula en la antigua China, su evolución a
                lo largo del tiempo y su influencia en la expansión y
                descubrimiento de nuevas tierras.
              </p>
            </div>

            <div className="contenedor-hijo-Hist-izq">
              <img src="/images/polvora.jpg" alt="" />
              <p>
                <b>2. La polvora:</b> La invención de la pólvora es uno de
                los avances tecnológicos más significativos de la antigua
                China, que revolucionó la guerra, la pirotecnia y diversas
                aplicaciones en la sociedad. Exploraremos el fascinante
                origen de la pólvora en la antigua China, su composición y
                método de fabricación, así como su impacto en la historia
                militar y cultural. Descubriremos cómo esta innovación
                explosiva cambió para siempre el curso de la historia y dejó
                un legado perdurable en la humanidad. Acompáñanos en este
                recorrido por los orígenes y las transformaciones de la
                pólvora, una invención que desencadenó una nueva era de
                poder y destrucción.
              </p>
            </div>

            <div className="contenedor-hijo-Hist-der">
              <img src="/images/papelytinta.jpg" alt="" />
              <p>
                <b>3. El papel y la tinta:</b> El papel y la tinta son dos
                invenciones fundamentales de la antigua civilización china
                que han dejado un impacto perdurable en la historia de la
                humanidad. El papel, creado con maestría utilizando técnicas
                refinadas, revolucionó la forma en que la información y el
                conocimiento fueron registrados y transmitidos. Por otro
                lado, la invención de la tinta permitió la escritura fluida
                y expresiva, dando vida a las palabras en el papel.
                Exploraremos el fascinante mundo del papel y la tinta en la
                antigua China, desde sus orígenes hasta su evolución y su
                impacto en la cultura, la educación y la comunicación.
                Acompáñanos en este viaje a través del tiempo, mientras
                descubrimos cómo estas dos invenciones se unieron para
                formar un legado duradero en la humanidad.
              </p>
            </div>

            <div className="contenedor-hijo-Hist-izq">
              <img src="/images/imprenta.gif" alt="" />
              <p>
                <b>4. La imprenta:</b> La invención de la imprenta fue un
                punto de inflexión histórico que revolucionó la forma en que
                la información se difundía y transformó la industria
                editorial. Su origen se remonta a la antigua China, donde se
                desarrollaron los primeros métodos de impresión.
                Exploraremos el apasionante viaje de la invención de la
                imprenta, desde sus humildes comienzos en la antigua China
                hasta su impacto global. Descubriremos cómo esta innovación
                cambió la forma en que se producían los libros, permitiendo
                una reproducción más rápida y accesible de la información.
              </p>
            </div>

            <div className="contenedor-hijo-Hist-der">
              <img src="/images/acupuntura.jpg" alt="" />
              <p>
                <b>6. La acupuntura:</b> La acupuntura es una antigua
                práctica terapéutica que se originó en la antigua China y ha
                perdurado a lo largo de los siglos como un valioso tesoro de
                conocimiento médico. En este artículo, nos sumergiremos en
                el fascinante mundo de la acupuntura, explorando su origen,
                sus principios y su aplicación en el cuidado de la salud.
                Descubriremos cómo la acupuntura se basa en el equilibrio
                energético del cuerpo y en la estimulación de puntos
                específicos para promover la curación y el bienestar.
                Exploraremos sus beneficios, tanto en términos de alivio del
                dolor como en el abordaje de diversos trastornos de salud.
                Acompáñanos en este viaje por la antigua práctica de la
                acupuntura y descubre cómo ha dejado una huella duradera en
                la medicina tradicional y complementaria en todo el mundo.
              </p>
            </div>
          </div>
        </div>

        <Boton_next
          nombre="Aportes"
          imagen="/images/icono-contribuciones.png"
          identificador='contribuciones'
          href="/ver-contribuciones"
          categoria='datos_contribuciones'
        />

      </main>
    </>
  );
}
