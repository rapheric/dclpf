import React from "react";

export default function DashboardContent({ active, user }) {
  // Example RM document submission data
  const documentData = [
    {
      id: 1,
      document: "Financial Statements FY2024",
      rmName: "John Doe",
      status: "Approved",
      coComment: "Well-prepared and consistent with client disclosures.",
      dateSubmitted: "2024-03-15",
      reviewedBy: "CO: Mark Anderson",
    },
    {
      id: 2,
      document: "Business Registration Certificate",
      rmName: "Jane Smith",
      status: "Pending Approval",
      coComment: "Awaiting verification of attached certificate copy.",
      dateSubmitted: "2024-05-08",
      reviewedBy: "CO: Pending",
    },
    {
      id: 3,
      document: "Bank Statements (6 months)",
      rmName: "Alice Johnson",
      status: "Deferred",
      coComment: "Missing pages for February and March — please resubmit.",
      dateSubmitted: "2024-02-28",
      reviewedBy: "CO: Samuel Green",
    },
    {
      id: 4,
      document: "Credit Report",
      rmName: "Michael Brown",
      status: "Waived",
      coComment: "Client already assessed in last quarter.",
      dateSubmitted: "2024-01-10",
      reviewedBy: "CO: Rachel White",
    },
  ];

  const getStatusBadge = (status) => {
    const colors = {
      Approved: "bg-green-100 text-green-700",
      "Pending Approval": "bg-yellow-100 text-yellow-700",
      Deferred: "bg-orange-100 text-orange-700",
      Waived: "bg-gray-100 text-gray-600",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          colors[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6">
      {/* ===== Overview Section ===== */}
      {active === "overview" && (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            RM Document Submissions Overview
          </h2>
          <p className="text-gray-600 mb-6">
            Review the document submissions from Relationship Managers, upload
            replacements, and monitor their approval status.
          </p>

          {/* Document Table */}
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">#</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Document Name
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Relationship Manager
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Date Submitted
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Reviewed By
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                  <th className="py-3 px-4 text-left font-semibold w-64">
                    Credit Officer Comment
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Upload / Replace
                  </th>
                  <th className="py-3 px-4 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {documentData.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="py-3 px-4">{doc.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {doc.document}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{doc.rmName}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {new Date(doc.dateSubmitted).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {doc.reviewedBy}
                    </td>
                    <td className="py-3 px-4">{getStatusBadge(doc.status)}</td>
                    <td className="py-3 px-4 text-gray-700 max-w-xs">
                      {doc.coComment}
                    </td>
                    <td className="py-3 px-4">
                      <label className="flex items-center justify-center cursor-pointer">
                        <input type="file" className="hidden" />
                        <span className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs hover:bg-blue-700 transition">
                          Upload
                        </span>
                      </label>
                    </td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-800 font-medium text-sm">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 font-medium text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== Reports Section ===== */}
      {active === "reports" && (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Reports
          </h2>
          <p className="text-gray-600">Reports section goes here...</p>
        </div>
      )}

      {/* ===== Settings Section ===== */}
      {active === "settings" && (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Settings
          </h2>
          <p className="text-gray-600">Settings section goes here...</p>
        </div>
      )}
    </div>
  );
}
