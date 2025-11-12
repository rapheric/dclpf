
// src/pages/RMsDashboard.jsx
import { useNavigate } from "react-router-dom";

export default function RmChecklists() {
  const navigate = useNavigate();

  const rms = [
    {
      id: 1,
      name: "John Mwangi",
      loanNo: "BL-2025-001",
      loanType: "Business Loan",
      pendingDocs: 3,
      status: "Under Review",
    },
    {
      id: 2,
      name: "Sarah Njeri",
      loanNo: "CL-2025-018",
      loanType: "Consumer Loan",
      pendingDocs: 1,
      status: "Pending Review",
    },
    {
      id: 3,
      name: "Ali Yusuf",
      loanNo: "BL-2025-022",
      loanType: "Business Loan",
      pendingDocs: 0,
      status: "Fully Submitted",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
        🏦 Relationship Managers — KYC Review Dashboard
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">#</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">RM Name</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Loan No.</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">Loan Type</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">Pending Docs</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">Action</th>
            </tr>
          </thead>

          <tbody>
            {rms.map((rm, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/rms/${rm.id}`)}
              >
                <td className="px-6 py-3 text-gray-700">{index + 1}</td>
                <td className="px-6 py-3 font-medium text-gray-800">{rm.name}</td>
                <td className="px-6 py-3 text-gray-600">{rm.loanNo}</td>
                <td className="px-6 py-3 text-gray-600">{rm.loanType}</td>
                <td className="px-6 py-3 text-center">
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      rm.pendingDocs === 0
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {rm.pendingDocs}
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      rm.status === "Fully Submitted"
                        ? "bg-green-100 text-green-700"
                        : rm.status === "Under Review"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {rm.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/rms/${rm.id}`);
                    }}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    View Checklist
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
