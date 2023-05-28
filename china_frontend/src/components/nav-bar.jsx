import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../scss/nav_bar_style.css";

/**
 * Componente de barra de navegación principal.
 * Muestra el logotipo y los enlaces a diferentes secciones del sitio web.
 * También incluye un enlace para iniciar sesión.
*/

export function Nav_bar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          <img
            src="/images/templo-chino.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Finding China
        </a>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className="nav-link"
                activeclassname="active"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sobre-nosotros"
                className="nav-link"
                activeclassname="active"
              >
                Sobre nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fyi" className="nav-link" activeclassname="active">
                FYI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contacto"
                className="nav-link"
                activeclassname="active"
              >
                Contáctanos
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/login" className="boton-inicio">
          Iniciar sesión
        </Link>{" "}
      </nav>
    </>
  );
}
