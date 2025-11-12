
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useContext(AuthContext);

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <button
          onClick={logout}
          className="mt-6 w-full bg-[#5B2C6F] text-white py-2 rounded-lg hover:bg-[#4A235A]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
