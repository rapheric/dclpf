import { useState } from "react";
import { FaDownload, FaFileAlt, FaSearch } from "react-icons/fa";

const Reports = () => {
  const [search, setSearch] = useState("");
  const [reportType, setReportType] = useState("all");

  const reports = [
    {
      id: 1,
      title: "Monthly Performance Report",
      date: "2025-11-01",
      type: "Performance",
      size: "2.1 MB",
    },
    {
      id: 2,
      title: "Loan Approval Summary",
      date: "2025-10-30",
      type: "Finance",
      size: "1.4 MB",
    },
    {
      id: 3,
      title: "Client Onboarding Report",
      date: "2025-10-28",
      type: "Operations",
      size: "1.2 MB",
    },
    {
      id: 4,
      title: "Quarterly Risk Assessment",
      date: "2025-09-30",
      type: "Compliance",
      size: "3.6 MB",
    },
  ];

  const filteredReports = reports.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = reportType === "all" || r.type === reportType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Reports</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full sm:w-1/2">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
        </div>

        {/* Filter Dropdown */}
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <option value="all">All Types</option>
          <option value="Performance">Performance</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
          <option value="Compliance">Compliance</option>
        </select>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-[#4A235A] text-white">
              <th className="px-4 py-3 border">Report</th>
              <th className="px-4 py-3 border">Type</th>
              <th className="px-4 py-3 border">Date</th>
              <th className="px-4 py-3 border">Size</th>
              <th className="px-4 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((r) => (
                <tr
                  key={r.id}
                  className="hover:bg-gray-50 transition-colors border-b"
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FaFileAlt className="text-[#4A235A]" /> {r.title}
                  </td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.date}</td>
                  <td className="px-4 py-3">{r.size}</td>
                  <td className="px-4 py-3 text-center">
                    <button className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#BFA22E] text-gray-900 font-medium px-3 py-1 rounded-md transition">
                      <FaDownload /> Download
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        Tip: Use filters or search to find specific reports.
      </p>
    </div>
  );
};

export default Reports;
