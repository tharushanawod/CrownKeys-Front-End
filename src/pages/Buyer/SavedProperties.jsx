import React, { useState } from "react";
import {
  FaRegHeart,
  FaFilter,
  FaSort,
  FaThLarge,
  FaList,
  FaBell,
  FaUserCircle,
  FaUser,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SidebarBuyer from "../../components/SidebarBuyer";
import SavedPropertyCard from "../../components/SavedPropertyCard";

const savedPropertiesData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    price: "$850,000",
    type: "Single Family Home",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    beds: 4,
    baths: 3,
    area: "2,450 sqft",
    saved: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    price: "$1,250,000",
    type: "Beach House",
    address: "456 Ocean View Dr, Malibu, CA 90265",
    beds: 5,
    baths: 4,
    area: "3,200 sqft",
    saved: true,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    price: "$725,000",
    type: "Modern Condo",
    address: "789 Mountain View Rd, Santa Monica, CA 90401",
    beds: 3,
    baths: 2,
    area: "1,850 sqft",
    saved: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    price: "$975,000",
    type: "Townhouse",
    address: "321 Park Avenue, Los Angeles, CA 90028",
    beds: 4,
    baths: 3,
    area: "2,800 sqft",
    saved: true,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    price: "$1,450,000",
    type: "Modern Villa",
    address: "567 Sunset Blvd, West Hollywood, CA 90069",
    beds: 5,
    baths: 4,
    area: "3,500 sqft",
    saved: true,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    price: "$680,000",
    type: "Contemporary Home",
    address: "890 Highland Ave, Hollywood, CA 90028",
    beds: 3,
    baths: 2,
    area: "1,750 sqft",
    saved: true,
  },
];

const SavedProperties = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("Recently Added");
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState(savedPropertiesData);
  const [profileOpen, setProfileOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Calculate pagination
  const totalProperties = properties.length;
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);

  const toggleSave = (id) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...prop, saved: !prop.saved } : prop
      )
    );
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
    // Handle schedule tour functionality
    console.log("Schedule tour for:", property);
    // You can add navigation to tour scheduling page or open a modal
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] sm:p-4 lg:ml-64">
      {/* Sidebar */}
      <SidebarBuyer />

      {/* Top Bar */}
      <div className="flex justify-end items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
        <button className="relative p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none mr-4">
          <FaBell className="text-2xl text-[#0284c7]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 rounded-full hover:bg-[#e0f2fe] focus:outline-none"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setTimeout(() => setProfileOpen(false), 200)}
            onClick={() => setProfileOpen((open) => !open)}
          >
            <FaUserCircle className="text-3xl text-[#0284c7]" />
            <span className="text-[#091a2b] font-medium">John Doe</span>
          </button>
          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <button className="w-full flex items-center gap-2 px-4 py-2 text-[#091a2b] hover:bg-[#f1f3f4]">
                <FaUser className="text-lg" /> Profile
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-[#a8aeaf] hover:text-red-600 hover:bg-[#f1f3f4]">
                <FaSignOutAlt className="text-lg" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#091a2b] mb-2">
            Saved Properties
          </h1>
          <p className="text-[#64748b]">
            You have {totalProperties} saved properties
            {totalPages > 1 && (
              <span className="ml-2">
                (Showing {startIndex + 1}-{Math.min(endIndex, totalProperties)}{" "}
                of {totalProperties})
              </span>
            )}
          </p>
        </div>

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
        {properties.length === 0 && (
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
      </div>
    </div>
  );
};

export default SavedProperties;
