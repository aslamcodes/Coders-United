import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { logout } from "../Context/Authentication/action";
import {
  useAuthContext as useAuth,
  useAuthDispatch as useDispatch,
} from "../Context/Authentication/AuthContext";

export const Message = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  const logoutHandler = () => {
    logout(dispatch);
  };

  return (
    <div>
      Send Message Form
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
