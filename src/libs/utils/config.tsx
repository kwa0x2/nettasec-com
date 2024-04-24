import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.nettasec.com/api",
  headers: {
    "Content-Type": "application/json"
  },
});

export default instance;
