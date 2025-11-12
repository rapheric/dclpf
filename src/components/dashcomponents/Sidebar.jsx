
export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: "home", label: "Dashboard" },
    { id: "review", label: "Document Review" },
    { id: "reports", label: "Reports" },
    { id: "checklist", label: "Rm Checklists" },
  ];

  return (
    <aside className="w-64 bg-[#5B2C6F] text-white flex flex-col">
      <div className="p-6 text-2xl font-semibold">NCBA Bank</div>
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`block w-full text-left p-3 rounded-lg mb-2 ${
              activePage === item.id
                ? "bg-[#4A235A] font-semibold"
                : "hover:bg-[#6C3483]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
