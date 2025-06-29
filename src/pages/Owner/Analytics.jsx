import React from "react";

const stats = [
  { label: "Total Views", value: "2,847", color: "text-[#005163]" },
  { label: "Total Inquiries", value: "34", color: "text-[#005163]" },
  { label: "Average Value", value: "$425,000", color: "text-[#005163]" },
];

const Analytics = () => (
  <div className="bg-[#f1f3f4] p-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#091a2b] mb-6">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow flex flex-col items-center"
          >
            <span className="text-xs text-[#a8aeaf] font-semibold mb-1">
              {stat.label}
            </span>
            <span className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <span className="font-semibold text-[#091a2b] mb-2">
          Views Over Time
        </span>
        <div className="w-full h-64 flex items-center justify-center text-[#a8aeaf]">
          [Chart Placeholder]
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;
