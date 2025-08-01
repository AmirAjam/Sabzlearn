import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/v1/",
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance