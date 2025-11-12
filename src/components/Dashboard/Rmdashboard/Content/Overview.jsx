import React from "react";

const Overview = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
    <p className="text-gray-600 mb-8">
      Welcome to the <strong>NCBA Dashboard</strong>. Use the sidebar to navigate through
      various sections such as Relationship Managers (RMs), Compliance Officers (COs), and reports.
    </p>

    {/* Quick Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div className="bg-white shadow rounded-lg p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Active RMs</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">8</p>
      </div>
      <div className="bg-white shadow rounded-lg p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Active COs</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">6</p>
      </div>
      <div className="bg-white shadow rounded-lg p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Inactive Users</h3>
        <p className="text-3xl font-bold text-red-500 mt-2">3</p>
      </div>
      <div className="bg-white shadow rounded-lg p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">17</p>
      </div>
    </div>

    {/* Activity Summary */}
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Recent Activity</h3>
      <ul className="text-gray-600 space-y-2">
        <li>• John Doe updated client portfolio on <span className="text-gray-800 font-medium">Nov 6, 2025</span></li>
        <li>• Jane Smith marked 2 accounts as inactive</li>
        <li>• New RM <span className="font-medium text-gray-800">Sophia Harris</span> was added</li>
        <li>• Compliance report for October completed</li>
      </ul>
    </div>

    {/* Footer Note */}
    <p className="text-sm text-gray-500 mt-10 text-center">
      © 2025 NCBA Dashboard — Data updates every 24 hours.
    </p>
  </div>
);

export default Overview;
