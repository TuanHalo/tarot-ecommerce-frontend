import { useAuth } from "@/stores/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

type AuthRouterProps = {
  redirect?: string;
};

const AuthRouter = ({ redirect = "/" }: AuthRouterProps) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={redirect} />;
  }
  return <Outlet />;
};

export default AuthRouter;
