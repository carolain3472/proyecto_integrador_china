
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "../scss/login_china_style.css";
import { api } from "../api/register_api";


/**
 * Obtiene el nombre de usuario almacenado en sessionStorage.
 * @returns {string | null} El nombre de usuario almacenado, o null si no hay ninguno.
 */
const getStoredUsername = () => {
  return sessionStorage.getItem("username");
};

/**
 * Componente Formulario para el inicio de sesión.
 */

export const Formulario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  /**
  * Maneja el cambio en el campo de nombre de usuario.
  * @param {Object} event - El evento de cambio del campo de nombre de usuario.
  */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  /**
  * Maneja el cambio en el campo de contraseña.
  * @param {Object} event - El evento de cambio del campo de contraseña.
  */
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /**
  * Maneja el envío del formulario de inicio de sesión.
  * Realiza una solicitud de inicio de sesión al servidor y almacena los datos de usuario y token de 
  * autenticación.
  * Navega a la página "/next" en caso de éxito.
  * @param {Object} event - El evento de envío del formulario.
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza una solicitud POST al servidor para el inicio de sesión
    axios
    api.post("/china/login_view/", { username, password })
      .then((response) => {
        // Cuando la solicitud es exitosa
        if (response.data.valid) {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("email",response.data.user.email)
          const fotoBack= decodeURIComponent(response.data.user.profile_picture)
          sessionStorage.setItem("foto", fotoBack.substring(1));
          localStorage.setItem("authToken", response.data.token);
          console.log(sessionStorage.getItem("foto"))
          navigate("/next");
        } else {
            setLoginError("Usuario o contraseña incorrectos");
            console.log("No pudo validar el inicio de sesión");
          }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
  * Redirecciona al usuario a la página de registro.
  */
  const redireccionarRegistro= () => {
    navigate('/register'); 
  };

  /**
  * Redireccionar a la página de registro
  */
  const redireccionarInicio= () => {
    navigate('/'); 
  };

  return (
    <div className="padre text-center">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h1 className="text-center fw-bold mb-0">Finding China</h1>
            <h2 className="text-center fw-bold mb-0">寻找中国</h2>
            <div className="card my-5 text-center">
              <form
                className="card-body cardbody-color"
                onSubmit={handleSubmit}
              >
                <div>
                  <img
                    src="/images/login_logo.jpg"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    id="form2Example18"
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                </div>
                {loginError && (
                  <div className="error-login text-danger">
                    {loginError}
                  </div>
                )}
                <div className="mb-3">
                  <button className="btn form-control" type="submit">
                    Login
                  </button>
                </div>
                <div className="form-text text-dark">
                  No estas registrado?
                  <a
                    className="registrarse"

                    onClick={redireccionarRegistro}
                  >
                    Crea una cuenta
                  </a>
                </div>
                <div className="form-text text-dark">
                  Vuelta al menú?
                  <a
                    className="registrarse"
                    onClick={redireccionarInicio} 
                  >
                    Click aquí
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
