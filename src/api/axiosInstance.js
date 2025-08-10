// // src/api/axiosInstance.js
import axios from "axios";
const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:5001/api/v1"
      : "https://full-ecom-back-end.vercel.app/api/v1"),
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api/v1",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

// const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_URL ||
//     "https://full-ecom-back-end.vercel.app/api/v1",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

// const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.VITE_API_URL ||
//     (window.location.hostname === "localhost"
//       ? "http://localhost:5001/api/v1"
//       : "https://full-ecom-back-end.vercel.app/api/v1"),
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5001/api/v1",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;
