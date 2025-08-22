import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaUser, FaSignOutAlt } from "react-icons/fa";
import api from "../api/api";
import SidebarBuyer from "../components/SidebarBuyer";
import DashboardLayout from "../components/DashboardLayout";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";

// Import Buyer pages
import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import PropertySearch from "../pages/Buyer/PropertySearch";
import SavedProperties from "../pages/Buyer/SavedProperties";
import Profile from "../components/Profile";
import PropertyDetails from "../components/PropertyDetails";

const BuyerLayout = () => {
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
          // Redirect to login or handle authentication error
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/login");
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
            {loading ? "Loading..." : userData?.name || "User"}
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
      sidebar={SidebarBuyer}
      title={
        loading
          ? "Loading..."
          : userData
          ? `Welcome back, ${userData.firstName} ${userData.lastName}`
          : "Welcome back"
      }
      subtitle="Find your perfect home with personalized recommendations"
      actions={dashboardActions}
    >
      <Outlet />
    </DashboardLayout>
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

        {/* Property Details - Outside the dashboard layout for full page display */}
        <Route path="properties/:id" element={<PropertyDetails />} />
      </Routes>
    </SidebarProvider>
  );
};

export default BuyerRoutes;
