
import axios from "axios";
// minha chave 2c28e29f28e815148f80eb437c8b2485c8ee826d;
export const key = "2c28e29f28e815148f80eb437c8b2485c8ee826d";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;