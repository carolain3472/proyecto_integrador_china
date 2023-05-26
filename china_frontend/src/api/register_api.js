import axios from 'axios'

export const createuser = (foto, email1, nombre, contraseña) => {
    return axios.post("http://localhost:8000/china/register/", { foto, email1, nombre, contraseña })
  }

