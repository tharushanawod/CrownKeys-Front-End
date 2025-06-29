import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { FaBell, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import SidebarOwner from "../components/SidebarOwner";

// Import Owner pages
import OwnerDashboard from "../pages/Owner/OwnerDashboard";
// import OwnerProperties from "../pages/Owner/OwnerProperties";
// import PostAd from "../pages/Owner/PostAd";
// import Analytics from "../pages/Owner/Analytics";
// import Inquiries from "../pages/Owner/Inquiries";
// import Offers from "../pages/Owner/Offers";
// import Financial from "../pages/Owner/Financial";
// import Packages from "../pages/Owner/Packages";
// import OwnerProfile from "../pages/Owner/Profile";

const OwnerLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      {/* Sidebar */}
      <SidebarOwner />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="flex justify-end items-center">
            <button className="relative p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none mr-4">
              <FaBell className="text-2xl text-[#0284c7]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button
                className="flex items-center gap-2 p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() =>
                  setTimeout(() => setProfileOpen(false), 200)
                }
                onClick={() => setProfileOpen((open) => !open)}
              >
                <FaUserCircle className="text-3xl text-[#0284c7]" />
                <span className="text-[#091a2b] font-medium">John Silva</span>
              </button>
              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  onMouseEnter={() => setProfileOpen(true)}
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[#091a2b] hover:bg-[#f1f3f4]">
                    <FaUser className="text-lg" /> Profile
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[#a8aeaf] hover:text-red-600 hover:bg-[#f1f3f4]">
                    <FaSignOutAlt className="text-lg" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OwnerLayout />}>
        <Route
          index
          element={
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-[#091a2b] mb-4">
                Welcome to Owner Portal
              </h2>
              <p className="text-[#64748b]">
                Select an option from the sidebar to get started.
              </p>
            </div>
          }
        />
        <Route path="dashboard" element={<OwnerDashboard />} />
        {/* <Route path="properties" element={<OwnerProperties />} />
        <Route path="post-ad" element={<PostAd />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="offers" element={<Offers />} />
        <Route path="financial" element={<Financial />} />
        <Route path="packages" element={<Packages />} />
        <Route path="settings" element={<OwnerProfile />} />
        <Route path="profile" element={<OwnerProfile />} /> */}
      </Route>
    </Routes>
  );
};

export default OwnerRoutes;
