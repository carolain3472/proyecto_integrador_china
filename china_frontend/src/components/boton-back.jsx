import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../scss/boton-back_style.css";

/**
 * Componente del botón de retroceso.
 *
 * Este componente representa un botón de retroceso que redirige al usuario a una página anterior
 * cuando se hace clic en él.
 *
 * @param {string} nombre - El nombre que se muestra en el botón.
 * @param {string} imagen - La ruta de la imagen que se muestra junto al nombre.
 * @param {string} identificador - El identificador del botón.
 * @param {string} href - La URL de la página a la que se redirige.
 */

export function Boton_back({ nombre, imagen, identificador, href }) {
  const navigate = useNavigate();

  /**
   * Manejador de clic del botón de retroceso.
   *
   * Esta función se ejecuta cuando se hace clic en el botón de retroceso. Redirecciona al usuario
   * a la página especificada en 'href' utilizando la función 'navigate' proporcionada por React Router.
   */

  const handleClick = () => {
    navigate(href); // Redirecciona a la página especificada en href
  };

  return (
    <>
      <div className="back">
        <div className="back-hijo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faHandPointLeft}
              style={{ color: "#000000", marginRight: "10px"}}
            />
            <h5 className="back">Anterior</h5>
          </div>

          <button className="boton-back" onClick={handleClick}>
            <span className="button-content">
              <img src={imagen} alt="Imagen" className="button-icon" />
            </span>
            {nombre}
          </button>
        </div>
      </div>
    </>
  );
}
