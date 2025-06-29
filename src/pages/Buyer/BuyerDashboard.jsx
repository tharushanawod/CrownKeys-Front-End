import React, { useState } from "react";
import {
  FaRegHeart,
  FaCalendarAlt,
  FaSearch,
  FaEye,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaFileAlt,
  FaBell,
  FaUserCircle,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import SidebarBuyer from "../../components/SidebarBuyer";

const statCards = [
  { label: "Saved Properties", value: 12, icon: <FaRegHeart /> },
  { label: "Upcoming Tours", value: 3, icon: <FaCalendarAlt /> },
  { label: "New Matches", value: 8, icon: <FaSearch /> },
  { label: "Recent Views", value: 24, icon: <FaEye /> },
];

const propertyMatches = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$850,000",
    address: "123 Park Avenue, New York",
    beds: 4,
    baths: 3,
    area: "2,400 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    price: "$720,000",
    address: "456 Lake Street, Chicago",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
  },
  {
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    price: "$925,000",
    address: "789 Ocean Drive, Miami",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
  },
];

const marketInsights = [
  { label: "Average Price", value: "$750,000", change: "+5.2%", up: true },
  { label: "Price Change", value: "+$35,000", change: "+4.8%", up: true },
  { label: "Days on Market", value: "45 days", change: "-12%", up: true },
  { label: "Available Properties", value: "234", change: "+8%", up: true },
];

const recentActivity = [
  {
    icon: <FaEye className="text-[#0284c7]" />,
    title: "Viewed Property",
    desc: "123 Park Avenue, New York",
    time: "2 hours ago",
  },
  {
    icon: <FaRegHeart className="text-[#0284c7]" />,
    title: "Saved Property",
    desc: "456 Lake Street, Chicago",
    time: "5 hours ago",
  },
  {
    icon: <FaCalendarAlt className="text-[#0284c7]" />,
    title: "Scheduled Tour",
    desc: "789 Ocean Drive, Miami",
    time: "1 day ago",
  },
  {
    icon: <FaFileAlt className="text-[#0284c7]" />,
    title: "Updated Documents",
    desc: "Mortgage Pre-approval",
    time: "2 days ago",
  },
];

const BuyerDashboard = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] sm:p-4 lg:ml-64">
      {/*sidebar*/}
      <SidebarBuyer />
      {/* Top Bar */}
      <div className="flex justify-end items-center mb-6 bg-white">
        <button className="relative p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none mr-4">
          <FaBell className="text-2xl text-[#0284c7]" />
          {/* Notification dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setTimeout(() => setProfileOpen(false), 200)}
            onClick={() => setProfileOpen((open) => !open)}
          >
            <FaUserCircle className="text-3xl text-[#0284c7]" />
          </button>
          {/* Dropdown */}
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
      <div className="max-w-7xl mx-auto">
        {/* Welcome & Stat Cards */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#091a2b] mb-4">
            Welcome back, John
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-xl shadow flex items-center gap-4 p-5"
              >
                <div className="bg-[#e0f2fe] text-[#0284c7] p-3 rounded-full text-xl">
                  {card.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#091a2b]">
                    {card.value}
                  </div>
                  <div className="text-[#64748b] text-sm">{card.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Property Matches */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Latest Property Matches
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyMatches.map((prop, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 flex flex-col"
              >
                <img
                  src={prop.img}
                  alt="property"
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xl font-bold text-[#091a2b]">
                    {prop.price}
                  </div>
                  <button className="text-[#0284c7] hover:text-[#0369a1] p-2 rounded-full border border-[#e0f2fe]">
                    <FaRegHeart />
                  </button>
                </div>
                <div className="text-[#64748b] text-sm mb-2">
                  {prop.address}
                </div>
                <div className="flex gap-4 text-[#64748b] text-xs">
                  <span className="flex items-center gap-1">
                    <FaBed /> {prop.beds} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath /> {prop.baths} baths
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRulerCombined /> {prop.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Market Insights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketInsights.map((insight) => (
              <div
                key={insight.label}
                className="bg-white rounded-xl shadow p-5 flex flex-col gap-1"
              >
                <div className="text-[#64748b] text-sm flex items-center gap-2">
                  {insight.label}
                  <FaRulerCombined className="text-green-500" />
                </div>
                <div className="text-xl font-bold text-[#091a2b]">
                  {insight.value}
                </div>
                <div className="text-green-600 text-xs font-semibold">
                  {insight.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Recent Activity
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <ul className="divide-y divide-gray-100">
              {recentActivity.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-[#e0f2fe] p-2 rounded-full text-xl">
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-semibold text-[#091a2b] text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#64748b]">{item.desc}</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#94a3b8] whitespace-nowrap">
                    {item.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
