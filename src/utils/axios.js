import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";

const instance = axios.create({
    baseURL,
});

export default instance;