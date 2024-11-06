import { api, USER_API } from "@/config/api";

export const userService = {
    signup(data: any) {
        return api.post(`${USER_API}`, data);
    },

    getProfile() {
        return api.get(`${USER_API}`)
    }
}