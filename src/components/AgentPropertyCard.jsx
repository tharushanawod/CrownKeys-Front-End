import React from "react";
import {
  FaEye,
  FaEnvelope,
  FaEdit,
  FaTrash,
  FaChartLine,
} from "react-icons/fa";

const AgentPropertyCard = ({
  property,
  onEdit,
  onDelete,
  onViewDetails,
  onViewAnalytics,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Sold":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              property.status
            )}`}
          >
            {property.status}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-[#091a2b]">
            ID: {property.id}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-[#091a2b] text-lg leading-tight">
            {property.price}
          </h3>
          <button
            onClick={() => onViewAnalytics(property)}
            className="p-1 rounded-full hover:bg-[#e0f2fe] transition-colors"
            title="View Analytics"
          >
            <FaChartLine className="text-[#0284c7] text-sm" />
          </button>
        </div>

        <h4 className="text-[#0284c7] font-semibold mb-1 text-sm">
          {property.title}
        </h4>
        <p className="text-[#64748b] text-xs mb-3 line-clamp-2">
          {property.address}
        </p>

        {/* Property Details */}
        <div className="flex justify-between text-xs text-[#64748b] mb-3">
          <span>{property.beds} beds</span>
          <span>{property.baths} baths</span>
          <span>{property.area}</span>
        </div>

        {/* Performance Metrics */}
        <div className="flex justify-between text-sm text-[#64748b] mb-4 bg-[#f8fafc] p-2 rounded-lg">
          <div className="flex items-center gap-1">
            <FaEye className="text-[#0284c7]" />
            <span className="text-xs">{property.views || 0} views</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-[#0284c7]" />
            <span className="text-xs">{property.inquiries || 0} inquiries</span>
          </div>
          <div className="text-xs">
            <span className="font-semibold text-[#0284c7]">
              ${property.commission || "2,500"}
            </span>
            <span className="text-[#64748b]"> comm.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onViewDetails(property)}
            className="bg-[#0284c7] text-white py-2 px-3 rounded-lg text-xs font-semibold hover:bg-[#0369a1] transition-colors flex items-center justify-center gap-1"
          >
            <FaEye className="text-xs" />
            View
          </button>
          <button
            onClick={() => onEdit(property)}
            className="bg-[#f1f3f4] text-[#0284c7] py-2 px-3 rounded-lg text-xs font-semibold hover:bg-[#e0f2fe] transition-colors flex items-center justify-center gap-1"
          >
            <FaEdit className="text-xs" />
            Edit
          </button>
          <button
            onClick={() => onDelete(property)}
            className="bg-red-50 text-red-600 py-2 px-3 rounded-lg text-xs font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-1"
          >
            <FaTrash className="text-xs" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentPropertyCard;
