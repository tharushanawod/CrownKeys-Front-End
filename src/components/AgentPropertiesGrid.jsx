import React from "react";
import AgentPropertyCard from "./AgentPropertyCard";

const AgentPropertiesGrid = ({
  properties,
  currentPage,
  totalPages,
  onPageChange,
  propertiesPerPage,
  onEdit,
  onDelete,
  onViewDetails,
  onViewAnalytics,
}) => {
  const handleEdit = (property) => {
    console.log("Edit property:", property);
    if (onEdit) onEdit(property);
  };

  const handleDelete = (property) => {
    console.log("Delete property:", property);
    if (onDelete) onDelete(property);
  };

  const handleViewDetails = (property) => {
    console.log("View details:", property);
    if (onViewDetails) onViewDetails(property);
  };

  const handleViewAnalytics = (property) => {
    console.log("View analytics:", property);
    if (onViewAnalytics) onViewAnalytics(property);
  };

  const renderPaginationButton = (page, label = page) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        currentPage === page
          ? "bg-[#0284c7] text-white"
          : "bg-white text-[#64748b] hover:bg-[#f1f3f4]"
      }`}
    >
      {label}
    </button>
  );

  const renderPagination = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(renderPaginationButton(i));
      }
    } else {
      buttons.push(renderPaginationButton(1));

      if (currentPage > 3) {
        buttons.push(
          <span key="dots1" className="px-2 text-[#64748b]">
            ...
          </span>
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(renderPaginationButton(i));
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="dots2" className="px-2 text-[#64748b]">
            ...
          </span>
        );
      }

      if (totalPages > 1) {
        buttons.push(renderPaginationButton(totalPages));
      }
    }

    return buttons;
  };

  return (
    <div className="space-y-6">
      {/* Properties Grid */}
      {properties.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl text-[#e0f2fe] mb-4">🏠</div>
          <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
            No properties found
          </h3>
          <p className="text-[#64748b]">
            Try adjusting your filters or search criteria.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#64748b] hover:bg-[#f1f3f4]"
                }`}
              >
                Previous
              </button>

              {renderPagination()}

              <button
                onClick={() =>
                  onPageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#64748b] hover:bg-[#f1f3f4]"
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* Results Summary */}
          <div className="text-center text-sm text-[#64748b]">
            Showing {(currentPage - 1) * propertiesPerPage + 1} to{" "}
            {Math.min(
              currentPage * propertiesPerPage,
              properties.length + (currentPage - 1) * propertiesPerPage
            )}{" "}
            of {properties.length + (currentPage - 1) * propertiesPerPage}{" "}
            properties
          </div>
        </>
      )}
    </div>
  );
};

export default AgentPropertiesGrid;
