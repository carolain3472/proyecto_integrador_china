import axios from 'axios'

export const createuser = (user) => {
    return axios.post("http://localhost:8000/china/register/", user)
}