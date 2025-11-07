import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar"
import DashboardContent from "../components/Dashboard/DashboardContent";
import { FaBars } from "react-icons/fa";

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return <Navigate to="/login" />;

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        active={activeSection}
        onSelect={setActiveSection}
        onLogout={logout}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="text-[#5B2C6F] hover:text-[#4A235A] lg:hidden"
            >
              <FaBars size={22} />
            </button>
            <h1 className="text-xl font-bold text-gray-800">
              NCBA Dashboard
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {user.name} ({user.role})
          </p>
        </header>

        {/* Content */}
        <DashboardContent active={activeSection} user={user} />
      </div>
    </div>
  );
}
