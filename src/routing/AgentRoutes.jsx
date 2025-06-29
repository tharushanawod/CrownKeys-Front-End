import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { FaUserCircle } from "react-icons/fa";
import SidebarAgent from "../components/SidebarAgent";
import Loader from "../components/Loader";

// Lazy load agent components
const AgentDashboard = lazy(() => import("../pages/Agent/AgentDashboard"));
const AgentProperties = lazy(() => import("../pages/Agent/AgentProperties"));
const Profile = lazy(() => import("../components/Profile"));

// Agent Layout Component
const AgentLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAgent />
      <div className="flex-1 flex flex-col">
        {/* Header with profile icon only */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Agent Portal
            </h1>
            <div className="flex items-center space-x-4">
              <FaUserCircle className="w-8 h-8 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
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
          <Route path="settings" element={<AgentProfileWrapper />} />
          <Route path="profile" element={<AgentProfileWrapper />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AgentRoutes;
