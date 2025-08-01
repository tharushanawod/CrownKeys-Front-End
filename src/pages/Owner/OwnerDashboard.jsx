import React from "react";
import { Link } from "react-router-dom";
import SidebarOwner from "../../components/SidebarOwner";
import DashboardLayout from "../../components/DashboardLayout";
import StatsCards from "../../components/StatsCards";
import PropertyViewsChart from "../../components/PropertyViewsChart";
import PropertiesTable from "../../components/PropertiesTable";
import InquiriesWidget from "../../components/InquiriesWidget";

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

// Chart data for property views
const chartData = {
  labels: [
    "Jan 1",
    "Jan 2",
    "Jan 3",
    "Jan 4",
    "Jan 5",
    "Jan 6",
    "Jan 7",
    "Jan 8",
    "Jan 9",
    "Jan 10",
    "Jan 11",
    "Jan 12",
    "Jan 13",
    "Jan 14",
    "Jan 15",
    "Jan 16",
    "Jan 17",
    "Jan 18",
    "Jan 19",
    "Jan 20",
    "Jan 21",
    "Jan 22",
    "Jan 23",
    "Jan 24",
    "Jan 25",
    "Jan 26",
    "Jan 27",
    "Jan 28",
    "Jan 29",
    "Jan 30",
  ],
  datasets: [
    {
      label: "Property Views",
      data: [
        45, 52, 38, 67, 89, 76, 94, 82, 105, 91, 78, 85, 112, 98, 76, 89, 103,
        87, 95, 108, 92, 84, 97, 113, 101, 88, 96, 104, 89, 92,
      ],
      borderColor: "#005163",
      backgroundColor: "rgba(0, 81, 99, 0.1)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: "#005163",
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const OwnerDashboard = () => {
  const dashboardActions = (
    <>
      <Link
        to="/owner/post-ad"
        className="bg-[#005163] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors"
      >
        + Add Property
      </Link>
      <button className="bg-[#f1f3f4] text-[#005163] px-3 py-2 rounded-lg font-semibold hover:bg-[#e0e4e6] transition-colors">
        Search
      </button>
    </>
  );

  return (
    <DashboardLayout
      sidebar={SidebarOwner}
      title="Welcome back, John Smith"
      subtitle="Here's what's happening with your properties today."
      actions={dashboardActions}
    >
      {/* Stats Cards */}
      <StatsCards stats={stats} />

      {/* Chart & Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PropertyViewsChart data={chartData} />
        <InquiriesWidget
          inquiries={inquiries}
          statusColors={inquiryStatusColors}
        />
      </div>

      {/* Properties Table */}
      <PropertiesTable properties={properties} statusColors={statusColors} />
    </DashboardLayout>
  );
};

export default OwnerDashboard;
