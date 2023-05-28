import axios from 'axios'



export const api = axios.create({
    baseURL: 'https://natalialopez23.pythonanywhere.com/'
  });


export const createuser = (foto, email1, nombre, contraseña) => {
  return api.post('/china/register/', { foto, email1, nombre, contraseña });
};

