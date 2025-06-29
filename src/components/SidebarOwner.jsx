import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaEnvelope,
  FaTags,
  FaComments,
  FaChartBar,
  FaMoneyBill,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaArrowUp,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", icon: <FaHome />, path: "/owner/dashboard" },
  { name: "My Properties", icon: <FaBuilding />, path: "/owner/properties" },
  { name: "Inquiries", icon: <FaEnvelope />, path: "/owner/inquiries" },
  { name: "Offers", icon: <FaTags />, path: "/owner/offers" },
  { name: "Messages", icon: <FaComments />, path: "/owner/messages" },
  { name: "Analytics", icon: <FaChartBar />, path: "/owner/analytics" },
  { name: "Financial", icon: <FaMoneyBill />, path: "/owner/financial" },
  { name: "Settings", icon: <FaCog />, path: "/owner/settings" },
];

const SidebarOwner = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 bg-[#005163] text-white p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <span className="text-2xl font-bold text-[#005163]">CrownKeys</span>
          <button
            className="lg:hidden text-gray-400 hover:text-[#005163]"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <FaChevronLeft />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-[#f1f3f4] text-[#3b4876] ${
                location.pathname === link.path ? "bg-[#005163] text-white" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="px-4 mt-8">
          <Link
            to="/owner/packages"
            className="w-full bg-[#005163] text-white py-2 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors flex items-center justify-center gap-2"
          >
            <FaArrowUp /> Upgrade to Pro
          </Link>
        </div>
        <div className="flex-1" />
        <div className="px-4 mt-8">
          <button className="w-full flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 font-semibold py-2 rounded-lg transition-colors justify-center">
            <FaSignOutAlt className="text-lg" /> Logout
          </button>
        </div>
        <div className="px-4 mt-8 text-xs text-[#a8aeaf]">
          <p className="mb-2 font-semibold">Need Help?</p>
          <p>Contact our support team</p>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarOwner;
