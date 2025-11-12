// src/pages/DocumentReviewPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function DocumentReviewPage() {
  const { loanId } = useParams();

  const [docs, setDocs] = useState([
    // Business Docs
    { category: "Business", name: "Cert. of Incorp.", status: "Pending", comment: "" },
    { category: "Business", name: "MOA / Partnership Deed", status: "Pending", comment: "" },
    { category: "Business", name: "Bus. PAN / TIN", status: "Pending", comment: "" },
    { category: "Business", name: "Bus. Bank Stmt (6M)", status: "Pending", comment: "" },
    { category: "Business", name: "GST / VAT Reg.", status: "Pending", comment: "" },
    { category: "Business", name: "Aud. Fin. Stmts (2Y)", status: "Pending", comment: "" },
    { category: "Business", name: "Biz Addr Proof", status: "Pending", comment: "" },
    { category: "Business", name: "Trade License", status: "Pending", comment: "" },

    // Consumer Loan Docs
    { category: "Consumer Loan", name: "National ID / Passport", status: "Pending", comment: "" },
    { category: "Consumer Loan", name: "Personal PAN / TIN", status: "Pending", comment: "" },
    { category: "Consumer Loan", name: "Photo ID", status: "Pending", comment: "" },
    { category: "Consumer Loan", name: "Pers. Bank Stmt (6M)", status: "Pending", comment: "" },
    { category: "Consumer Loan", name: "Credit Auth. Form", status: "Pending", comment: "" },
  ]);

  const handleDecision = (index, status) => {
    const updated = [...docs];
    updated[index].status = status;
    setDocs(updated);
  };

  const handleCommentChange = (index, value) => {
    const updated = [...docs];
    updated[index].comment = value;
    setDocs(updated);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        🏦 KYC Review — Business / Consumer Loan #{loanId}
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse text-xs">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold w-8">#</th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold w-28">Category</th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold">Document</th>
              <th className="px-3 py-2 text-center text-gray-600 font-semibold w-24">Status</th>
              <th className="px-3 py-2 text-center text-gray-600 font-semibold w-[420px]">Actions</th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold w-56">Comments</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-3 py-1 text-gray-700 text-center">{index + 1}</td>
                <td className="px-3 py-1 text-gray-600 truncate">{doc.category}</td>
                <td className="px-3 py-1 text-gray-800 font-medium truncate">{doc.name}</td>

                <td className="px-3 py-1 text-center">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      doc.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : doc.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : doc.status === "Request Reupload"
                        ? "bg-orange-100 text-orange-700"
                        : doc.status === "Verified"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>

                <td className="px-3 py-1 text-center">
                  <div className="flex justify-center items-center gap-1 flex-wrap">
                    <button
                      onClick={() => handleDecision(index, "Approved")}
                      className="bg-green-600 text-white px-2 py-1 rounded text-[11px] hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDecision(index, "Rejected")}
                      className="bg-red-600 text-white px-2 py-1 rounded text-[11px] hover:bg-red-700"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDecision(index, "Request Reupload")}
                      className="bg-orange-500 text-white px-2 py-1 rounded text-[11px] hover:bg-orange-600"
                    >
                      Reupload
                    </button>
                    <button
                      onClick={() => handleDecision(index, "Verified")}
                      className="bg-blue-600 text-white px-2 py-1 rounded text-[11px] hover:bg-blue-700"
                    >
                      Verify
                    </button>
                    <button
                      className="bg-gray-500 text-white px-2 py-1 rounded text-[11px] hover:bg-gray-600"
                      onClick={() => alert(`Viewing ${doc.name}`)}
                    >
                      View
                    </button>
                  </div>
                </td>

                <td className="px-3 py-1">
                  <input
                    value={doc.comment}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                    placeholder="Comment..."
                    className="w-full border rounded px-2 py-1 text-[11px] text-gray-700 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-right">
        <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 font-medium">
          Submit KYC Review
        </button>
      </div>
    </div>
  );
}
