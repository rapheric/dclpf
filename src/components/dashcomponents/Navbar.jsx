// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">Credit Officer Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, Cynthia</span>
        <button className="bg-[#5B2C6F] text-white px-4 py-2 rounded hover:bg-[#4A235A]">
          Logout
        </button>
      </div>
    </header>
  );
}
