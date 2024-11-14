import { authService } from "@/services/auth.service";
import { getToken, setToken } from "@/utils/token";
import axios, { AxiosResponse } from "axios";

export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;
export const USER_API = import.meta.env.VITE_USER_API;
export const PRODUCT_API = import.meta.env.VITE_PRODUCT_API;
export const SCHEDULE_API = import.meta.env.VITE_SCHEDULE_API;

export const api = axios.create();
api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  async (error) => {
    try {
      if (
        error.response.status === 401 &&
        error.response.data.message === "Token expired"
      ) {
        const res = await authService.refreshToken();

        setToken(res.data);

        return api(error.config);
      }
    } catch (err) {}
  }
);

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
