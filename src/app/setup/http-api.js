import axios from "axios";
import TokenService from "./token-service";

const accessToken = TokenService.getAccessToken();


export const instance = axios.create({
  baseURL: "http://ec2-3-76-80-33.eu-central-1.compute.amazonaws.com/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

instance.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {

    return Promise.reject(error);
  }
);
