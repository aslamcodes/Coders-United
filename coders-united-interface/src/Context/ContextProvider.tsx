import { Children } from "react";
import { AuthProvider } from "./AuthContext";

export const ContextProvider = ({ children }) => {
  return <AuthProvider>{Children}</AuthProvider>;
};
