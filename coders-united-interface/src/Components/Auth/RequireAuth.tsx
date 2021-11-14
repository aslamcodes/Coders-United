import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Context/Authentication/AuthContext";

export const RequireAuth = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};
