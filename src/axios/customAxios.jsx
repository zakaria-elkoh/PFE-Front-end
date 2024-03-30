import axios from "axios";

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  withCredentials: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

// customAxios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

const token = localStorage.getItem("access_token");
customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default customAxios;
