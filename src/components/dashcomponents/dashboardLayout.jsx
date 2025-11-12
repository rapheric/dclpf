// src/components/DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

export default function DashboardLayout() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <MainContent activePage={activePage} />
        </main>
      </div>
    </div>
  );
}
