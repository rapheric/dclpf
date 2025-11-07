import { FaTachometerAlt, FaUserTie, FaClipboardList, FaChartBar, FaSignOutAlt, FaTimes } from "react-icons/fa";

const  Sidebar = ({ active, onSelect, onLogout, isOpen, toggleSidebar }) => {
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
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#5B2C6F] text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#4A235A]">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">NCBA</h1>
            <p className="text-sm text-gray-300">Document System</p>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white lg:hidden"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onSelect(link.id);
                toggleSidebar(); // Close sidebar on mobile
              }}
              className={`flex items-center gap-3 px-6 py-3 w-full text-left hover:bg-[#4A235A] transition-all ${
                active === link.id ? "bg-[#4A235A]" : ""
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="border-t border-[#4A235A] p-4">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-6 py-2 w-full hover:bg-[#4A235A] transition-all"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
export default Sidebar