import RMSection from "./RMSection";
import COSection from "./COSection";
import ReportsSection from "./ReportsSection";

const  DashboardContent = ({ active, user }) => {
  switch (active) {
    case "rm":
      return <RMSection user={user} />;
    case "co":
      return <COSection user={user} />;
    case "reports":
      return <ReportsSection />;
    default:
      return (
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
          <p className="text-gray-600 mb-6">
            Welcome, <span className="font-semibold">{user.name}</span> ({user.role})
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500">Clients Managed</h3>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500">Pending Approvals</h3>
              <p className="text-2xl font-bold text-gray-800">7</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500">New Applications</h3>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-bold text-gray-800">$12,450</p>
            </div>
          </div>
        </div>
      );
  }
}
export default DashboardContent
