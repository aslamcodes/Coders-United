import { createContext, Dispatch, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

// Contexts
export const AuthContext = createContext(initialState);

export const AuthDispatchContext = createContext({} as Dispatch<any>);

// Providers
export const AuthContextProvider = ({ children }) => {
  const [userInfo, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={userInfo}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

// Hooks
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext in not within AuthProvider");
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error("useAuthDispatch in not within AuthProvider");
  }
  return context;
};

AuthContext.displayName = "User Authentication Context";
