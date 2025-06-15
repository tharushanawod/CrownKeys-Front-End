import React, { useState } from "react";
import SidebarOwner from "../../components/SidebarOwner";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaCamera,
  FaLock,
  FaBell,
  FaCreditCard,
  FaHistory,
} from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data - replace with actual data from your backend
  const userData = {
    name: "John Silva",
    email: "john.silva@example.com",
    phone: "+94 77 123 4567",
    address: "123 Main Street, Colombo 03",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    joinDate: "January 2024",
    totalListings: 5,
    activeListings: 3,
    totalViews: 1250,
    totalInquiries: 28,
    subscription: "PRO",
    subscriptionExpiry: "March 15, 2024",
  };

  const recentActivity = [
    {
      id: 1,
      type: "listing",
      action: "Added new property",
      property: "Luxury Villa in Colombo 7",
      date: "2024-02-20",
      status: "active",
    },
    {
      id: 2,
      type: "inquiry",
      action: "New inquiry received",
      property: "Modern Apartment in Dehiwala",
      date: "2024-02-19",
      status: "unread",
    },
    {
      id: 3,
      type: "subscription",
      action: "Upgraded to PRO plan",
      date: "2024-02-15",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <SidebarOwner />
      <div className="flex-1 p-8 ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#005163]"
                />
                <button className="absolute bottom-0 right-0 bg-[#005163] text-white p-2 rounded-full hover:bg-[#091a2b] transition-colors">
                  <FaCamera />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-[#091a2b]">
                    {userData.name}
                  </h1>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-[#005163] hover:text-[#091a2b] transition-colors"
                  >
                    <FaEdit size={20} />
                  </button>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaEnvelope className="text-[#005163]" />
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaPhone className="text-[#005163]" />
                    <span>{userData.phone}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <FaMapMarkerAlt className="text-[#005163]" />
                    <span>{userData.address}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                <div className="bg-[#f1f3f4] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#005163]">
                    {userData.totalListings}
                  </div>
                  <div className="text-sm text-gray-600">Total Listings</div>
                </div>
                <div className="bg-[#f1f3f4] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#005163]">
                    {userData.activeListings}
                  </div>
                  <div className="text-sm text-gray-600">Active Listings</div>
                </div>
                <div className="bg-[#f1f3f4] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#005163]">
                    {userData.totalViews}
                  </div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
                <div className="bg-[#f1f3f4] p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-[#005163]">
                    {userData.totalInquiries}
                  </div>
                  <div className="text-sm text-gray-600">Inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs and Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === "profile"
                      ? "text-[#005163] border-b-2 border-[#005163]"
                      : "text-gray-500 hover:text-[#091a2b]"
                  }`}
                >
                  <FaUser className="inline-block mr-2" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("subscription")}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === "subscription"
                      ? "text-[#005163] border-b-2 border-[#005163]"
                      : "text-gray-500 hover:text-[#091a2b]"
                  }`}
                >
                  <FaCreditCard className="inline-block mr-2" />
                  Subscription
                </button>
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === "activity"
                      ? "text-[#005163] border-b-2 border-[#005163]"
                      : "text-gray-500 hover:text-[#091a2b]"
                  }`}
                >
                  <FaHistory className="inline-block mr-2" />
                  Activity
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === "settings"
                      ? "text-[#005163] border-b-2 border-[#005163]"
                      : "text-gray-500 hover:text-[#091a2b]"
                  }`}
                >
                  <FaLock className="inline-block mr-2" />
                  Settings
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                    Personal Information
                  </h2>
                  {isEditing ? (
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue={userData.name}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            defaultValue={userData.phone}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <input
                            type="text"
                            defaultValue={userData.address}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#005163]"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-4">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-lg bg-[#005163] text-white hover:bg-[#091a2b]"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Full Name
                        </h3>
                        <p className="text-[#091a2b]">{userData.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Email
                        </h3>
                        <p className="text-[#091a2b]">{userData.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Phone
                        </h3>
                        <p className="text-[#091a2b]">{userData.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Address
                        </h3>
                        <p className="text-[#091a2b]">{userData.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "subscription" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                    Subscription Details
                  </h2>
                  <div className="bg-[#f1f3f4] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#091a2b]">
                          Current Plan: {userData.subscription}
                        </h3>
                        <p className="text-gray-600">
                          Member since {userData.joinDate}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-[#005163] text-white rounded-full text-sm">
                        Active
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600">
                        Your subscription will renew on{" "}
                        <span className="font-semibold">
                          {userData.subscriptionExpiry}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-6 py-2 rounded-lg bg-[#005163] text-white hover:bg-[#091a2b]">
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "activity" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-4 bg-[#f1f3f4] rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-full ${
                              activity.type === "listing"
                                ? "bg-blue-100 text-blue-600"
                                : activity.type === "inquiry"
                                ? "bg-green-100 text-green-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {activity.type === "listing" ? (
                              <FaHome />
                            ) : activity.type === "inquiry" ? (
                              <FaBell />
                            ) : (
                              <FaCreditCard />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-[#091a2b]">
                              {activity.action}
                            </p>
                            <p className="text-sm text-gray-600">
                              {activity.property}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">
                            {activity.date}
                          </p>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              activity.status === "active"
                                ? "bg-green-100 text-green-600"
                                : activity.status === "unread"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#091a2b] mb-6">
                    Account Settings
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#f1f3f4] rounded-xl">
                      <h3 className="font-medium text-[#091a2b] mb-2">
                        Password
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Change your password to keep your account secure
                      </p>
                      <button className="px-4 py-2 rounded-lg border border-[#005163] text-[#005163] hover:bg-[#005163] hover:text-white transition-colors">
                        Change Password
                      </button>
                    </div>
                    <div className="p-4 bg-[#f1f3f4] rounded-xl">
                      <h3 className="font-medium text-[#091a2b] mb-2">
                        Notifications
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Manage your notification preferences
                      </p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded text-[#005163]"
                            defaultChecked
                          />
                          <span>Email notifications for new inquiries</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded text-[#005163]"
                            defaultChecked
                          />
                          <span>Property view updates</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded text-[#005163]"
                            defaultChecked
                          />
                          <span>Subscription updates</span>
                        </label>
                      </div>
                    </div>
                    <div className="p-4 bg-[#f1f3f4] rounded-xl">
                      <h3 className="font-medium text-[#091a2b] mb-2">
                        Account Deletion
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Permanently delete your account and all associated data
                      </p>
                      <button className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
