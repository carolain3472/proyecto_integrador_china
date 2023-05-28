import React from "react";
import axios from "axios";
import "../scss/logout_boton_style.css"
import { api } from "../api/register_api";
import { useNavigate } from "react-router-dom";

/**
  * crea un botón de cierre de sesión que, al hacer clic, realiza una solicitud al servidor para cerrar la 
  * sesión del usuario. Luego, elimina los datos de usuario almacenados en el almacenamiento de sesión y 
  * redirige al usuario a la página de inicio ("/").
  */

export const Logout_china = () => {
  const navigate = useNavigate();
  /**
  * Maneja la función de cierre de sesión del usuario.
  * Realiza una solicitud de cierre de sesión al servidor y realiza acciones adicionales,
  * como eliminar los datos de usuario almacenados en el almacenamiento de sesión y redirigir al usuario.
  */
  const handleLogout = () => {
    
    const storedUsername = sessionStorage.getItem("username");
    console.log(storedUsername)

    axios
      api.post("/logout/", { username: storedUsername })
      .then((response) => {
        console.log("Logout exitoso");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        navigate("/");
        
         //navigate
        // Realizar cualquier acción adicional necesaria, como redirigir al usuario a la página de inicio de sesión.
 
      })
      .catch((error) => {
        console.error("Error al realizar el logout", error);
        // Manejar el error de acuerdo a tus necesidades.
      });
  };

  return (
      <button className="boton-logout" onClick={handleLogout}>Logout</button>
  );
};
