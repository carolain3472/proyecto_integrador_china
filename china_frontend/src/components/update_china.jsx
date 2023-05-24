import React, { useState } from "react";
import { updateUser } from "../api/update_api";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function Update_china() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');

  const getStoredUsername = () => {
    return sessionStorage.getItem("username");
  };

  const getStoredEmail = () => {
    return sessionStorage.getItem("email");
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLogout = (event) => {
    event.preventDefault();

    const storedUsername = sessionStorage.getItem("username");

    axios
      .post("http://127.0.0.1:8000/update/", { username: storedUsername, password: newPassword })
      .then((response) => {
        console.log("Se han actualizado los campos");
        sessionStorage.removeItem("username");
        navigate("/inicio");
      })
      .catch((error) => {
        console.error("Error al realizar el update", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <div>
          <input type="text" value={getStoredUsername()} id="myInput" disabled />
          <input type="text" value={getStoredEmail()} id="myInput" disabled />
          <input type="text" value={newPassword} onChange={handlePasswordChange} />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
