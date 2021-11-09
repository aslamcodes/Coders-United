import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
  setToken: () => {},
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        user: null,
        token: null,
        login: () => {},
        logout: () => {},
        setUser: () => {},
        setToken: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useUser in not within UserProvider");
  }
  return context;
};

AuthContext.displayName = "User Authentication Context";
