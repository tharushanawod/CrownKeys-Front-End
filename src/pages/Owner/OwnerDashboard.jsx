import React from "react";
import SidebarOwner from "../../components/SidebarOwner";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Total Active Listings",
    value: "8 Properties",
    change: "+2 this month",
    color: "text-[#005163]",
    subColor: "text-green-600",
  },
  {
    label: "Total Views",
    value: "2,847",
    change: "this month",
    color: "text-[#005163]",
    subColor: "text-green-600",
  },
  {
    label: "New Inquiries",
    value: "34",
    change: "pending",
    color: "text-[#005163]",
    subColor: "text-red-600",
  },
  {
    label: "Average Property Value",
    value: "$425,000",
    change: "-5% this month",
    color: "text-[#005163]",
    subColor: "text-red-600",
  },
];

const properties = [
  {
    address: "123 Main Street",
    price: "$450,000",
    views: 234,
    inquiries: 12,
    status: "Active",
    img: "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=80&q=80",
  },
  {
    address: "456 Oak Avenue",
    price: "$375,000",
    views: 189,
    inquiries: 8,
    status: "Pending",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
  },
  {
    address: "789 Pine Road",
    price: "$525,000",
    views: 312,
    inquiries: 15,
    status: "Active",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80",
  },
];

const inquiries = [
  {
    name: "Sarah Johnson",
    address: "123 Main St",
    time: "2 hours ago",
    status: "New",
  },
  {
    name: "Michael Brown",
    address: "456 Oak Ave",
    time: "5 hours ago",
    status: "Viewed",
  },
  {
    name: "Emily Davis",
    address: "789 Pine Rd",
    time: "1 day ago",
    status: "Contacted",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const inquiryStatusColors = {
  New: "bg-blue-100 text-blue-700",
  Viewed: "bg-green-100 text-green-700",
  Contacted: "bg-gray-100 text-gray-700",
};

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <SidebarOwner />
      <div className="flex-1 flex flex-col min-w-0 sm:ml-64">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#091a2b]">
              Welcome back, John Smith
            </h1>
            <p className="text-[#3b4876] text-sm">
              Here's what's happening with your properties today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/owner/post-ad"
              className="bg-[#005163] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors"
            >
              + Add Property
            </Link>
            <button className="bg-[#f1f3f4] text-[#005163] px-3 py-2 rounded-lg font-semibold hover:bg-[#e0e4e6] transition-colors">
              Search
            </button>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow flex flex-col"
              >
                <span className="text-xs text-[#a8aeaf] font-semibold mb-1">
                  {stat.label}
                </span>
                <span className={`text-xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className={`text-xs mt-1 ${stat.subColor}`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
          {/* Chart & Inquiries */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Chart Placeholder */}
            <div className="bg-white rounded-lg p-4 shadow col-span-2 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[#091a2b]">
                  Property Views
                </span>
                <span className="text-xs text-[#a8aeaf]">Last 30 days</span>
              </div>
              {/* Chart Placeholder */}
              <div className="flex-1 flex items-center justify-center h-48">
                <span className="text-[#a8aeaf]">[Chart Placeholder]</span>
              </div>
            </div>
            {/* Latest Inquiries */}
            <div className="bg-white rounded-lg p-4 shadow flex flex-col">
              <span className="font-semibold text-[#091a2b] mb-2">
                Latest Inquiries
              </span>
              <div className="space-y-4">
                {inquiries.map((inq, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#091a2b]">
                        {inq.name}
                      </div>
                      <div className="text-xs text-[#3b4876]">
                        {inq.address}
                      </div>
                      <div className="text-xs text-[#a8aeaf]">{inq.time}</div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        inquiryStatusColors[inq.status]
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Properties Table */}
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <div className="font-semibold text-[#091a2b] mb-4">
              Your Properties
            </div>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-[#a8aeaf]">
                  <th className="py-2">Property</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Views</th>
                  <th className="py-2">Inquiries</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((prop, i) => (
                  <tr key={i} className="border-t border-[#f1f3f4]">
                    <td className="py-2 flex items-center gap-2">
                      <img
                        src={prop.img}
                        alt="property"
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="text-[#091a2b] font-medium">
                        {prop.address}
                      </span>
                    </td>
                    <td className="py-2">{prop.price}</td>
                    <td className="py-2">{prop.views}</td>
                    <td className="py-2">{prop.inquiries}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          statusColors[prop.status]
                        }`}
                      >
                        {prop.status}
                      </span>
                    </td>
                    <td className="py-2">
                      <button className="text-[#a8aeaf] hover:text-[#005163] p-1 rounded transition-colors">
                        ...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
