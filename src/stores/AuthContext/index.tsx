import { PATH } from "@/config/path";
import { LoginUserDto } from "@/dtos/User/LoginUserDtos";
import { UserDto } from "@/dtos/User/UserDtos";
import { userService } from "@/services/user.service";
import { clearToken, setToken } from "@/utils/token";
import { clearUser, getUser, setUser } from "@/utils/user";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextDtos = {
  user: UserDto | null;
  login: (data: LoginUserDto) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextDtos>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, _setUser] = useState<UserDto | null>(getUser());

  const navigate = useNavigate();

  const login = async (data: LoginUserDto) => {
    try {
      const res: any = await userService.signin(data);

      if (res) {
        setToken(res.accessToken);

        const user: any = await userService.getProfile();

        setUser(user);
        _setUser(user);
        navigate(PATH.home);
      }
    } catch (err: any) {
      if (err?.response?.data?.message) {
      }
    }
  };

  const logout = () => {
    clearUser();
    clearToken();
    setUser(null);
    _setUser(null);
  };

  const value: AuthContextDtos = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
