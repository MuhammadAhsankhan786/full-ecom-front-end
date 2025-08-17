// // src/api/axiosInstance.js
// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_URL ||
//     (import.meta.env.MODE === "development"
//       ? "http://localhost:5001/api/v1"
//       : "https://full-ecom-back-end.vercel.app/api/v1"),
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// export default axiosInstance;

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL:
//     window.location.href.split(":")[0] == "http"
//       ? "http://localhost:5173/api/v1"
//       : "https://full-ecom-back-end.vercel.app/api/v1",
//   withCredentials: true,
// });

// export default axiosInstance;

// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    window.location.href.split(":")[0] == "http"
      ? "http://localhost:5001/api/v1" // ✅ backend local port
      : "https://full-ecom-back-end.vercel.app/api/v1", // ✅ backend live URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
