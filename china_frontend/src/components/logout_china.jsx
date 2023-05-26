import React from "react";
import axios from "axios";
import "../scss/logout_boton_style.css"
import { api } from "../api/register_api";
import { useNavigate } from "react-router-dom";



export const Logout_china = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    const storedUsername = sessionStorage.getItem("username");
    console.log(storedUsername)

    axios
      api.post("/logout/", { username: storedUsername })
      .then((response) => {
        console.log("Logout exitoso");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        navigate("/inicio");
        
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
