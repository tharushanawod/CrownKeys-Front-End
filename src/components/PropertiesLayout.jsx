import React from "react";

const PropertiesLayout = ({
  sidebar: Sidebar,
  children,
  title,
  subtitle,
  actions,
}) => {
  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 sm:ml-64">
        {/* Topbar */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-10 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#091a2b]">
              {title}
            </h1>
            {subtitle && <p className="text-[#3b4876] text-sm">{subtitle}</p>}
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
            {actions}
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default PropertiesLayout;
