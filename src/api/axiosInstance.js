import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.href.split(":")[0] === "http"
      ? "http://localhost:5001/api/v1"
      : "https://full-ecom-back-end.vercel.app/api/v1",
  withCredentials: true,
});

export default api;
