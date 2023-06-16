import React from 'react';
import { Nav_bar } from "../components/nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "../scss/contacto_style.css";

/**
 * Componente de contacto.
 *
 * Este componente muestra la interfaz de contacto
 * para comunicarse con el equipo de desarrollo
 *
 */

export function Contacto() {
  return (
    <>
      <Nav_bar />
      <main className="contenedor-contacto">
        <div className="imagen-izq" style={{ marginTop: "40px" }}>
          <img src="/images/templo-contacto.jpg" alt="" />
        </div>
        <div className="contenido-der " style={{ marginTop: "120px" }}>
          <div className="titulo-contacto">
            <h1>Contáctanos</h1>
          </div>
          <div className="formulario-contacto p-3 ">
            <form>
              <div className="form-group col-md-12 px-2 py-2 ">
                <label htmlFor="name">Nombre</label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Nombre Apellido"
                />
              </div>
              <div className="form-group col-md-12 px-2 py-2">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group col-md-12 px-2 py-2">
                <label htmlFor="textArea">Mensaje</label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="8"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <button
                  type="submit"
                  className="boton-enviar col-md-5 mx-2 px-2 py-2"
                >
                  Enviar
                </button>
                <div className="mensaje col-md-5 mx-5 text-center">
                  <FontAwesomeIcon
                    icon={faMessage}
                    style={{ color: "#000000"}}
                  />
                  <a>+57 320-400-9008</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
