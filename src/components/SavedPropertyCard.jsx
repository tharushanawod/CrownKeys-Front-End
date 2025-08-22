import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegHeart,
  FaHeart,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

const SavedPropertyCard = ({
  property,
  viewMode = "grid",
  onToggleSave,
  onViewDetails,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(property);
    } else {
      // Navigate to property details page
      navigate(`/properties/${property.id}`);
    }
  };

  console.log("Property Image:", property.img);
  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      {/* Property Image */}
      <div className={`relative ${viewMode === "list" ? "w-80" : ""}`}>
        <img
          src={property.img}
          alt="Property"
          className={`w-full object-cover ${
            viewMode === "list" ? "h-full" : "h-48"
          }`}
        />
        <button
          onClick={() => onToggleSave(property.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {property.saved ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-[#64748b]" />
          )}
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#091a2b]">
            Rs {property.price}
          </h3>
        </div>

        <p className="text-[#64748b] text-sm mb-1">{property.type}</p>
        <p className="text-[#64748b] text-sm mb-3">{property.address}</p>

        {/* Property Features */}
        <div className="flex gap-4 text-[#64748b] text-sm mb-4">
          <span className="flex items-center gap-1">
            <FaBed /> {property.beds} beds
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {property.baths} baths
          </span>
          <span className="flex items-center gap-1">
            <FaRulerCombined /> {property.area}
          </span>
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-[#0284c7] text-white py-2 px-4 rounded-lg hover:bg-[#0369a1] transition-colors font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SavedPropertyCard;
