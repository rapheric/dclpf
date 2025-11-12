// src/pages/DocumentReviewDashboard.jsx
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";

export default function ReportsPage() {
  const { loanId } = useParams();

  const [docs, setDocs] = useState([
    // Business Docs
    { category: "Business", name: "Cert. of Incorp.", status: "Approved" },
    { category: "Business", name: "MOA / Partnership Deed", status: "Verified" },
    { category: "Business", name: "Bus. PAN / TIN", status: "Pending" },
    { category: "Business", name: "Bus. Bank Stmt (6M)", status: "Approved" },
    { category: "Business", name: "GST / VAT Reg.", status: "Rejected" },
    { category: "Business", name: "Aud. Fin. Stmts (2Y)", status: "Approved" },
    { category: "Business", name: "Biz Addr Proof", status: "Request Reupload" },
    { category: "Business", name: "Trade License", status: "Approved" },

    // Consumer Loan Docs
    { category: "Consumer Loan", name: "National ID / Passport", status: "Approved" },
    { category: "Consumer Loan", name: "Personal PAN / TIN", status: "Approved" },
    { category: "Consumer Loan", name: "Photo ID", status: "Pending" },
    { category: "Consumer Loan", name: "Pers. Bank Stmt (6M)", status: "Rejected" },
    { category: "Consumer Loan", name: "Credit Auth. Form", status: "Verified" },
  ]);

  // Compute summary stats dynamically
  const summary = useMemo(() => {
    const total = docs.length;
    const counts = {
      Approved: docs.filter((d) => d.status === "Approved").length,
      Rejected: docs.filter((d) => d.status === "Rejected").length,
      Pending: docs.filter((d) => d.status === "Pending").length,
      Verified: docs.filter((d) => d.status === "Verified").length,
      Reupload: docs.filter((d) => d.status === "Request Reupload").length,
    };

    const businessDocs = docs.filter((d) => d.category === "Business");
    const consumerDocs = docs.filter((d) => d.category === "Consumer Loan");

    const categoryStats = {
      Business: {
        total: businessDocs.length,
        approved: businessDocs.filter((d) => d.status === "Approved").length,
        rejected: businessDocs.filter((d) => d.status === "Rejected").length,
        pending: businessDocs.filter((d) => d.status === "Pending").length,
      },
      Consumer: {
        total: consumerDocs.length,
        approved: consumerDocs.filter((d) => d.status === "Approved").length,
        rejected: consumerDocs.filter((d) => d.status === "Rejected").length,
        pending: consumerDocs.filter((d) => d.status === "Pending").length,
      },
    };

    return { total, counts, categoryStats };
  }, [docs]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
        🏦 KYC Review Dashboard — Loan #{loanId}
      </h1>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[
          { label: "Approved", value: summary.counts.Approved, color: "bg-green-100 text-green-700" },
          { label: "Rejected", value: summary.counts.Rejected, color: "bg-red-100 text-red-700" },
          { label: "Pending", value: summary.counts.Pending, color: "bg-yellow-100 text-yellow-700" },
          { label: "Verified", value: summary.counts.Verified, color: "bg-blue-100 text-blue-700" },
          { label: "Reupload", value: summary.counts.Reupload, color: "bg-orange-100 text-orange-700" },
        ].map((card, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg shadow-sm ${card.color} text-center font-medium`}
          >
            <div className="text-lg">{card.label}</div>
            <div className="text-2xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      {/* ===== Category Breakdown ===== */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Category Breakdown
        </h2>
        <div className="grid grid-cols-2 gap-6 text-sm">
          {Object.entries(summary.categoryStats).map(([cat, stat]) => (
            <div key={cat} className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                {cat === "Business" ? "🏢 Business KYC" : "👤 Consumer Loan KYC"}
              </h3>
              <div className="flex justify-between text-gray-600">
                <span>Total:</span>
                <span className="font-medium">{stat.total}</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Approved:</span>
                <span className="font-semibold">{stat.approved}</span>
              </div>
              <div className="flex justify-between text-red-700">
                <span>Rejected:</span>
                <span className="font-semibold">{stat.rejected}</span>
              </div>
              <div className="flex justify-between text-yellow-700">
                <span>Pending:</span>
                <span className="font-semibold">{stat.pending}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Detailed Table ===== */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">
          Document Status Details
        </h2>
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold w-10">#</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold w-32">Category</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Document</th>
              <th className="px-4 py-2 text-center text-gray-600 font-semibold w-32">Status</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-gray-600">{doc.category}</td>
                <td className="px-4 py-2 font-medium text-gray-800 truncate">{doc.name}</td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doc.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : doc.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : doc.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : doc.status === "Verified"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Summary Footer ===== */}
      <div className="mt-8 text-sm text-gray-500 text-center">
        {new Date().toLocaleString()} — Credit Officer Review Summary for Loan #{loanId}
      </div>
    </div>
  );
}
