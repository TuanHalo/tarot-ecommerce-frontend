import { Navigate, Outlet } from "react-router-dom"
import { UserDto } from "@/dtos/UserDtos"

type PrivateRouterProps = {
    user: UserDto,
    redirect?: string
}

const PrivateRouter = ({ user, redirect = '/'} : PrivateRouterProps) => {
    if (!user) return <Navigate to={redirect} />
    return <Outlet />
}

export default PrivateRouter