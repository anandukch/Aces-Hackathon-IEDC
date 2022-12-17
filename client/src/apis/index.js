import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     // const authToken = JSON.parse(localStorage.getItem("auth")!)?.token;
//     // const newConfig = config;
//     // if (authToken) {
//     //   newConfig.headers!.Authorization = `Bearer ${authToken}`;
//     // }
//     // return newConfig;
//   },
//   (error) => {
//     return console.log(error);
//   }
// );

export const login = (data) => api.post("/user/login", data)


export const register = (data) => api.post("/user/register", data)
export const addDoctor = (data) => api.post("/admin/add-doctor", data)
export const getDoctor = () => api.get("/user/doctor")
