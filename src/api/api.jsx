// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // change to your backend URL
});

// Add interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // get token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
