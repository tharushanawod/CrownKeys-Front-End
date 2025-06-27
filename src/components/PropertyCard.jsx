import React from "react";
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const PropertyCard = ({
  property,
  statusColors,
  onActionClick,
  showActions = true,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 border border-[#a8aeaf] flex flex-col">
      {/* Property Image */}
      <div className="relative h-48">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-semibold ${
            statusColors[property.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {property.status}
        </span>
      </div>

      {/* Property Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#091a2b] mb-1 line-clamp-1">
            {property.title}
          </h2>
          <p className="flex items-center gap-2 text-[#3b4876] text-sm mb-2 line-clamp-1">
            <FaMapMarkerAlt className="text-[#005163]" />
            <span>{property.address}</span>
          </p>
          <div className="flex gap-4 text-[#3b4876] text-sm mb-2">
            <span className="flex items-center gap-1">
              <FaRupeeSign className="text-[#005163]" />
              {property.price}
            </span>
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
            <span>{property.area}</span>
          </div>
        </div>
        {showActions && (
          <div className="flex justify-end mt-2">
            <button
              className="text-[#a8aeaf] hover:text-[#005163] p-1 rounded transition-colors text-xl"
              onClick={() => onActionClick && onActionClick(property)}
            >
              ...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
