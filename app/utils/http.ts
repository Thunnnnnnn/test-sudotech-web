import axios from "axios";

const url = process.env.API_URL;

const api = axios.create({
  baseURL: url || "http://localhost:8080",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") || "" : ""}`,
  },
});

export default api;
