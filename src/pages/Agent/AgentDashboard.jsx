import React from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaTags,
  FaMoneyBillWave,
  FaEye,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import { useState } from "react";

const statCards = [
  { label: "Active Listings", value: 12, icon: <FaBuilding /> },
  { label: "New Inquiries", value: 5, icon: <FaEnvelope /> },
  { label: "Pending Offers", value: 3, icon: <FaTags /> },
  {
    label: "This Month's Commission",
    value: "$8,500",
    icon: <FaMoneyBillWave />,
  },
];

const agentListings = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=600&q=80",
    price: "$450,000",
    type: "Cozy Apartment",
    address: "123 Main Street, Downtown",
    views: 234,
    inquiries: 12,
    status: "Active",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$375,000",
    type: "Family Home",
    address: "456 Oak Avenue, Suburbs",
    views: 189,
    inquiries: 8,
    status: "Pending",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    price: "$525,000",
    type: "Modern Loft",
    address: "789 Pine Road, City Center",
    views: 312,
    inquiries: 15,
    status: "Active",
  },
];

const performanceMetrics = [
  { label: "Avg. Days on Market", value: "28 days", change: "-12%", up: true },
  { label: "Conversion Rate", value: "24.5%", change: "+8.2%", up: true },
  { label: "Average Sale Price", value: "$485,000", change: "+15%", up: true },
  { label: "Client Satisfaction", value: "4.9/5", change: "+0.2", up: true },
];

const recentActivity = [
  {
    icon: <FaEye className="text-[#0284c7]" />,
    title: "Property Viewed",
    desc: "123 Main Street - 15 new views",
    time: "2 hours ago",
  },
  {
    icon: <FaEnvelope className="text-[#0284c7]" />,
    title: "New Inquiry Received",
    desc: "456 Oak Avenue - Sarah Johnson",
    time: "4 hours ago",
  },
  {
    icon: <FaTags className="text-[#0284c7]" />,
    title: "Offer Submitted",
    desc: "789 Pine Road - $510,000",
    time: "1 day ago",
  },
  {
    icon: <FaFileAlt className="text-[#0284c7]" />,
    title: "Contract Signed",
    desc: "321 Elm Street - Sale completed",
    time: "2 days ago",
  },
];

const AgentDashboard = () => {
  const [listings, setListings] = useState(agentListings);

  const handleViewDetails = (listing) => {
    console.log("View details for:", listing);
    // You can add navigation to listing details page or open a modal
  };

  const handleEditListing = (listing) => {
    console.log("Edit listing:", listing);
    // You can add navigation to edit listing page
  };

  return (
    <div className="bg-[#f8fafc] p-4">
      <div className="max-w-7xl">
        {/* Welcome & Stat Cards */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#091a2b] mb-4">
            Welcome back, Agent Sarah
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

        {/* Latest Listings */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Your Latest Listings
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={listing.img}
                    alt={listing.type}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        listing.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : listing.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {listing.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#091a2b] text-lg">
                      {listing.price}
                    </h3>
                  </div>
                  <p className="text-[#0284c7] font-semibold mb-1">
                    {listing.type}
                  </p>
                  <p className="text-[#64748b] text-sm mb-3">
                    {listing.address}
                  </p>

                  <div className="flex justify-between text-sm text-[#64748b] mb-4">
                    <div className="flex items-center gap-1">
                      <FaEye className="text-[#0284c7]" />
                      <span>{listing.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEnvelope className="text-[#0284c7]" />
                      <span>{listing.inquiries} inquiries</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewDetails(listing)}
                      className="flex-1 bg-[#0284c7] text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-[#0369a1] transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleEditListing(listing)}
                      className="flex-1 bg-[#f1f3f4] text-[#0284c7] py-2 px-3 rounded-lg text-sm font-semibold hover:bg-[#e0f2fe] transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Performance Metrics
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-xl shadow p-5 flex flex-col gap-1"
              >
                <div className="text-[#64748b] text-sm flex items-center gap-2">
                  {metric.label}
                  <FaChartLine className="text-green-500" />
                </div>
                <div className="text-xl font-bold text-[#091a2b]">
                  {metric.value}
                </div>
                <div className="text-green-600 text-xs font-semibold">
                  {metric.change}
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

export default AgentDashboard;
