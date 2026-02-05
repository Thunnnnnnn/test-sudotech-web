import axios from "axios";

const url = process.env.API_URL;

const api = axios.create({
  baseURL: url || "",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "Bearer-Token":
      typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",
  },
});

export default api;
