import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../shared/auth/AuthContext";
import "./PrivateRouth.css";

const PrivateRouth = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      children={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRouth;
