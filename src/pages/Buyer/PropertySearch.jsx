import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaThLarge,
  FaList,
  FaBell,
  FaUserCircle,
  FaUser,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaDollarSign,
  FaBed,
  FaBath,
  FaHome,
  FaBuilding,
  FaWarehouse,
} from "react-icons/fa";
import SidebarBuyer from "../../components/SidebarBuyer";
import SavedPropertyCard from "../../components/SavedPropertyCard";

const propertyData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    price: "$850,000",
    type: "Single Family Home",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    beds: 4,
    baths: 3,
    area: "2,450 sqft",
    saved: false,
    category: "house",
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
    category: "house",
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
    saved: false,
    category: "condo",
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
    category: "townhouse",
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
    saved: false,
    category: "villa",
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
    saved: false,
    category: "house",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    price: "$2,200,000",
    type: "Luxury Penthouse",
    address: "101 Downtown Plaza, Los Angeles, CA 90013",
    beds: 4,
    baths: 4,
    area: "4,200 sqft",
    saved: true,
    category: "condo",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    price: "$550,000",
    type: "Starter Home",
    address: "234 Maple Street, Pasadena, CA 91101",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    saved: false,
    category: "house",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    price: "$3,750,000",
    type: "Mansion",
    address: "456 Elite Drive, Bel Air, CA 90077",
    beds: 7,
    baths: 8,
    area: "8,500 sqft",
    saved: false,
    category: "mansion",
  },
];

const PropertySearch = () => {
  const [properties, setProperties] = useState(propertyData);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  // Filter and search logic
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      searchQuery === "" ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      locationQuery === "" ||
      property.address.toLowerCase().includes(locationQuery.toLowerCase());

    const propertyPrice = parseInt(property.price.replace(/[$,]/g, ""));
    const matchesPrice =
      (priceRange.min === "" || propertyPrice >= parseInt(priceRange.min)) &&
      (priceRange.max === "" || propertyPrice <= parseInt(priceRange.max));

    const matchesBeds = bedrooms === "" || property.beds >= parseInt(bedrooms);
    const matchesBaths =
      bathrooms === "" || property.baths >= parseInt(bathrooms);
    const matchesType =
      propertyType === "" || property.category === propertyType;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesPrice &&
      matchesBeds &&
      matchesBaths &&
      matchesType
    );
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[$,]/g, ""));
    const priceB = parseInt(b.price.replace(/[$,]/g, ""));

    switch (sortBy) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "beds":
        return b.beds - a.beds;
      case "newest":
      default:
        return 0;
    }
  });

  // Pagination calculations
  const totalProperties = sortedProperties.length;
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = sortedProperties.slice(startIndex, endIndex);

  const toggleSave = (id) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...prop, saved: !prop.saved } : prop
      )
    );
  };

  const handleScheduleTour = (property) => {
    console.log("Schedule tour for:", property);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setPriceRange({ min: "", max: "" });
    setBedrooms("");
    setBathrooms("");
    setPropertyType("");
    setSortBy("newest");
    setCurrentPage(1);
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
            Property Search
          </h1>
          <p className="text-[#64748b]">
            Find your perfect home from {totalProperties} available properties
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Property Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              />
            </div>

            {/* Location Search */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Location..."
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min Price"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="w-1/2 px-3 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="w-1/2 px-3 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              />
            </div>

            {/* Search Button */}
            <button className="bg-[#0284c7] text-white px-6 py-3 rounded-lg hover:bg-[#0369a1] transition-colors font-medium flex items-center justify-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-[#0284c7] hover:text-[#0369a1] font-medium"
          >
            <FaFilter />
            {showFilters ? "Hide" : "Show"} Advanced Filters
          </button>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t border-[#e2e8f0]">
              {/* Bedrooms */}
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="px-3 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              >
                <option value="">Any Bedrooms</option>
                <option value="1">1+ Bedroom</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>

              {/* Bathrooms */}
              <select
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="px-3 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              >
                <option value="">Any Bathrooms</option>
                <option value="1">1+ Bathroom</option>
                <option value="2">2+ Bathrooms</option>
                <option value="3">3+ Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>

              {/* Property Type */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="px-3 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              >
                <option value="">All Property Types</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
                <option value="mansion">Mansion</option>
              </select>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e2e8f0] rounded-lg text-[#64748b] hover:text-[#0284c7] hover:border-[#0284c7] transition-colors"
              >
                <FaTimes />
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#091a2b]">
              Search Results
            </h2>
            <p className="text-[#64748b] text-sm">
              {totalProperties} properties found
              {totalPages > 1 && (
                <span className="ml-2">
                  (Showing {startIndex + 1}-
                  {Math.min(endIndex, totalProperties)} of {totalProperties})
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[#64748b] text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="beds">Most Bedrooms</option>
              </select>
            </div>

            {/* View Toggle */}
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
          </div>
        </div>

        {/* Properties Grid/List */}
        {currentProperties.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
                : "space-y-4 mb-6"
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
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center mb-6">
            <FaSearch className="text-6xl text-[#cbd5e1] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
              No properties found
            </h3>
            <p className="text-[#64748b] mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#0284c7] text-white px-6 py-3 rounded-lg hover:bg-[#0369a1] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-[#64748b]">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, totalProperties)} of {totalProperties}{" "}
                properties
              </div>

              <div className="flex items-center gap-2">
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

                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;

                    const shouldShow =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);

                    if (!shouldShow) {
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
      </div>
    </div>
  );
};

export default PropertySearch;
