import React from "react";

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-lg p-4 shadow flex flex-col hover:shadow-md transition-shadow"
        >
          <span className="text-xs text-[#a8aeaf] font-semibold mb-1">
            {stat.label}
          </span>
          <span
            className={`text-xl font-bold ${stat.color || "text-[#005163]"}`}
          >
            {stat.value}
          </span>
          {stat.change && (
            <span
              className={`text-xs mt-1 ${stat.subColor || "text-green-600"}`}
            >
              {stat.change}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
