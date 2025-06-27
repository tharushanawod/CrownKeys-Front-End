import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropertyCard from "./PropertyCard";

const PropertiesGrid = ({
  properties,
  statusColors,
  currentPage,
  totalPages,
  onPageChange,
  onPropertyAction,
  showActions = true,
  propertiesPerPage = 6,
}) => {
  return (
    <>
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            statusColors={statusColors}
            onActionClick={onPropertyAction}
            showActions={showActions}
          />
        ))}
      </div>

      {/* No Properties Found */}
      {properties.length === 0 && (
        <div className="text-center text-[#a8aeaf] mt-16 text-lg">
          No properties found.
        </div>
      )}

      {/* Pagination */}
      {properties.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-[#005163] border-[#005163] hover:bg-[#005163] hover:text-white"
            } transition-colors`}
          >
            <FaChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`w-10 h-10 rounded-lg border ${
                currentPage === index + 1
                  ? "bg-[#005163] text-white border-[#005163]"
                  : "text-[#3b4876] border-[#a8aeaf] hover:bg-[#f1f3f4]"
              } transition-colors`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-[#005163] border-[#005163] hover:bg-[#005163] hover:text-white"
            } transition-colors`}
          >
            <FaChevronRight />
          </button>

          <span className="ml-4 text-[#3b4876]">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
    </>
  );
};

export default PropertiesGrid;
