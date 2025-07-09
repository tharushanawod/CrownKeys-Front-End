import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { FaBell, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import SidebarAgent from "../components/SidebarAgent";
import DashboardLayout from "../components/DashboardLayout";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";
import Loader from "../components/Loader";

// Lazy load agent components
const AgentDashboard = lazy(() => import("../pages/Agent/AgentDashboard"));
const AgentProperties = lazy(() => import("../pages/Agent/AgentProperties"));
const Profile = lazy(() => import("../components/Profile"));

// Agent Layout Component
const AgentLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const dashboardActions = (
    <>
      {/* Notifications Bell */}
      <button className="relative p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none transition-colors">
        <FaBell className="text-xl text-[#0284c7]" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-2 p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none transition-colors"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <FaUserCircle className="text-2xl text-[#0284c7]" />
          <span className="text-[#091a2b] font-medium hidden sm:block">
            Agent Sarah
          </span>
        </button>

        {profileOpen && (
          <>
            {/* Overlay to close dropdown */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setProfileOpen(false)}
            ></div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-100">
              <button
                className="w-full flex items-center gap-3 px-4 py-2 text-[#091a2b] hover:bg-[#f1f3f4] transition-colors"
                onClick={() => {
                  setProfileOpen(false);
                  // Navigate to profile page
                }}
              >
                <FaUser className="text-lg text-[#0284c7]" />
                Profile
              </button>
              <button
                className="w-full flex items-center gap-3 px-4 py-2 text-[#a8aeaf] hover:text-red-600 hover:bg-[#f1f3f4] transition-colors"
                onClick={() => {
                  setProfileOpen(false);
                  // Handle logout
                }}
              >
                <FaSignOutAlt className="text-lg" />
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <DashboardLayout
      sidebar={SidebarAgent}
      title="Agent Portal"
      subtitle="Manage your listings, clients, and track your performance"
      actions={dashboardActions}
    >
      <Outlet />
    </DashboardLayout>
  );
};

// Agent Profile Wrapper Component
const AgentProfileWrapper = () => {
  const agentProfileData = {
    name: "John Smith",
    email: "john.smith@realestate.com",
    phone: "+1 (555) 123-4567",
    role: "Real Estate Agent",
    avatar: "/Images/Common/logo.png",
    bio: "Experienced real estate agent specializing in residential and commercial properties.",
    specializations: [
      "Residential Sales",
      "Commercial Properties",
      "Investment Properties",
    ],
    experience: "8+ years",
    location: "Downtown District",
  };

  return <Profile userData={agentProfileData} />;
};

const AgentRoutes = () => {
  return (
    <SidebarProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AgentLayout />}>
            {/* Default route - empty div */}
            <Route
              index
              element={
                <div className="text-center text-gray-500 mt-10">
                  Welcome to Agent Portal
                </div>
              }
            />
            {/* Agent specific routes */}
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="listings" element={<AgentProperties />} />
            <Route
              path="inquiries"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Inquiries page coming soon
                </div>
              }
            />
            <Route
              path="offers"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Offers page coming soon
                </div>
              }
            />
            <Route
              path="messages"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Messages page coming soon
                </div>
              }
            />
            <Route
              path="analytics"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Analytics page coming soon
                </div>
              }
            />
            <Route
              path="commissions"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Commissions page coming soon
                </div>
              }
            />
            <Route
              path="clients"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Client Management page coming soon
                </div>
              }
            />
            <Route
              path="support"
              element={
                <div className="text-center text-gray-500 mt-10">
                  Support Center page coming soon
                </div>
              }
            />
            <Route path="settings" element={<AgentProfileWrapper />} />
            <Route path="profile" element={<AgentProfileWrapper />} />
          </Route>
        </Routes>
      </Suspense>
    </SidebarProvider>
  );
};

export default AgentRoutes;
