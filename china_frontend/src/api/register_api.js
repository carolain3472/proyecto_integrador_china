import axios from 'axios'



export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
  });


export const createuser = (foto, email1, nombre, contraseña) => {
  return api.post('/china/register/', { foto, email1, nombre, contraseña });
};

