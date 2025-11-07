import { useEffect, useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // Mock polling (simulates notifications)
  useEffect(() => {
    const mock = [
      {
        _id: 1,
        message: "Your Mortgage document has been verified",
        createdAt: new Date().toISOString(),
        read: false,
      },
    ];
    setNotifications(mock);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border mt-6">
      <h2 className="font-bold text-lg mb-2 text-gray-700">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-sm">No new notifications</p>
      ) : (
        notifications.map((note) => (
          <div
            key={note._id}
            className={`p-3 rounded mb-2 ${
              note.read ? "bg-gray-100" : "bg-blue-50 border-l-4 border-blue-600"
            }`}
          >
            <p className="text-sm text-gray-800">{note.message}</p>
            <span className="text-xs text-gray-500">
              {new Date(note.createdAt).toLocaleString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
