import {
  FaTachometerAlt,
  FaUserTie,
  FaClipboardList,
  FaChartBar,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ active, onSelect, onLogout, isOpen, toggleSidebar }) => {
  const links = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "rm", label: "Relationship Manager", icon: <FaUserTie /> },
    { id: "co", label: "Credit Operations", icon: <FaClipboardList /> },
    { id: "reports", label: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <>
      {/* Sidebar (desktop + mobile overlay) */}
      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-linear-to-b from-[#EFF6FF] to-[#F3F4F6] text-white flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#3B1E48] bg-[#4B286D] shadow-md">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-[#F8F8F8]">
              NCBA
            </h1>
            <p className="text-xs text-gray-300 tracking-wide uppercase">
              Document System
            </p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-white transition lg:hidden"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-6 space-y-1 px-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelect(link.id);
                toggleSidebar(); // Close sidebar on mobile
              }}
              className={`flex items-center gap-4 px-5 py-3 w-full rounded-md text-left font-medium transition-all duration-200
                ${
                  active === link.id
                    ? "bg-[#D4AF37] text-[#1E1E1E] shadow-md"
                    : "text-gray-600 hover:bg-[#5B2C6F] hover:text-yellow-400"
                }`}
            >
              <span className="text-lg text-gray-600">{link.icon}</span>
              <span className="text-sm text-shadow-gray-600 tracking-wide">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer / Logout */}
        <div className="border-t border-[#3B1E48] mt-4 p-5 bg-[#F3F4F6]">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-5 py-3 w-full rounded-lg text-left text-gray-500 hover:bg-[#2E1A47] hover:text-white transition-all duration-200"
          >
            <FaSignOutAlt />..
            <span className="text-sm text-gray-600 font-medium">Logout</span>
          </button>

          <p className="mt-5 text-center text-[11px] text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()} NCBA Bank
          </p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
