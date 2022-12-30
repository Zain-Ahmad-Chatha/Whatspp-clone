import axios from "axios";
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:3001/v1",
});

export default instance;
