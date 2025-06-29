import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { FaBell, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import SidebarBuyer from "../components/SidebarBuyer";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";

// Import Buyer pages
import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import PropertySearch from "../pages/Buyer/PropertySearch";
import SavedProperties from "../pages/Buyer/SavedProperties";
import Profile from "../components/Profile";

const BuyerLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <SidebarBuyer />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
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
                onMouseDown={() => setProfileOpen(true)}
                // onMouseLeave={() =>
                //   setTimeout(() => setProfileOpen(false), 200)
                // }
                // onClick={() => setProfileOpen((open) => !open)}
              >
                <FaUserCircle className="text-3xl text-[#0284c7]" />
                <span className="text-[#091a2b] font-medium">John Doe</span>
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

const BuyerProfileWrapper = () => {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main Street, New York, NY 10001",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    joinDate: "March 2023",
    totalProperties: 0,
    activeProperties: 0,
    totalViews: 150,
    totalClients: 0,
    subscription: "Basic",
    subscriptionExpiry: "March 15, 2025",
  };

  const recentActivity = [
    {
      id: 1,
      type: "search",
      action: "Searched for properties",
      property: "3 bedroom apartments in Manhattan",
      date: "2024-06-28",
      status: "completed",
    },
    {
      id: 2,
      type: "saved",
      action: "Saved property",
      property: "Modern Apartment in SoHo",
      date: "2024-06-27",
      status: "active",
    },
    {
      id: 3,
      type: "tour",
      action: "Scheduled property tour",
      property: "Luxury Condo in Upper East Side",
      date: "2024-06-25",
      status: "upcoming",
    },
  ];

  return (
    <Profile
      userType="buyer"
      SidebarComponent={() => null} // No sidebar in profile since layout already has it
      userData={userData}
      recentActivity={recentActivity}
    />
  );
};

const BuyerRoutes = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<BuyerLayout />}>
          <Route
            index
            element={
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#091a2b] mb-4">
                  Welcome to Buyer Portal
                </h2>
                <p className="text-[#64748b]">
                  Select an option from the sidebar to get started.
                </p>
              </div>
            }
          />
          <Route path="dashboard" element={<BuyerDashboard />} />
          <Route path="search" element={<PropertySearch />} />
          <Route path="favorites" element={<SavedProperties />} />
          <Route path="profile" element={<BuyerProfileWrapper />} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
};

export default BuyerRoutes;
