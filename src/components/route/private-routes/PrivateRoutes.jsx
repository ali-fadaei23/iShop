import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { useAuth } from "../../../shared/auth/AuthContext";

const PrivateRoutes = () => {
  let auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
export default PrivateRoutes;
