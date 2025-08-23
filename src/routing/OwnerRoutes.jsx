import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import api from "../api/api";
import SidebarOwner from "../components/SidebarOwner";
import DashboardLayout from "../components/DashboardLayout";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";

// Import Owner pages
import OwnerDashboard from "../pages/Owner/OwnerDashboard";
import Profile from "../components/Profile";
import OwnerProperties from "../pages/Owner/OwnerProperties";
import PostAd from "../pages/Owner/PostAd";
import Analytics from "../pages/Owner/Analytics";
// import Inquiries from "../pages/Owner/Inquiries";
import Offers from "../pages/Owner/Offers";
import Financial from "../pages/Owner/Financial";
import Packages from "../pages/Owner/Packages";
import OwnerProfile from "../pages/Owner/Profile";

const OwnerLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/auth/profile");
        if (response.data.success) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // If profile fetch fails, user might not be authenticated
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
  };

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
            {loading
              ? "Loading..."
              : userData
              ? userData.firstName + " " + userData.lastName ||
                userData.name ||
                "Owner"
              : "Owner"}
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
                  navigate("profile");
                }}
              >
                <FaUser className="text-lg text-[#0284c7]" />
                Profile
              </button>
              <button
                className="w-full flex items-center gap-3 px-4 py-2 text-[#a8aeaf] hover:text-red-600 hover:bg-[#f1f3f4] transition-colors"
                onClick={() => {
                  setProfileOpen(false);
                  handleLogout();
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
      sidebar={SidebarOwner}
      title={
        loading
          ? "Loading..."
          : userData
          ? `Welcome, ${userData.firstName} ${userData.lastName}`
          : "Owner Portal"
      }
      subtitle="Manage your properties and track your rental income"
      actions={dashboardActions}
    >
      <Outlet />
    </DashboardLayout>
  );
};

const OwnerProfileWrapper = () => {
  const userData = {
    name: "Property Owner",
    email: "owner@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main Street, New York, NY 10001",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    joinDate: "January 2023",
    totalProperties: 5,
    activeProperties: 4,
    totalViews: 1250,
    totalClients: 15,
    subscription: "Premium",
    subscriptionExpiry: "January 15, 2025",
  };

  const recentActivity = [
    {
      id: 1,
      type: "property",
      action: "Listed new property",
      property: "Modern Apartment in Downtown",
      date: "2024-06-28",
      status: "active",
    },
    {
      id: 2,
      type: "inquiry",
      action: "Received inquiry",
      property: "Luxury Condo in Midtown",
      date: "2024-06-27",
      status: "pending",
    },
    {
      id: 3,
      type: "rental",
      action: "Property rented",
      property: "Studio Apartment in SoHo",
      date: "2024-06-25",
      status: "completed",
    },
  ];

  return (
    <Profile
      userType="owner"
      SidebarComponent={() => null} // No sidebar in profile since layout already has it
      userData={userData}
      recentActivity={recentActivity}
    />
  );
};

const OwnerRoutes = () => {
  return (
    <SidebarProvider>
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
          <Route path="profile" element={<OwnerProfileWrapper />} />
          <Route path="properties" element={<OwnerProperties />} />
          <Route path="post-ad" element={<PostAd />} />
          <Route path="analytics" element={<Analytics />} />
          {/* <Route path="inquiries" element={<Inquiries />} /> */}
          <Route path="offers" element={<Offers />} />
          <Route path="financial" element={<Financial />} />
          <Route path="packages" element={<Packages />} />
          <Route path="settings" element={<OwnerProfile />} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
};

export default OwnerRoutes;
