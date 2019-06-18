import axios from "axios";

const api = axios.create({
    baseURL: "https://areadoaluno-backend.herokuapp.com/api"
})

export default api;