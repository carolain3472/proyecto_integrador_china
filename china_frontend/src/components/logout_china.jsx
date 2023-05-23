import React from "react";
import axios from "axios";


export const Logout_china = () => {
  const handleLogout = () => {
    
    const storedUsername = sessionStorage.getItem("username");
    console.log(storedUsername)

    axios
      .post("http://localhost:8000/logout/", { username: storedUsername })
      .then((response) => {
        console.log("Logout exitoso");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        window.location.href = "http://localhost:5173/inicio";
        // Realizar cualquier acción adicional necesaria, como redirigir al usuario a la página de inicio de sesión.
 
      })
      .catch((error) => {
        console.error("Error al realizar el logout", error);
        // Manejar el error de acuerdo a tus necesidades.
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
