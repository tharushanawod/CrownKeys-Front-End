import React from "react";

const SidebarAgent = () => {
  return (
    <div className="w-64 bg-[#091a2b] text-white min-h-screen p-6">
      {/* Placeholder for Agent Sidebar */}
      <h2 className="text-2xl font-bold mb-8">Agent Dashboard</h2>
      <ul>
        <li className="mb-4">
          <a href="#" className="hover:text-[#005163] transition-colors">
            Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-[#005163] transition-colors">
            My Listings
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-[#005163] transition-colors">
            Inquiries
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-[#005163] transition-colors">
            Packages
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-[#005163] transition-colors">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAgent;
