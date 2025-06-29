import React from "react";
import {
  FaRegHeart,
  FaCalendarAlt,
  FaSearch,
  FaEye,
  FaFileAlt,
  FaRulerCombined,
} from "react-icons/fa";
import SavedPropertyCard from "../../components/SavedPropertyCard";
import { useState } from "react";

const statCards = [
  { label: "Saved Properties", value: 12, icon: <FaRegHeart /> },
  { label: "Upcoming Tours", value: 3, icon: <FaCalendarAlt /> },
  { label: "New Matches", value: 8, icon: <FaSearch /> },
  { label: "Recent Views", value: 24, icon: <FaEye /> },
];

const propertyMatches = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$850,000",
    type: "Single Family Home",
    address: "123 Park Avenue, New York",
    beds: 4,
    baths: 3,
    area: "2,400 sqft",
    saved: false,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    price: "$720,000",
    type: "Modern Apartment",
    address: "456 Lake Street, Chicago",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    saved: true,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    price: "$925,000",
    type: "Beach House",
    address: "789 Ocean Drive, Miami",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
    saved: false,
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
  const [properties, setProperties] = useState(propertyMatches);

  const toggleSave = (id) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...prop, saved: !prop.saved } : prop
      )
    );
  };

  const handleScheduleTour = (property) => {
    console.log("View details for:", property);
    // You can add navigation to tour scheduling page or open a modal
  };

  return (
    <div className="bg-[#f8fafc] p-4">
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
            {properties.map((property) => (
              <SavedPropertyCard
                key={property.id}
                property={property}
                viewMode="grid"
                onToggleSave={toggleSave}
                onScheduleTour={handleScheduleTour}
              />
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
