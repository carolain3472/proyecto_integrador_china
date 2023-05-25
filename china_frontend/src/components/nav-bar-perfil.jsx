import "../scss/nav_bar_perfil_style.css";
import { Logout_china } from "../components/logout_china";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Nav_bar_perfil() {
  const username = sessionStorage.getItem("username");

  return (
    <nav className="navbar navbar-light bg-light custom-sidebar">
      <div className="d-flex flex-column">
        <div className="navbar-brand align-top">
          <span className="navbar-text custom-navbar-brand">
            <img
              src="../src/images/templo-chino.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt=""
            />
            <br />
            {username}
          </span>
        </div>
        <div>
          <ul className="navbar-nav custom-navbar-nav">
            <li className="nav-item custom-nav-item">
              <NavLink
                exact
                to="/ajustes"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                Ajustes
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/historia"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                Historia
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/cultura"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                Cultura
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/contribuciones"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
                Contribuciones
              </NavLink>
            </li>
            <li className="nav-item custom-nav-item">
              <NavLink
                to="/minijuegos"
                className="nav-link custom-nav-link"
                activeclassname="active"
              >
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
