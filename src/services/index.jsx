import axios from "axios";

export const Api = axios.create({
  baseURL: "http://192.168.18.7:3000",
});
