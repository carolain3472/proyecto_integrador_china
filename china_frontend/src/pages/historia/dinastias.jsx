import React from 'react';
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Button, Modal } from "react-bootstrap";
import "../../scss/historia_style.css";
import "../../scss/dinastias_style.css";
import "../../scss/boton_toggler_style.css";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import { Canvas } from "react-three-fiber";
import { Modelo_dinastia } from "../../components/Modelo_dinastia";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Float, Text, OrbitControls } from "@react-three/drei";

/**
 * El componente `Dinastias` representa una página que muestra información sobre
 * las dinastías antiguas de China y permite al usuario interactuar con ella.
 */

export function Dinastias() {
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
        className={`contenedor-historia ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="historia-titulo">
          <h1>Dinastias</h1>
        </div>

        <div className="contenido-dinastias">
          <div className="dinastias-parrafo">
            <p>
              La civilización antigua china se desarrolló a lo largo de varias
              dinastías que dejaron un legado significativo en la historia del
              país. A continuación, se presenta una descripción más detallada de
              cada una de las dinastías mencionadas y la arquitectura utilizada
              en la antigua China:
            </p>
          </div>
        </div>

        <div className="botones-dinastias">
          <NavLink
            exact="true"
            to="/xia"
            className="nav-link"
            activeclassname="active"
          >
            <button>XIA</button>
          </NavLink>

          <NavLink
            exact="true"
            to="/shang"
            className="nav-link"
            activeclassname="active"
          >
            <button>SHANG</button>
          </NavLink>

          <NavLink
            exact="true"
            to="/zhou"
            className="nav-link"
            activeclassname="active"
          >
            <button>ZHOU</button>
          </NavLink>
          
          <NavLink
            exact="true"
            to="/qin"
            className="nav-link"
            activeclassname="active"
          >
            <button>QIN</button>
          </NavLink>
          
          <NavLink
            exact="true"
            to="/han"
            className="nav-link"
            activeclassname="active"
          >
            <button>HAN</button>
          </NavLink>
        </div>

        <div className="boton-modelo">
          <Button
            type="button"
            className="boton-dinastia btn btn-danger my-5 mx-5"
            size="md"
            onClick={handleModalOpen}
            variant="primary"
          >
            Guerrero de Terracota
          </Button>
        </div>

        <Modal
          show={showModal}
          onHide={handleModalClose}
          centered
          backdrop="static"
        >
          <Modal.Header>
            <Modal.Title>Guerrero Chino</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="modelo-dinastia"
              style={{
                width: "100%",
                height: "500px",
                marginBottom: "0",
              }}
            >
              <Canvas
                camera={{
                  fov: 45,
                  near: 0.005,
                  far: 800,
                  position: [300, 5, -150],
                }}
              >
                {/* Controles */}
                <OrbitControls makeDefault />

                {/* Luces */}
                <directionalLight position={[5, 1, 6]} intensity={0.7} />
                <ambientLight intensity={0.5} />

                <Modelo_dinastia
                  position={[-10, -50, 10]}
                  scale={20}
                ></Modelo_dinastia>
              </Canvas>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="secondary"
              onClick={() => {
                handleModalClose();
              }}
            >
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Historia"
            imagen="/images/historia-icono.png"
            identificador={123}
            href="/historia"
          />

          <Boton_next
            nombre="Arquitectura"
            imagen="/images/arquitectura-icono.png"
            identificador={123}
            href="/arquitectura"
          />
        </div>
      </main>
    </>
  );
}
