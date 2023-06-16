import React from 'react';
import { useState } from "react";
import { Update_china } from "../components/update_china";
import { Nav_bar_perfil } from "../components/nav-bar-perfil";
import "../scss/user_profile_style.css";
import "../scss/boton_toggler_style.css";

/**
 * Componente de ajustes de perfil.
 * 
 * Este componente muestra la interfaz de ajustes de perfil, que incluye una barra
 * lateral con opciones de navegación y un formulario para actualizar la información
 * de perfil.
 */

export function Ajustes() {

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
        <div className="settings">
          <h1 className="titulo-settings">Ajustes de Perfil</h1>
        </div>
          <Update_china />
      </main>
    </>
  );
}
