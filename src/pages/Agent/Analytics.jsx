import React, { useState } from "react";
import {
  FaDollarSign,
  FaEye,
  FaHome,
  FaUsers,
  FaArrowUp,
  FaArrowDown ,
  FaCalendarAlt,
  FaDownload,

} from "react-icons/fa";

// Mock data for charts - in a real app, this would come from an API
const salesData = [
  { month: "Jan", sales: 8, revenue: 24000, leads: 45 },
  { month: "Feb", sales: 12, revenue: 36000, leads: 52 },
  { month: "Mar", sales: 15, revenue: 48000, leads: 38 },
  { month: "Apr", sales: 10, revenue: 32000, leads: 41 },
  { month: "May", sales: 18, revenue: 54000, leads: 65 },
  { month: "Jun", sales: 22, revenue: 66000, leads: 58 },
];

const propertyTypeData = [
  { type: "Apartments", count: 45, percentage: 35, color: "#0284c7" },
  { type: "Houses", count: 38, percentage: 30, color: "#0891b2" },
  { type: "Condos", count: 25, percentage: 20, color: "#0ea5e9" },
  { type: "Townhouses", count: 19, percentage: 15, color: "#38bdf8" },
];

const leadSourceData = [
  { source: "Website", leads: 45, percentage: 32, color: "#0284c7" },
  { source: "Referrals", leads: 38, percentage: 27, color: "#0891b2" },
  { source: "Social Media", leads: 32, percentage: 23, color: "#0ea5e9" },
  { source: "Walk-ins", leads: 25, percentage: 18, color: "#38bdf8" },
];

const performanceMetrics = [
  {
    label: "Total Sales",
    value: "85",
    change: "+12.5%",
    isPositive: true,
    icon: <FaHome />,
    color: "bg-blue-500",
  },
  {
    label: "Revenue",
    value: "$260K",
    change: "+18.2%",
    isPositive: true,
    icon: <FaDollarSign />,
    color: "bg-green-500",
  },
  {
    label: "Active Leads",
    value: "299",
    change: "+5.4%",
    isPositive: true,
    icon: <FaUsers />,
    color: "bg-purple-500",
  },
  {
    label: "Avg. Days on Market",
    value: "23",
    change: "-8.1%",
    isPositive: true,
    icon: <FaCalendarAlt />,
    color: "bg-orange-500",
  },
];

const recentActivities = [
  {
    activity: "Property sold",
    details: "123 Main St - $450,000",
    time: "2 hours ago",
    type: "sale",
  },
  {
    activity: "New lead",
    details: "Sarah Johnson - Beach House inquiry",
    time: "4 hours ago",
    type: "lead",
  },
  {
    activity: "Listing viewed",
    details: "456 Oak Ave - 15 new views",
    time: "6 hours ago",
    type: "view",
  },
  {
    activity: "Client meeting",
    details: "Michael Chen - Property viewing",
    time: "1 day ago",
    type: "meeting",
  },
];

const topProperties = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    views: 234,
    inquiries: 18,
    revenue: "$24,000",
    image:
      "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "Modern Beach House",
    views: 189,
    inquiries: 12,
    revenue: "$18,500",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "Urban Loft Space",
    views: 156,
    inquiries: 9,
    revenue: "$15,200",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&q=80",
  },
];

// Simple Chart Components (in a real app, you'd use a library like Chart.js or Recharts)
const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map((item) => item.sales));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-[#091a2b] mb-4">{title}</h3>
      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="bg-[#0284c7] w-full rounded-t transition-all hover:bg-[#0369a1]"
              style={{ height: `${(item.sales / maxValue) * 100}%` }}
              title={`${item.month}: ${item.sales} sales`}
            ></div>
            <span className="text-xs text-[#64748b] mt-2">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm text-[#64748b]">
          Monthly Sales Performance
        </span>
      </div>
    </div>
  );
};

const LineChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map((item) => item.revenue));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-[#091a2b] mb-4">{title}</h3>
      <div className="relative h-48">
        <svg className="w-full h-full">
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - (item.revenue / maxValue) * 80;
            const nextItem = data[index + 1];

            return (
              <g key={index}>
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill="#0284c7"
                  className="hover:r-6 transition-all"
                />
                {nextItem && (
                  <line
                    x1={`${x}%`}
                    y1={`${y}%`}
                    x2={`${((index + 1) / (data.length - 1)) * 100}%`}
                    y2={`${100 - (nextItem.revenue / maxValue) * 80}%`}
                    stroke="#0284c7"
                    strokeWidth="2"
                  />
                )}
              </g>
            );
          })}
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#64748b]">
          {data.map((item, index) => (
            <span key={index}>{item.month}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-sm text-[#64748b]">Revenue Trends ($)</span>
      </div>
    </div>
  );
};

const PieChart = ({ data, title }) => {
  let cumulativePercentage = 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-[#091a2b] mb-4">{title}</h3>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="60"
              fill="none"
              stroke="#f1f3f4"
              strokeWidth="8"
            />
            {data.map((item, index) => {
              const strokeDasharray = `${(item.percentage / 100) * 377} 377`;
              const strokeDashoffset = -cumulativePercentage * 3.77;
              cumulativePercentage += item.percentage;

              return (
                <circle
                  key={index}
                  cx="50%"
                  cy="50%"
                  r="60"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all hover:stroke-width-10"
                />
              );
            })}
          </svg>
        </div>
        <div className="flex-1">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-[#64748b]">{item.type}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-[#091a2b]">
                  {item.count}
                </div>
                <div className="text-xs text-[#64748b]">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("6months");
  const [selectedMetric, setSelectedMetric] = useState("sales");

  const exportData = () => {
    console.log("Exporting analytics data...");
    // Here you would implement actual export functionality
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#091a2b]">
              Analytics Dashboard
            </h1>
            <p className="text-[#64748b]">
              Track your performance and sales metrics
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <button
              onClick={exportData}
              className="bg-[#0284c7] text-white px-4 py-2 rounded-lg hover:bg-[#0369a1] transition-colors flex items-center gap-2"
            >
              <FaDownload />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Performance Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.color} text-white`}>
                {metric.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.isPositive ? <FaArrowUp /> : <FaArrowDown  />}
                {metric.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#091a2b] mb-1">
                {metric.value}
              </div>
              <div className="text-[#64748b] text-sm">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart data={salesData} title="Monthly Sales" />
        <LineChart data={salesData} title="Revenue Trends" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart data={propertyTypeData} title="Property Types Sold" />
        <PieChart data={leadSourceData} title="Lead Sources" />
      </div>

      {/* Top Performing Properties */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-[#091a2b] mb-6">
          Top Performing Properties
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProperties.map((property) => (
            <div
              key={property.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-[#091a2b] mb-2">
                {property.title}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Views:</span>
                  <span className="font-semibold text-[#091a2b]">
                    {property.views}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Inquiries:</span>
                  <span className="font-semibold text-[#091a2b]">
                    {property.inquiries}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Revenue:</span>
                  <span className="font-semibold text-[#0284c7]">
                    {property.revenue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-[#091a2b] mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-[#f8fafc] rounded-lg"
            >
              <div
                className={`p-2 rounded-full ${
                  activity.type === "sale"
                    ? "bg-green-100 text-green-600"
                    : activity.type === "lead"
                    ? "bg-blue-100 text-blue-600"
                    : activity.type === "view"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {activity.type === "sale" ? (
                  <FaDollarSign />
                ) : activity.type === "lead" ? (
                  <FaUsers />
                ) : activity.type === "view" ? (
                  <FaEye />
                ) : (
                  <FaCalendarAlt />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#091a2b] text-sm">
                  {activity.activity}
                </div>
                <div className="text-[#64748b] text-xs">{activity.details}</div>
              </div>
              <div className="text-[#64748b] text-xs">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
