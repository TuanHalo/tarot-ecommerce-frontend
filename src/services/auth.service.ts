import { api, AUTHENTICATION_API } from "@/config/api"

export type LoginTypes = {
    username: string,
    password: string,
}

export const authService = {
    login(data: LoginTypes) {
        return api.post(`${AUTHENTICATION_API}`, data)
    }
}