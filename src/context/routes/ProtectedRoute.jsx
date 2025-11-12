// // src/components/ProtectedRoute.jsx
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

// export default function ProtectedRoute({ children, allowedRoles }) {
//   const { user, role, loading } = useContext(AuthContext);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-gray-600">
//         Loading...
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-600">
//         <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
//         <p className="text-gray-500">
//           You do not have permission to view this page.
//         </p>
//       </div>
//     );
//   }

//   return children;
// }
// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"
export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return children;
}
