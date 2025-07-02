import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8081/api/matricula/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;