import React from 'react';
import "../scss/nav_bar_perfil_style.css";
import { Logout_china } from "../components/logout_china";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";


/**
 * Componente de barra de navegación del perfil.
 * Muestra el nombre de usuario y la imagen de perfil del usuario actual.
 * Contiene enlaces a diferentes secciones del perfil.
 */
export function Nav_bar_perfil() {
  
  // Obtener el nombre de usuario y la imagen de perfil almacenados en el almacenamiento de sesión
  const username = sessionStorage.getItem("username");
  const profilePic = sessionStorage.getItem("foto");

  return (
    <nav className="navbar navbar-light bg-light custom-sidebar">
      <div className="d-flex flex-column">
        <div className="navbar-brand align-top">
          <span className="navbar-text custom-navbar-brand">
            <img
              src={profilePic}
              className="img-fluid profile-image-pic img-thumbnail my-3"
              width="100px"
              alt="profile"
            />
            <br />
            {username}
          </span>
        </div>
        <div>
          <ul className="navbar-nav custom-navbar-nav">
            <li className="nav-item custom-nav-item">
              <NavLink
                exact="true"
                to="/profile"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Perfil
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                exact="true"
                to="/ajustes"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faUserGear}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Ajustes
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/historia"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faLandmark}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Historia
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/cultura"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Cultura
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/contribuciones"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faHandHoldingHand}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Contribuciones
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/minijuegos"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                <FontAwesomeIcon
                  icon={faGamepad}
                  size="sm"
                  className="icon-custom"
                  style={{marginRight: "15px" }}
                />
                Minijuegos
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="div-logout custom-div-logout">
          <Logout_china />
        </div>
      </div>
    </nav>
  );
}
