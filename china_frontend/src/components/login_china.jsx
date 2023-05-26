import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../scss/login_china_style.css";
//import 'bootstrap/dist/css/bootstrap'
import china_templo from "../images/login_logo.jpg"; // Ruta relativa de la imagen

const getStoredUsername = () => {
  return sessionStorage.getItem("username");
};

export const Formulario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/china/login_view/", { username, password })
      .then((response) => {
        if (response.data.valid) {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("email",response.data.user.email)
          const fotoBack= decodeURIComponent(response.data.user.profile_picture)
          sessionStorage.setItem("foto", fotoBack.substring(1));
          localStorage.setItem("authToken", response.data.token);
          console.log(sessionStorage.getItem("foto"))

          window.location.href = "http://localhost:5173/next";
        } else {
            setLoginError("Usuario o contraseña incorrectos");
            console.log("No pudo validar el inicio de sesión");
          }
      })
      .catch((error) => {
        console.error(error);
      });
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
                    src={china_templo}
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
                    href="http://localhost:5173/register"
                  >
                    Crea una cuenta
                  </a>
                </div>
                <div className="form-text text-dark">
                  Vuelta al menú?
                  <a
                    className="registrarse"
                    href="http://localhost:5173/inicio"
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
