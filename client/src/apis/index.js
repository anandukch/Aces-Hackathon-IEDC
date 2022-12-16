import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use(
  (config) => {
    // const authToken = JSON.parse(localStorage.getItem("auth")!)?.token;
    // const newConfig = config;
    // if (authToken) {
    //   newConfig.headers!.Authorization = `Bearer ${authToken}`;
    // }
    // return newConfig;
  },
  (error) => {
    return console.log(error);
  }
);

export default api;
