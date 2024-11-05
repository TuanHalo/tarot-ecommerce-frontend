import { UserDto } from "@/dtos/UserDtos"
import { Navigate, Outlet } from "react-router-dom"

type AuthRouterProps = {
    user: UserDto,
    redirect ?: string
}

const AuthRouter = ({ user, redirect = '/' }: AuthRouterProps) => {
    if (user) return <Navigate to={redirect} />
    return <Outlet />
}

export default AuthRouter