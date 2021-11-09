import { AuthContextProvider } from "./Authentication/AuthContext";

export const ContextProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
