import { createContext, useContext, useState } from "react";

import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (formData) => {
    const { data } = await api.post("/auth/login", formData);

    setUser(data.user);

    return data;
  };

  const register = async (formData) => {
    const { data } = await api.post("/auth/register", formData);

    return data;
  };

  const logout = async () => {
    await api.post("/auth/logout");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
