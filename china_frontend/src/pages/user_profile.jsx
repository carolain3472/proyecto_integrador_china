import React from "react";
import { useState, useEffect } from "react";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";
import axios from "axios";
import { api } from "../api/register_api";

/**
 * Componente User_profile.
 *
 * Este componente representa la página de perfil de usuario.
 * Permite alternar la apertura y cierre de la barra lateral y muestra
 * el contenido del perfil.
 */

export function User_profile() {
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");

  const [porcHistoria, setPorcHistoria] = useState(0); // Ahora 'now' es un estado
  const [porcCultura, setPorcCultura] = useState(0);
  const [porcContribuciones, setPorcContribuciones] = useState(0);

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

  useEffect(() => {

    console.log(username)
    // Realiza una solicitud POST al servidor para el inicio de sesión
    axios;
    api
      .post("/china/get_progreso/",  {username})
      .then((response) => {
        const cantidadTotalHistoria = Object.keys(response.data.historia).length;
        const historia= sumarValoresDiccionario(response.data.historia)
        
        const cultura= sumarValoresDiccionario(response.data.cultura)
        const cantidadTotalCultura = Object.keys(response.data.cultura).length;

        const cantidadTotalContribuciones = Object.keys(response.data.contribuciones).length;
        const contribuciones= sumarValoresDiccionario(response.data.contribuciones)

        console.log(response.data.historia)
        console.log(historia)
        console.log(cantidadTotalHistoria)

        console.log(response.data.cultura)
        console.log(cultura)
        console.log(cantidadTotalCultura)

        console.log(response.data.contribuciones)
        console.log(contribuciones)
        console.log(cantidadTotalContribuciones)

        const nuevoPorcHistoria = (historia / cantidadTotalHistoria) * 100;
        setPorcHistoria(nuevoPorcHistoria); // Actualizar el estado 'now' con el nuevo valor

        const nuevoPorcCultura = (cultura / cantidadTotalCultura) * 100;
        setPorcCultura(nuevoPorcCultura); // Actualizar el estado 'now' con el nuevo valor

        const nuevoPorcContribuciones = (contribuciones / cantidadTotalContribuciones) * 100;
        setPorcContribuciones(nuevoPorcContribuciones); // Actualizar el estado 'now' con el nuevo valor

      })
      .catch((error) => {
        console.error(error);
      });
  
});

function sumarValoresDiccionario(diccionario) {
  let sumaTotal = 0;

  // Recorrer cada clave del diccionario
  for (let clave in diccionario) {
    // Verificar si la clave pertenece al diccionario y no a su prototipo
    if (diccionario.hasOwnProperty(clave)) {
      // Sumar el valor de la clave a la suma total
      sumaTotal += diccionario[clave];
    }
  }

  return sumaTotal;
}

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
        <div className="settings">
          <h1 className="titulo-settings">Perfil</h1>
        </div>

        <div className="container my-5">
          <div className="row" style={{ borderBottom: "5px solid" }}>
            <div className="col text-center">
              <p className="nombre-user">
                <img
                  src={profilePic}
                  className="foto-user my-3"
                  width="100px"
                  alt="profile"
                />
                <br />
                {username}
              </p>
            </div>
            <div className="col my-3">
              <p className="info-profile">
                Aquí encontrarás información actualizada sobre el progreso de
                tus sesiones y los quizzes realizados, así como tus puntuaciones
                correspondientes. Te mantendremos al tanto de tus logros y
                avances en cada una de las actividades que realices.
                <br />
                <br />
                Nuestra plataforma está diseñada para brindarte un seguimiento
                detallado de tu rendimiento, permitiéndote evaluar tus
                conocimientos y medir tu progreso a lo largo del tiempo. Podrás
                ver tus puntuaciones obtenidas en cada sesión y quiz, y comparar
                tus resultados con sesiones anteriores.
              </p>
            </div>
          </div>
          <div
            className="row my-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Historia</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcHistoria}
                label={`${porcHistoria.toFixed(2)}%`}
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
              ;
            </div>
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Cultura</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcCultura}
                label={`${porcCultura.toFixed(2)}%`}
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
              ;
            </div>
            <div className="col perfil-column">
              <button className="bton-quiz">Quiz Contribuciones</button>
              <p className="acierto">
                <img src="/images/comprobado.png" alt="" />
                Aciertos:
              </p>
              <p className="fallos">
                <img src="/images/cancelar.png" alt="" />
                Fallos:
              </p>
              <h2 className="titulo-profile">Progreso</h2>
              <ProgressBar
                animated
                variant="success"
                now={porcContribuciones}
                label={`${porcContribuciones.toFixed(2)}%`} // Redondear 'now' a 2 decimales
                style={{
                  width: "300px",
                  height: "35px",
                  fontSize: "1.4rem",
                  marginTop: "50px",
                }}
              />
              ;
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
