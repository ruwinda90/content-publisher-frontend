import axios from "axios";

export const authApi = axios.create({
  baseURL: "http://localhost:8080/api/v1.0/auth",
  timeout: 2000,
});

export const protectedApi = axios.create({
  baseURL: "http://localhost:8080/api/v1.0",
  timeout: 2000,
});
