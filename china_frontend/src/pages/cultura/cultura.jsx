import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import "../../scss/user_profile_style.css";
import "../../scss/boton_toggler_style.css";
import { Button, Modal } from "react-bootstrap";
import Experience from "../../components/Experience"
import { Canvas } from '@react-three/fiber'

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
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
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
          <h1 className="titulo-settings">Cultura</h1>
        </div>
        <div className="formulario-settings"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <img src="/images/cultura-mock.png" alt="Foto" />
        </div>

      </main>

      <div>
                  <button className="btn" type="button" onClick={handleModalOpen}>
                    ver modelo
                  </button>
                </div>


                <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-1, 7, 10],
        }}
      >
        <Experience />
      </Canvas>
    </div>


                <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
  <Modal.Header>
    <Modal.Title>Templo chino</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-1, 7, 10],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleModalClose}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>

    </>
  );
}
