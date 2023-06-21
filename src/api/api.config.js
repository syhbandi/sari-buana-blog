import axios from "axios";
const api = axios.create({
  baseURL: "https://saribuana.shop/api/",
});

export default api;
