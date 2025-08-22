import React, { useState, useEffect, useRef, useCallback } from "react";
import api from "../../api/api";
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
  FaIndustry,
  FaStore,
  FaLandmark,
  FaSpinner,
  FaExclamationTriangle,
} from "react-icons/fa";
import SavedPropertyCard from "../../components/SavedPropertyCard";
import { motion } from "framer-motion";

// Property categories data
const propertyCategories = [
  {
    id: 1,
    title: "Residential Homes",
    description:
      "Find your perfect family home with our extensive collection of houses and residential properties.",
    icon: <FaHome className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "250+ Properties",
    category: "residential-homes",
  },
  {
    id: 2,
    title: "Apartments",
    description:
      "Modern apartments in prime locations for urban living and investment opportunities.",
    icon: <FaBuilding className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "180+ Properties",
    category: "apartments",
  },
  {
    id: 3,
    title: "Lands",
    description:
      "Premium land plots for development, investment, and custom construction projects.",
    icon: <FaLandmark className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "90+ Properties",
    category: "lands",
  },
  {
    id: 4,
    title: "Commercial Spaces",
    description:
      "Office buildings, retail spaces, and commercial properties for business ventures.",
    icon: <FaStore className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "120+ Properties",
    category: "commercial-spaces",
  },
  {
    id: 5,
    title: "Luxury Villas",
    description:
      "Exclusive luxury villas with premium amenities, stunning views, and exceptional design.",
    icon: <FaHotel className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "75+ Properties",
    category: "luxury-villas",
  },
  {
    id: 6,
    title: "Industrial Properties",
    description:
      "Warehouses, factories, and industrial facilities for manufacturing and logistics.",
    icon: <FaIndustry className="text-4xl" />,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: "45+ Properties",
    category: "industrial-properties",
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
  // API and loading states
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination states (server-side)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const propertiesPerPage = 12; // Match backend limit

  // UI states
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
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  // Debounce timer for search
  const searchTimer = useRef(null);
  const abortControllerRef = useRef(null);

  // Fetch properties from API
  const fetchProperties = useCallback(
    async (resetPage = false) => {
      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const params = {
          page: resetPage ? 1 : currentPage,
          limit: propertiesPerPage,
        };

        // Add search parameters
        if (searchQuery.trim()) params.search = searchQuery.trim();
        if (locationQuery.trim()) {
          // You can split this to city/state or use one field
          params.city = locationQuery.trim();
        }
        if (priceRange.min) params.price_min = priceRange.min;
        if (priceRange.max) params.price_max = priceRange.max;
        if (bedrooms) params.bedrooms = bedrooms;
        if (bathrooms) params.bathrooms = bathrooms;
        if (propertyType || selectedCategory) {
          // Map frontend categories to backend property_type values
          const categoryMap = {
            "residential-homes": "House",
            apartments: "Apartment",
            lands: "Land",
            "commercial-spaces": "Commercial",
            "luxury-villas": "Villa",
            "industrial-properties": "Industrial",
          };
          params.property_type =
            categoryMap[propertyType || selectedCategory] ||
            propertyType ||
            selectedCategory;
        }
        if (sortBy) params.sortBy = sortBy;
        if (sortOrder) params.sortOrder = sortOrder;

        const response = await api.get("/properties/search", {
          params,
          signal: controller.signal,
        });

        console.log("API Response:", response.data.data);

        if (response.data.success) {
          const { properties: fetchedProperties, pagination } =
            response.data.data;

          // Transform properties to match frontend format
          const transformedProperties = fetchedProperties.map((property) => ({
            id: property.id,
            img:
              property.photos && property.photos.length > 0
                ? `${property.photos[0]}`
                : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            price: property.price
              ? `${property.price.toLocaleString()}`
              : "Price not available",
            type: property.property_type || "Property",
            address:
              `${property.address || ""}, ${property.city || ""}, ${
                property.state || ""
              }`.replace(/^,\s*|,\s*$/g, "") || "Address not available",
            beds: property.bedrooms || 0,
            baths: property.bathrooms || 0,
            area: property.size
              ? `${property.size} sqft`
              : "Area not specified",
            saved: false, // You can check if it's in user's favorites
            category:
              property.property_type?.toLowerCase().replace(/\s+/g, "-") || "",
            originalData: property, // Keep original data for reference
          }));

          setProperties(transformedProperties);
          setTotalProperties(pagination.total);
          setTotalPages(pagination.totalPages);
          console.log("API Response:", response.data.data);

          if (resetPage) {
            setCurrentPage(1);
          }
        }
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Error fetching properties:", err);
          setError("Failed to load properties. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
    [
      currentPage,
      propertiesPerPage,
      searchQuery,
      locationQuery,
      priceRange,
      bedrooms,
      bathrooms,
      propertyType,
      selectedCategory,
      sortBy,
      sortOrder,
    ]
  );

  // Debounced search effect
  useEffect(() => {
    if (searchTimer.current) {
      clearTimeout(searchTimer.current);
    }

    searchTimer.current = setTimeout(() => {
      if (!showCategories) {
        // Only fetch if we're in search view
        fetchProperties(true); // Reset to page 1 for new search
      }
    }, 500); // 500ms debounce

    return () => {
      if (searchTimer.current) {
        clearTimeout(searchTimer.current);
      }
    };
  }, [
    searchQuery,
    locationQuery,
    priceRange,
    bedrooms,
    bathrooms,
    propertyType,
    selectedCategory,
    sortBy,
    sortOrder,
    showCategories,
    fetchProperties,
  ]);

  // Fetch when page changes (no debounce)
  useEffect(() => {
    if (!showCategories && currentPage > 1) {
      fetchProperties(false);
    }
  }, [currentPage, showCategories, fetchProperties]);

  // Handle category selection from categories page
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPropertyType(category);
    setShowCategories(false);
    setCurrentPage(1);
    // fetchProperties will be called by useEffect
  };

  // Handle save/unsave property
  const toggleSave = async (id) => {
    try {
      // Find the property to update optimistically
      const property = properties.find((p) => p.id === id);
      if (!property) return;

      // Update UI optimistically
      setProperties((prev) =>
        prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
      );

      // Make API call (you'll need to implement these endpoints)
      if (property.saved) {
        await api.delete(`/buyers/favorites/${id}`);
      } else {
        await api.post("/buyers/favorites", { propertyId: id });
      }
    } catch (err) {
      // Revert optimistic update on error
      setProperties((prev) =>
        prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
      );
      console.error("Error toggling save:", err);
    }
  };

  const handleScheduleTour = (property) => {
    console.log("Schedule tour for:", property);
    // You can navigate to tour scheduling page or open modal
  };

  const clearFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setPriceRange({ min: "", max: "" });
    setBedrooms("");
    setBathrooms("");
    setPropertyType("");
    setSelectedCategory("");
    setSortBy("created_at");
    setSortOrder("desc");
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

  // Handle sort change
  const handleSortChange = (value) => {
    const [field, order] = value.split("-");
    setSortBy(field);
    setSortOrder(order || "desc");
    setCurrentPage(1);
  };

  // Calculate pagination info
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

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
                    <option value="residential-homes">Residential Homes</option>
                    <option value="apartments">Apartments</option>
                    <option value="lands">Lands</option>
                    <option value="commercial-spaces">Commercial Spaces</option>
                    <option value="luxury-villas">Luxury Villas</option>
                    <option value="industrial-properties">
                      Industrial Properties
                    </option>
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
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                  >
                    <option value="created_at-desc">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="bedrooms-desc">Most Bedrooms</option>
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
            {loading ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
                    : "space-y-4 mb-6"
                }
              >
                {Array.from({ length: propertiesPerPage }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
                  >
                    <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center mb-6">
                <FaExclamationTriangle className="text-6xl text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  Error Loading Properties
                </h3>
                <p className="text-[#64748b] mb-6">{error}</p>
                <button
                  onClick={() => fetchProperties(true)}
                  className="bg-[#0284c7] text-white px-6 py-3 rounded-lg hover:bg-[#0369a1] transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : properties.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
                    : "space-y-4 mb-6"
                }
              >
                {properties.map((property) => (
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
                  onClick={() => {
                    clearFilters();
                    fetchProperties(true);
                  }}
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
