const statsRM = [
  { label: "Clients Managed", value: 24 },
  { label: "Pending Approvals", value: 7 },
  { label: "New Applications", value: 5 },
  { label: "Total Revenue", value: "$12,450" },
];

const recentActivityRM = [
  { date: "2025-11-06", activity: "Approved loan for John Doe" },
  { date: "2025-11-05", activity: "Added new client Jane Smith" }
];

const RMDashboard = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">RM Dashboard</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statsRM.map((stat, i) => (
        <div key={i} className="bg-green-600 text-white p-6 rounded-lg shadow">
          <h3 className="font-bold">{stat.label}</h3>
          <p className="mt-2 text-xl">{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <table className="min-w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Activity</th>
          </tr>
        </thead>
        <tbody>
          {recentActivityRM.map((item, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border">{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RMDashboard;
