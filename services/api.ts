import axios from "axios";
import Constants from "expo-constants";

const { baseURL, key } = Constants.manifest.extra.api;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Client-ID ${key}`
  }
});

export default api;
