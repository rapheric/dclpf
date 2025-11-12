
// src/App.jsx
import {  Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import DashboardPage from "./pages/DashboardPage";
import RMDashboardPage from "./pages/RmDashboardPage";
import ProtectedRoute from "./context/routes/ProtectedRoute";
import ProfilePage from "./pages/profile";
// import { SiHomepage } from "react-icons/si";
import Home from "./pages/Home";
import DashboardLayout from "./components/dashcomponents/dashboardLayout";

export default function App() {
  return (
  
      <AuthProvider>
        <Routes>
           <Route path="/" element={<Home/>} />
          {/* Public Routes */}
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route
            path="/codashboard"
            element={
              <ProtectedRoute allowedRoles={["rm", "ro"]}>
                {/* <div className="flex flex-col items-center justify-center min-h-screen">
                  <h1 className="text-3xl text-gray-700 font-bold">
                    NCBA CoDashboard
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Welcome to the central operations dashboard.
                  </p>
                </div> */}
                 <DashboardLayout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/rmdashboard"
            element={
              <ProtectedRoute allowedRoles={["rm"]}>
                <RMDashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/codashboard"
            element={
              <ProtectedRoute allowedRoles={["co"]}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />

        {/* <Route
            path="/codashboard"
            element={
              <ProtectedRoute allowedRoles={["co"]}>
                <DashboardPage />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["rm", "ro"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    
  );
}
