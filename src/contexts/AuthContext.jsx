import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const UserProvider = ({ children }) => {
  
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("auth_user")));
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth_user")
  );

  const value = {
    authUser,
    setAuthUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
