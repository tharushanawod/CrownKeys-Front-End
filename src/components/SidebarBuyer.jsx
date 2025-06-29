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
import { useSidebar } from "../contexts/SidebarContext";

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
  const { collapsed, setCollapsed } = useSidebar();
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      {open && (
        <div className="fixed inset-0 bg-indigo-600 bg-opacity-10 z-30"></div>
      )}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 bg-[#0284c7] hover:bg-[#0369a1] text-white p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        <FaChevronRight
          className={`transition-all duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen ${
          collapsed ? "w-16" : "w-64"
        } bg-white shadow-lg hover:shadow-xl z-30 transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo and Toggle */}
        <div className="flex justify-between items-center py-8 border-b border-gray-100 px-4">
          {!collapsed && (
            <Link
              to="/"
              className="flex items-center group transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src="../../public/Images/Common/ewe.png"
                alt="Logo"
                className="w-12 h-12 object-contain cursor-pointer transition-all duration-300 ease-in-out group-hover:rotate-6"
              />
              <img
                src="../../public/Images/Common/TEXT2.png"
                alt="Logo"
                className="w-20 h-12 object-contain cursor-pointer ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Link>
          )}
          {collapsed && (
            <Link
              to="/"
              className="flex justify-center w-full group transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <img
                src="../../public/Images/Common/ewe.png"
                alt="Logo"
                className="w-8 h-8 object-contain cursor-pointer transition-all duration-300 ease-in-out group-hover:rotate-12"
              />
            </Link>
          )}
          {/* Desktop Toggle Button */}
          <button
            className="hidden lg:flex p-2 rounded-lg hover:bg-[#f1f3f4] hover:shadow-md text-[#3b4876] focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
          >
            <FaChevronRight
              className={`transform transition-all duration-300 ease-in-out ${
                collapsed ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`flex items-center ${
                  collapsed ? "justify-center px-2" : "gap-3 px-4"
                } py-3 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:shadow-lg text-[#3b4876] ${
                  location.pathname === link.path
                    ? "bg-[#0284c7] text-white shadow-lg scale-105"
                    : "hover:bg-gradient-to-r hover:from-[#f1f3f4] hover:to-[#e0f2fe] hover:border-l-4 hover:border-[#0284c7]"
                }`}
                onClick={() => setOpen(false)}
              >
                <span
                  className={`text-lg transition-all duration-300 ease-in-out group-hover:scale-110 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "group-hover:text-[#0284c7]"
                  }`}
                >
                  {link.icon}
                </span>
                {!collapsed && (
                  <span className="transition-all duration-300 ease-in-out group-hover:font-semibold">
                    {link.name}
                  </span>
                )}
              </Link>
              {/* Tooltip for collapsed sidebar */}
              {collapsed && (
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none whitespace-nowrap z-50">
                  {link.name}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="px-4 mt-8 relative group">
          <button
            className={`w-full flex items-center ${
              collapsed ? "justify-center px-2" : "gap-2 justify-center"
            } bg-red-50 text-[#a8aeaf] hover:text-red-600 hover:bg-red-100 font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md`}
          >
            <FaSignOutAlt className="text-lg transition-all duration-300 ease-in-out group-hover:scale-110" />
            {!collapsed && (
              <span className="transition-all duration-300 ease-in-out group-hover:font-bold">
                Logout
              </span>
            )}
          </button>
          {/* Tooltip for collapsed logout button */}
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out pointer-events-none whitespace-nowrap z-50">
              Logout
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
            </div>
          )}
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
