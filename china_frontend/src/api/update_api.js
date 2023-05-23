import axios from 'axios'

export const updateUser = (user, password) => {
    return axios.post("http://127.0.0.1:8000/update/",{ user, password })
}
