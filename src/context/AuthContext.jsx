import { createContext, useState } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async (email, password) => {
    try {
      // placeholder: simulate API
      const fakeUser = {
        name: "John Doe",
        email,
        role: email.includes("co") ? "CO" : "RM",
        token: "fake-jwt-token",
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  const register = async (formData) => {
    try {
      const fakeUser = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        token: "fake-jwt-token",
      };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
    } catch (err) {
      console.error("Register error", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
