import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  HomeIcon,
  ClipboardDocumentIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const links =
    user?.role === "RM"
      ? [
          { to: "/dashboard/rm", label: "My Checklists", icon: ClipboardDocumentIcon },
          { to: "/dashboard/rm/notifications", label: "Notifications", icon: BellIcon },
        ]
      : [
          { to: "/dashboard/co", label: "Review Checklists", icon: ClipboardDocumentIcon },
          { to: "/dashboard/co/notifications", label: "Notifications", icon: BellIcon },
        ];

  return (
    <div
      className={`h-screen bg-blue-900 text-white flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-blue-700">
        <h1
          className={`text-lg font-semibold tracking-wide ${
            !isOpen && "hidden"
          }`}
        >
          NCBA Bank
        </h1>
        <button
          className="text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <nav className="flex-1 mt-4">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg mx-2 mb-2 transition-all ${
                isActive ? "bg-blue-700" : "hover:bg-blue-800"
              }`}
            >
              <Icon className="w-5 h-5 text-gray-200" />
              {isOpen && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-blue-700 px-4 py-3 flex items-center gap-3">
        <ArrowRightOnRectangleIcon className="w-5 h-5 text-gray-600" />
        {isOpen && (
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="text-sm text-gray-600 hover:text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
