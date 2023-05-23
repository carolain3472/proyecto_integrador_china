import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav_bar } from "../components/nav-bar";
import "../scss/page_init_style.css";

export function Page_init() {
  return (
    <>
      <Nav_bar />
      <main className="inicio-design">
        <div className="informacion">
          <div className="titulo-container">
            <h1 className="titulo">
              DESCUBRE LA <br /> HISTORIA
            </h1>
          </div>
          <div className="registro">
            <Link to="/register">
              <button className="boton-registro">
                Registrarse
                <img
                  className="icono-registro"
                  src="../src/images/registro.png"
                  alt="Registro"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="imagen-inicio"></div>
      </main>
    </>
  );
}
