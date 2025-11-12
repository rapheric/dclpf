
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Dashboard/Rmdashboard/rsidebar";
import Header from "../components/Dashboard/Header";
import Footer from "../components/Dashboard/Footer";

import Overview from "../components/Dashboard/Rmdashboard/Content/Overview";
import RMDashboard from "../components/Dashboard/Rmdashboard/Content/RMDashboard";
import CODashboard from "../components/Dashboard/Rmdashboard/Content/CODashboard";
import Reports from "../components/Dashboard/Rmdashboard/Content/Reports";

const RMDashboardPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [activeMenu, setActiveMenu] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return <Navigate to="/loginpage" />;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return <Overview />;
      case "rm":
        return user.role === "rm" ? <RMDashboard /> : <p>Access denied</p>;
      case "co":
        return user.role === "co" ? <CODashboard /> : <p>Access denied</p>;
      case "reports":
        return <Reports />;
      default:
        return <p>Select a menu from the sidebar.</p>;
    }
  };

  // Example table data
const tableData = [
  { id: 1, name: "John Doe", role: "RM", status: "Active" },
  { id: 2, name: "Jane Smith", role: "CO", status: "Inactive" },
  { id: 3, name: "Alice Johnson", role: "RM", status: "Active" },
  { id: 4, name: "Michael Brown", role: "CO", status: "Active" },
  { id: 5, name: "Emily Davis", role: "RM", status: "Inactive" },
  { id: 6, name: "David Wilson", role: "CO", status: "Active" },
  { id: 7, name: "Sarah Miller", role: "RM", status: "Active" },
  { id: 8, name: "Robert Taylor", role: "CO", status: "Inactive" },
  { id: 9, name: "Laura Anderson", role: "RM", status: "Active" },
  { id: 10, name: "James Thomas", role: "CO", status: "Active" },
  { id: 11, name: "Olivia Martin", role: "RM", status: "Inactive" },
  { id: 12, name: "Daniel White", role: "CO", status: "Active" },
  { id: 13, name: "Sophia Harris", role: "RM", status: "Active" }
];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar
        active={activeMenu}
        onSelect={setActiveMenu}
        onLogout={logout}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex-1 flex flex-col">
        <Header user={user} />

        <main className="px-6 py-6 overflow-auto">
          {renderContent()}

          {/* Simple table below content */}
          <div className="mt-10 bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">User Overview Table</h2>
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Role</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="text-center hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{row.id}</td>
                    <td className="py-2 px-4 border-b">{row.name}</td>
                    <td className="py-2 px-4 border-b">{row.role}</td>
                    <td
                      className={`py-2 px-4 border-b ${
                        row.status === "Active" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default RMDashboardPage;
