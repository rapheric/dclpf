import { useState } from "react";
import Sidebar from "../Layout/Sidebar";

export default function CODashboard() {
  const [checklists, setChecklists] = useState([
    {
      _id: 1,
      productType: "Mortgage",
      customerType: "Sole Proprietor",
      relationshipManager: { name: "Jane RM" },
      requiredDocs: [
        {
          _id: 101,
          name: "ID Copy",
          status: "Submitted",
          comments: "",
        },
        {
          _id: 102,
          name: "Business License",
          status: "verified",
          comments: "",
        },
        {
          _id: 103,
          name: "Kra pin",
          status: "pending",
          comments: "",
        },
        {
          _id: 104,
          name: "Board resolution",
          status: "Submitted",
          comments: "",
        },
      ],
    },
  ]);

  const handleReview = (docId, status, comments) => {
    const updated = checklists.map((cl) => ({
      ...cl,
      requiredDocs: cl.requiredDocs.map((doc) =>
        doc._id === docId ? { ...doc, status, comments } : doc
      ),
    }));
    setChecklists(updated);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Credit Operations Dashboard
        </h2>
        {checklists.map((cl) => (
          <div key={cl._id} className="border rounded-lg p-4 mb-4 bg-white shadow">
            <h3 className="font-bold text-blue-700 mb-2">
              {cl.productType} - {cl.customerType}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              RM: {cl.relationshipManager.name}
            </p>
            {cl.requiredDocs.map((doc) => (
              <div key={doc._id} className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{doc.name}</span>
                  <span
                    className={`text-sm ${
                      doc.status === "Verified"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
                <textarea
                  className="w-full mt-2 border rounded p-2 text-sm"
                  placeholder="Enter comments..."
                  onChange={(e) => (doc.comments = e.target.value)}
                  defaultValue={doc.comments}
                />
                <div className="flex gap-2 mt-2">
                  {["Verified", "Deferred", "Waived", "Rejected"].map(
                    (status) => (
                      <button
                        key={status}
                        className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
                        onClick={() =>
                          handleReview(doc._id, status, doc.comments)
                        }
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
