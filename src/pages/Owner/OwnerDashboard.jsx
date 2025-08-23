import React, { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaTags,
  FaMoneyBillWave,
  FaEye,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
  FaUsers,
  FaHome,
} from "react-icons/fa";
import AgentPropertyCard from "../../components/AgentPropertyCard";

const statCards = [
  { label: "Total Properties", value: 8, icon: <FaBuilding /> },
  { label: "New Inquiries", value: 34, icon: <FaEnvelope /> },
  { label: "Active Offers", value: 7, icon: <FaTags /> },
  {
    label: "Monthly Revenue",
    value: "$12,500",
    icon: <FaMoneyBillWave />,
  },
];

const ownerProperties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=600&q=80",
    price: "$450,000",
    title: "Downtown Apartment",
    address: "123 Main Street, Downtown",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    views: 234,
    inquiries: 12,
    monthlyRent: "$3,200",
    status: "Rented",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "$375,000",
    title: "Suburban Family Home",
    address: "456 Oak Avenue, Suburbs",
    beds: 4,
    baths: 3,
    area: "2,200 sqft",
    views: 189,
    inquiries: 8,
    monthlyRent: "$2,750",
    status: "Available",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    price: "$525,000",
    title: "Modern City Loft",
    address: "789 Pine Road, City Center",
    beds: 2,
    baths: 2,
    area: "1,500 sqft",
    views: 312,
    inquiries: 15,
    monthlyRent: "$4,200",
    status: "Available",
  },
];

const performanceMetrics = [
  { label: "Occupancy Rate", value: "92%", change: "+5%", up: true },
  { label: "Avg. Monthly Revenue", value: "$8,200", change: "+12%", up: true },
  { label: "Property Appreciation", value: "8.5%", change: "+2.1%", up: true },
  { label: "Tenant Satisfaction", value: "4.7/5", change: "+0.3", up: true },
];

const recentActivity = [
  {
    icon: <FaUsers className="text-[#0284c7]" />,
    title: "New Tenant Application",
    desc: "456 Oak Avenue - John & Mary Smith",
    time: "2 hours ago",
  },
  {
    icon: <FaMoneyBillWave className="text-[#0284c7]" />,
    title: "Rent Payment Received",
    desc: "123 Main Street - $3,200",
    time: "4 hours ago",
  },
  {
    icon: <FaEnvelope className="text-[#0284c7]" />,
    title: "Property Inquiry",
    desc: "789 Pine Road - Sarah Johnson",
    time: "1 day ago",
  },
  {
    icon: <FaHome className="text-[#0284c7]" />,
    title: "Property Listed",
    desc: "321 Elm Street - Available for rent",
    time: "2 days ago",
  },
];

const OwnerDashboard = () => {
  const [properties, setProperties] = useState(ownerProperties);

  const handleViewDetails = (property) => {
    console.log("View details for:", property);
    // You can add navigation to property details page or open a modal
  };

  const handleEdit = (property) => {
    console.log("Edit property:", property);
    // You can add navigation to edit property page
  };

  const handleDelete = (property) => {
    console.log("Delete property:", property);
    // Show confirmation dialog and delete property
  };

  const handleViewAnalytics = (property) => {
    console.log("View property analytics:", property);
    // Navigate to analytics page or open modal
  };

  return (
    <div className="bg-[#f8fafc] p-4">
      <div className="max-w-7xl">
        {/* Welcome & Stat Cards */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#091a2b] mb-4">
            Welcome back, Property Owner
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

        {/* Your Properties */}
        <div className="mb-8">
          <div className="font-semibold text-[#091a2b] mb-4 text-lg">
            Your Properties
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <AgentPropertyCard
                key={property.id}
                property={property}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onViewDetails={handleViewDetails}
                onViewAnalytics={handleViewAnalytics}
              />
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

export default OwnerDashboard;
