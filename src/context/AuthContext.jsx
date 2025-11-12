
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchProfile(token);
    else setLoading(false);
  }, []);

  const fetchProfile = async (token) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data.user);
      setRole(data.user.role);
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    localStorage.setItem("token", data.token);
    setUser(data.user);
    setRole(data.user.role);
    if (data.user.role === "rm") navigate("/rmdashboard");
    else navigate("/codashboard");
  };

  const register = async (name, email, password, role) => {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    localStorage.setItem("token", data.token);
    setUser(data.user);
    setRole(data.user.role);
    navigate("/loginpage");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setRole(null);
    navigate("/loginpage");
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
