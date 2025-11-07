import { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Notifications from "./Notifications";

export default function RMChecklist() {
  const [checklists] = useState([
    {
      _id: 1,
      productType: "Asset Finance",
      customerType: "Limited Company",
      requiredDocs: [
        { _id: 11, name: "Certificate of Incorporation", status: "Pending" },
        { _id: 12, name: "Bank Statements", status: "Submitted" },
      ],
    },
  ]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Relationship Manager Dashboard
        </h2>

        {checklists.map((cl) => (
          <div
            key={cl._id}
            className="border rounded-lg p-4 mb-4 shadow bg-white"
          >
            <h3 className="font-bold text-blue-700">
              {cl.productType} - {cl.customerType}
            </h3>
            {cl.requiredDocs.map((doc) => (
              <div
                key={doc._id}
                className="flex justify-between items-center mt-2 border-b pb-2"
              >
                <span>{doc.name}</span>
                <span
                  className={`text-sm ${
                    doc.status === "Verified"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {doc.status}
                </span>
                <input type="file" className="text-sm" />
              </div>
            ))}
          </div>
        ))}
        <Notifications />
      </div>
    </div>
  );
}
