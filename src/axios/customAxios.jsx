import axios from "axios";

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  withCredentials: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

const token = localStorage.getItem("access_token");
customAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default customAxios;
