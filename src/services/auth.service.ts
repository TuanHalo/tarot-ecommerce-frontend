import { api, AUTHENTICATION_API } from "@/config/api";

export const authService = {
  refreshToken() {
    return api.post(`${AUTHENTICATION_API}/refresh-token`);
  },
};
