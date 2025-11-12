import { FaTachometerAlt, FaUserTie, FaClipboardList, FaChartBar, FaSignOutAlt, FaTimes } from "react-icons/fa";

const Sidebar = ({ active, onSelect, onLogout, isOpen, toggleSidebar }) => {
  const links = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "rm", label: "Relationship Manager", icon: <FaUserTie /> },
    { id: "co", label: "Credit Operations", icon: <FaClipboardList /> },
    { id: "reports", label: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <>
      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-linear-to-b from-[#4A235A] to-[#2E1A47] text-white flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#3B1E48] bg-[#4A235A]">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide">NCBA</h1>
            <p className="text-sm text-gray-300">Document System</p>
          </div>
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-white lg:hidden">
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="flex-1 mt-6">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => { onSelect(link.id); toggleSidebar(); }}
              className={`flex items-center gap-3 px-6 py-3 w-full text-left text-sm font-medium rounded-r-full transition-all duration-200 ${
                active === link.id ? "bg-[#D4AF37] text-gray-900 shadow-inner" : "text-gray-300 hover:bg-[#3B1E48] hover:text-white"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-[#3B1E48] p-4 bg-[#3B1E48]">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-6 py-2 w-full text-left text-gray-300 hover:text-white hover:bg-[#2E1A47] rounded-md transition-all"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} NCBA Bank
          </p>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 lg:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
