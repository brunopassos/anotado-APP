import axios from "axios";

export const Api = axios.create({
  baseURL: "https://anotadoapi.onrender.com",
});
