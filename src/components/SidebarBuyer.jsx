import React, { useState } from "react";
import {
  FaHome,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaCalendarAlt,
  FaFileAlt,
  FaChartBar,
  FaCalculator,
  FaCog,
  FaUser,
  FaHeadset,
  FaSignOutAlt,
  FaChevronRight,
  FaUserCircle,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", icon: <FaHome />, path: "/buyer/dashboard" },
  { name: "Property Search", icon: <FaSearch />, path: "/buyer/search" },
  { name: "My Favorites", icon: <FaStar />, path: "/buyer/favorites" },
  { name: "Schedule Tours", icon: <FaCalendarAlt />, path: "/buyer/tours" },
  { name: "Documents", icon: <FaFileAlt />, path: "/buyer/documents" },
  { name: "Market Reports", icon: <FaChartBar />, path: "/buyer/reports" },
  {
    name: "Mortgage Calculator",
    icon: <FaCalculator />,
    path: "/buyer/calculator",
  },
  { name: "Settings", icon: <FaCog />, path: "/buyer/settings" },
  {
    name: "Contact Agent",
    icon: <FaEnvelopeOpenText />,
    path: "/buyer/contact-agent",
  },
  { name: "Support Center", icon: <FaHeadset />, path: "/buyer/support" },
];

const SidebarBuyer = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      {open && (
    <div className="fixed inset-0 bg-indigo-600 bg-opacity-10 z-30"></div>
  )}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 bg-[#0284c7] text-white p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <FaChevronRight />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center py-8 border-b border-gray-100">
          <Link to="/">
            <img
              src="../../public/Images/Common/www.png"
              alt="Logo"
              className="w-full h-15 object-contain cursor-pointer"
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-[#f1f3f4] text-[#3b4876] ${
                location.pathname === link.path ? "bg-[#0284c7] text-white" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="px-4 mt-8">
          <button className="w-full flex items-center gap-2 bg-red-50 text-[#a8aeaf] hover:text-red-600 font-semibold py-2 rounded-lg transition-colors justify-center">
            <FaSignOutAlt className="text-lg" /> Logout
          </button>
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

export default SidebarBuyer;
