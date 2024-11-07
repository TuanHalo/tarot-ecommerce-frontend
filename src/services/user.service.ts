import { api, USER_API } from "@/config/api";
import { CreateUserDto } from "@/dtos/User/CreateUserDtos";
import { LoginUserDto } from "@/dtos/User/LoginUserDtos";

export const userService = {
    signup(data: CreateUserDto) {
        return api.post(`${USER_API}/user`, data);
    },

    signin(data: LoginUserDto) {
        return api.post(`${USER_API}/login`, data);
    },

    getProfile() {
        return api.get(`${USER_API}/user`)
    }
}