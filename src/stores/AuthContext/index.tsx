import { PATH } from "@/config/path";
import { UserDto } from "@/dtos/UserDtos";
import { authService, LoginTypes } from "@/services/auth.service";
import { userService } from "@/services/user.service";
import { clearToken, setToken } from "@/utils/token";
import { clearUser, getUser, setUser } from "@/utils/user";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextDtos = {
    user: UserDto | null,
    login: (data: LoginTypes) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextDtos>({
    user: null,
    login: () => {},
    logout: () => {}
})

export const useAuth = () =>  useContext(AuthContext)

type AuthProviderProps = {
    children: React.ReactNode
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [user, _setUser] = useState<UserDto>(getUser());

    const navigate = useNavigate()

    const login = async (data: LoginTypes) => {
        try {
            const res = await authService.login(data)
    
            if (res.data) {
                setToken(res.data)

                const user = await userService.getProfile();

                setUser(user.data)
                _setUser(user.data)
                navigate(PATH.home)
            }
        } catch (err: any) {
            console.log(err)
            if (err?.response?.data?.message) {
                console.log(err.response.data.message)
            }
        }
    }

    const logout = () => {
        clearUser()
        clearToken()
        setUser(null)
    }

    const value: AuthContextDtos = {
        user,
        login,
        logout
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}