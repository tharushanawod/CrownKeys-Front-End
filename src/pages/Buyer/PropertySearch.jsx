import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaThLarge,
  FaList,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaDollarSign,
  FaBed,
  FaBath,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaHotel,
  FaCity,
} from "react-icons/fa";
import SavedPropertyCard from "../../components/SavedPropertyCard";
import { motion } from "framer-motion";

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

// Property categories data
const propertyCategories = [
  {
    id: 1,
    title: "Residential Homes",
    description:
      "Find your perfect family home with our extensive collection of houses and villas.",
    icon: <FaHome className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "250+ Properties",
    category: "house",
  },
  {
    id: 2,
    title: "Apartments",
    description:
      "Modern apartments in prime locations for urban living and investment.",
    icon: <FaBuilding className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "180+ Properties",
    category: "condo",
  },
  {
    id: 3,
    title: "Townhouses",
    description: "Spacious townhouses perfect for families and modern living.",
    icon: <FaBuilding className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    count: "120+ Properties",
    category: "townhouse",
  },
  {
    id: 4,
    title: "Luxury Villas",
    description:
      "Exclusive luxury villas with premium amenities and stunning views.",
    icon: <FaHotel className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "75+ Properties",
    category: "villa",
  },
  {
    id: 5,
    title: "Mansions",
    description: "Exceptional mansions with unparalleled luxury and space.",
    icon: <FaCity className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    count: "60+ Properties",
    category: "mansion",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PropertySearch = () => {
  const [properties, setProperties] = useState(propertyData);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

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

    // Filter by selected category from category page
    const matchesSelectedCategory =
      selectedCategory === "" || property.category === selectedCategory;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesPrice &&
      matchesBeds &&
      matchesBaths &&
      matchesType &&
      matchesSelectedCategory
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
    console.log("View details for:", property);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPropertyType(category); // Also set the propertyType filter
    setShowCategories(false); // Hide categories and show search results
    setCurrentPage(1); // Reset to first page
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setPriceRange({ min: "", max: "" });
    setBedrooms("");
    setBathrooms("");
    setPropertyType("");
    setSelectedCategory("");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const goBackToCategories = () => {
    setShowCategories(true);
    setSelectedCategory("");
    setPropertyType("");
    clearFilters();
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
    <div className="bg-[#f8fafc] p-4">
      <div className="max-w-7xl mx-auto">
        {showCategories ? (
          // Property Categories View
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Categories Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#091a2b] mb-4">
                Property Categories
              </h1>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Choose a property category to start your search and find your
                perfect home.
              </p>
            </motion.div>

            {/* Categories Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {propertyCategories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => handleCategorySelect(category.category)}
                >
                  <motion.div
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-[#0284c7] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {category.count}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0284c7] mr-4">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#091a2b]">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-[#64748b] mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-[#0284c7] font-medium">
                        View Properties
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          // Property Search Results View
          <>
            {/* Back to Categories Button */}
            <div className="mb-6">
              <button
                onClick={goBackToCategories}
                className="flex items-center gap-2 text-[#0284c7] hover:text-[#0369a1] font-medium transition-colors"
              >
                <FaChevronLeft />
                Back to Categories
              </button>
            </div>
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#091a2b] mb-2">
                Property Search
              </h1>
              <p className="text-[#64748b]">
                Find your perfect home from {totalProperties} available
                properties
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
                      {Math.min(endIndex, totalProperties)} of {totalProperties}
                      )
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
          </>
        )}
      </div>
    </div>
  );
};

export default PropertySearch;
