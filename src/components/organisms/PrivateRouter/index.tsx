import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/stores/AuthContext";

type PrivateRouterProps = {
  redirect?: string;
};

const PrivateRouter = ({ redirect = "/" }: PrivateRouterProps) => {
  const { user } = useAuth();

  if (!user) return <Navigate to={redirect} />;
  return <Outlet />;
};

export default PrivateRouter;
