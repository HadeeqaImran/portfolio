import axios from "axios";

// https://portfolio-2445.onrender.com

// http://localhost:3000/api

// Create Axios instance
const client = axios.create({
  baseURL: "https://portfolio-2445.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// // Add a request interceptor to include the token dynamically
// client.interceptors.request.use(
//   (config) => {
//     // For example, get token from localStorage (or cookies, etc.)
//     const token = localStorage.getItem('authToken');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default client;
