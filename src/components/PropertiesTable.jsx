import React from "react";

const PropertiesTable = ({
  properties,
  statusColors,
  title = "Your Properties",
  showActions = true,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
      <div className="font-semibold text-[#091a2b] mb-4">{title}</div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-[#a8aeaf]">
            <th className="py-2">Property</th>
            <th className="py-2">Price</th>
            <th className="py-2">Views</th>
            <th className="py-2">Inquiries</th>
            <th className="py-2">Status</th>
            {showActions && <th className="py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {properties.map((prop, i) => (
            <tr key={i} className="border-t border-[#f1f3f4] hover:bg-gray-50">
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
                    statusColors[prop.status] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {prop.status}
                </span>
              </td>
              {showActions && (
                <td className="py-2">
                  <button className="text-[#a8aeaf] hover:text-[#005163] p-1 rounded transition-colors">
                    ...
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesTable;
