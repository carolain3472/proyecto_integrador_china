import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import "../scss/boton-next_style.css";


/**
 * Componente del botón de siguiente.
 *
 * Este componente representa un botón de siguiente que redirige al usuario a una página siguiente
 * cuando se hace clic en él.
 *
 * @param {string} nombre - El nombre que se muestra en el botón.
 * @param {string} imagen - La ruta de la imagen que se muestra junto al nombre.
 * @param {string} identificador - El identificador del botón.
 * @param {string} href - La URL de la página a la que se redirige.
 */

export function Boton_next({ nombre, imagen, identificador, href }) {
    const navigate = useNavigate();

  /**
   * Manejador de clic del botón de siguiente.
   *
   * Esta función se ejecuta cuando se hace clic en el botón de siguiente. Redirecciona al usuario
   * a la página especificada en 'href' utilizando la función 'navigate' proporcionada por React Router.
   */

    const handleClick = () => {
      navigate(href); // Redirecciona a la página especificada en href
    };

  return (
    <>
      <div className="siguiente">
        <div className="siguiente-hijo">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h5 className="next">Siguiente</h5>
            <FontAwesomeIcon
              icon={faHandPointRight}
              style={{ color: "#000000", marginLeft: "10px" }}
            />
          </div>

          <button className="boton-siguiente" onClick={handleClick}>
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
