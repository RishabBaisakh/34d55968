import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://aircall-api.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
