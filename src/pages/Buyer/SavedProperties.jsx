import React, { useState, useEffect } from "react";
import api from "../../api/api";
import {
  FaRegHeart,
  FaFilter,
  FaSort,
  FaThLarge,
  FaList,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import SavedPropertyCard from "../../components/SavedPropertyCard";

const SavedProperties = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("Recently Added");
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Fetch saved properties from API
  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/buyers/favorites");
        console.log("Fetched saved properties:", response.data.data.favorites);

        // Transform the API response to match the component's expected format
        const transformedProperties = response.data.data.favorites.map(
          (favorite) => {
            const property = favorite.properties;
            return {
              id: property.id,
              img:
                property.photos && property.photos.length > 0
                  ? `${property.photos[0]}`
                  : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
              price: property.price
                ? `$${property.price.toLocaleString()}`
                : "Price not available",
              type: property.property_type || "Property",
              address:
                property.address ||
                `${property.city || ""}, ${property.state || ""}`.trim() ||
                "Address not available",
              beds: property.bedrooms || 0,
              baths: property.bathrooms || 0,
              area: property.size
                ? `${property.size} sqft`
                : "Area not specified",
              saved: true, // All properties in favorites are saved
              favoriteId: favorite.id, // Store the favorite ID for deletion
            };
          }
        );

        setProperties(transformedProperties);
      } catch (err) {
        console.error("Error fetching saved properties:", err);
        setError("Failed to load saved properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProperties();
  }, []);

  // Calculate pagination
  const totalProperties = properties.length;
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  const toggleSave = async (id) => {
    try {
      // Find the property to get its favoriteId
      const propertyToRemove = properties.find((prop) => prop.id === id);
      if (!propertyToRemove || !propertyToRemove.favoriteId) {
        console.error("Property or favorite ID not found");
        return;
      }

      // Call API to remove from favorites using the favorite ID
      await api.delete(`/buyers/favorites/${propertyToRemove.favoriteId}`);

      // Update local state to remove the property
      setProperties(properties.filter((prop) => prop.id !== id));
    } catch (err) {
      console.error("Error removing property from favorites:", err);
      // You might want to show a toast notification here
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleScheduleTour = (property) => {
    // Handle view details functionality
    console.log("View details for:", property);
    // You can add navigation to tour scheduling page or open a modal
  };

  return (
    <div className="bg-[#f8fafc] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#091a2b] mb-2">
            Saved Properties
          </h1>
          <p className="text-[#64748b]">
            {loading ? (
              "Loading your saved properties..."
            ) : error ? (
              "Unable to load saved properties"
            ) : (
              <>
                You have {totalProperties} saved properties
                {totalPages > 1 && (
                  <span className="ml-2">
                    (Showing {startIndex + 1}-
                    {Math.min(endIndex, totalProperties)} of {totalProperties})
                  </span>
                )}
              </>
            )}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <FaSpinner className="text-4xl text-[#0284c7] animate-spin" />
            <span className="ml-3 text-[#64748b]">
              Loading saved properties...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <FaExclamationTriangle className="text-3xl text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Content - only show when not loading and no error */}
        {!loading && !error && (
          <>
            {/* Controls Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              {/* View Toggle and Sort */}
              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex items-center bg-[#f1f5f9] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-[#0284c7] shadow-sm"
                        : "text-[#64748b] hover:text-[#0284c7]"
                    }`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-[#0284c7] shadow-sm"
                        : "text-[#64748b] hover:text-[#0284c7]"
                    }`}
                  >
                    <FaList />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-[#64748b] text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                  >
                    <option>Recently Added</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Bedrooms</option>
                    <option>Square Footage</option>
                  </select>
                </div>
              </div>

              {/* Filters Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors"
              >
                <FaFilter />
                Filters
              </button>
            </div>

            {/* Properties Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {currentProperties.map((property) => (
                <SavedPropertyCard
                  key={property.id}
                  property={property}
                  viewMode={viewMode}
                  onToggleSave={toggleSave}
                  onScheduleTour={handleScheduleTour}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {/* Page Info */}
                  <div className="text-sm text-[#64748b]">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, totalProperties)} of {totalProperties}{" "}
                    properties
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                        currentPage === 1
                          ? "text-[#cbd5e1] cursor-not-allowed"
                          : "text-[#64748b] hover:text-[#0284c7] hover:bg-[#e0f2fe]"
                      }`}
                    >
                      <FaChevronLeft />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        const isActive = page === currentPage;

                        // Show first page, last page, current page, and pages around current
                        const shouldShow =
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1);

                        if (!shouldShow) {
                          // Show ellipsis for gaps
                          if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return (
                              <span key={page} className="px-2 text-[#64748b]">
                                ...
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                              isActive
                                ? "bg-[#0284c7] text-white"
                                : "text-[#64748b] hover:text-[#0284c7] hover:bg-[#e0f2fe]"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                        currentPage === totalPages
                          ? "text-[#cbd5e1] cursor-not-allowed"
                          : "text-[#64748b] hover:text-[#0284c7] hover:bg-[#e0f2fe]"
                      }`}
                    >
                      Next
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State (if no properties) */}
            {!loading && !error && properties.length === 0 && (
              <div className="text-center py-12">
                <FaRegHeart className="text-6xl text-[#cbd5e1] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  No saved properties yet
                </h3>
                <p className="text-[#64748b] mb-6">
                  Start browsing properties and save the ones you like!
                </p>
                <button className="bg-[#3b82f6] text-white px-6 py-3 rounded-lg hover:bg-[#2563eb] transition-colors">
                  Browse Properties
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SavedProperties;
