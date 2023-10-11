import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../shared/auth/AuthContext";
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to={{ pathname: "/login" }} state={{ from: location }} />;
  }
  return children;

  // auth !== null ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;
