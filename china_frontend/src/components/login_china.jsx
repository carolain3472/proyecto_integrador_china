import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
//import 'bootstrap/dist/css/bootstrap'
import china_templo from '../images/login_china.jpg'; // Ruta relativa de la imagen


export const Formulario = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar la solicitud POST al backend
    axios
      .post("http://localhost:8000/china/login_view/", { username, password })
      .then((response) => {
        // Manejar la respuesta del backend
        if (response.data.valid) {
          // Redirigir a otra página
          window.location.href = "http://localhost:5173/next";
        } else {
          // Mostrar un mensaje de error o realizar alguna otra acción en caso de respuesta negativa
          console.log("No lo pudo validar");
        }
      })
      .catch((error) => {
        // Manejar el error de la solicitud
        console.error(error);
      });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
  
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
              <span className="h1 fw-bold mb-0">寻找中国</span>
            </div>
  
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
              <form style={{ width: "23rem" }} onSubmit={handleSubmit}>
  
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Finding china</h3>
  
                <div className="form-outline mb-4">
                  <input id="form2Example18" className="form-control form-control-lg"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange} />
                  <label className="form-label" htmlFor="form2Example18">Username</label>
                </div>
  
                <div className="form-outline mb-4">
                  <input type="password" id="form2Example28" className="form-control form-control-lg" value={password}
                    onChange={handlePasswordChange} />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>
  
                <div className="pt-1 mb-4">
                <button className="btn btn-lg btn-block" type="submit" style={{ backgroundColor: '#FFCCCC', borderColor: '#FFCCCC' }}>Login</button>

                </div>
  
                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
  
              </form>
  
            </div>
  
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img  src={china_templo} alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
          </div>
        </div>
      </div>
    </section>
  );
  
  
};


