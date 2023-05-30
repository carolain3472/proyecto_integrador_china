import { Nav_bar } from "../components/nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "../scss/contacto_style.css";
import { api } from "../api/register_api";
import React, { useState } from "react";
import axios from "axios";
/**
 * Componente de contacto.
 *
 * Este componente muestra la interfaz de contacto
 * para comunicarse con el equipo de desarrollo
 *
 */

export function Contacto() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza una solicitud POST al servidor para el inicio de sesión
    axios
    api.post("/china/contact_us/", { nombre, email, message })
      .then((response) => {
        // Cuando la solicitud es exitosa
        if (response.data.valid) {
          console.log("El mensaje se envió con éxito")
        } else {
            console.log("No se pudo enviar el mensaje");
          }
      })
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


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
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-12 px-2 py-2 ">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={nombre}
                  onChange={handleNombreChange}
                  placeholder="Nombre Apellido"
                />
              </div>
              <div className="form-group col-md-12 px-2 py-2">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group col-md-12 px-2 py-2">
                <label htmlFor="textArea">Mensaje</label>
                <textarea
                  className="form-control"
                  id="textArea"
                  rows="8"
                  value={message}
                  onChange={handleMessageChange}
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
