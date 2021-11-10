import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext as useAuth } from "../Context/Authentication/AuthContext";

export const Message = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>Send Message Form</div>;
};
