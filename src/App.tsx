import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import RMChecklist from "./components/Dashboard/RMChecklist";
import CODashboard from "./components/Dashboard/CODashboard";


interface User {
  role: string;
  [key: string]: any;
}
interface AuthContextType {
  user: User | null;
}
interface PrivateRouteProps {
  children: ReactNode;
  role?: string;
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user } = useContext(AuthContext) as AuthContextType;
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

export default function App() {
  const { user } = useContext(AuthContext) as AuthContextType;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/register"
          element={
            !user ? <RegisterPage /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/rm"
          element={
            <PrivateRoute role="RM">
              <RMChecklist />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/co"
          element={
            <PrivateRoute role="CO">
              <CODashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
