import React from "react";
import { useSidebar } from "../contexts/SidebarContext";

const DashboardLayout = ({
  sidebar: Sidebar,
  children,
  title,
  subtitle,
  actions,
}) => {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          collapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#091a2b]">
              {title}
            </h1>
            <p className="text-[#3b4876] text-sm">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </header>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 space-y-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
