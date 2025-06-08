import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../Components/Header";

// Land categories
const landCategories = [
  "All Lands",
  "Bare Land",
  "Beachfront Land",
  "Cultivated / Agriculture",
  "Land with House",
  "Tea Estate Land",
  "Rubber Estate Land",
  "Coconut Estate Land",
  "Paddy (Rice) Land",
  "Cinnamon Estate Land",
  "Waterfront Land",
];

// Sample data (replace with actual API data)
const sampleLands = [
  {
    id: 1,
    title: "Beautiful Beachfront Property",
    location: "Galle, Southern Province",
    price: 2500000,
    type: "Beachfront Land",
    size: 20, // in perches
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Beach Access", "Clear Title", "Road Access"],
  },
  {
    id: 2,
    title: "Tea Estate with Mountain View",
    location: "Nuwara Eliya, Central Province",
    price: 3500000,
    type: "Tea Estate Land",
    size: 50,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mountain View", "Water Source", "Electricity"],
  },
  {
    id: 3,
    title: "Agricultural Land for Sale",
    location: "Kurunegala, North Western Province",
    price: 1500000,
    type: "Cultivated / Agriculture",
    size: 30,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Fertile Soil", "Irrigation", "Road Access"],
  },
  {
    id: 4,
    title: "Premium Coconut Estate",
    location: "Matara, Southern Province",
    price: 4200000,
    type: "Coconut Estate Land",
    size: 75,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mature Trees", "Water Source", "Clear Title"],
  },
  {
    id: 5,
    title: "Riverside Paddy Land",
    location: "Polonnaruwa, North Central Province",
    price: 1800000,
    type: "Paddy (Rice) Land",
    size: 40,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["River Access", "Irrigation", "Fertile Soil"],
  },
  {
    id: 6,
    title: "Luxury Waterfront Property",
    location: "Bentota, Western Province",
    price: 5500000,
    type: "Waterfront Land",
    size: 25,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["River Front", "Boat Access", "Clear Title"],
  },
  {
    id: 7,
    title: "Cinnamon Estate with House",
    location: "Ratnapura, Sabaragamuwa Province",
    price: 4800000,
    type: "Cinnamon Estate Land",
    size: 60,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mature Trees", "Residence", "Electricity"],
  },
  {
    id: 8,
    title: "Rubber Estate Investment",
    location: "Kegalle, Sabaragamuwa Province",
    price: 3200000,
    type: "Rubber Estate Land",
    size: 45,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mature Trees", "Processing Unit", "Road Access"],
  },
  {
    id: 9,
    title: "Bare Land with Development Potential",
    location: "Colombo, Western Province",
    price: 4500000,
    type: "Bare Land",
    size: 15,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["City Access", "Clear Title", "Development Ready"],
  },
  {
    id: 10,
    title: "Land with Modern House",
    location: "Kandy, Central Province",
    price: 3800000,
    type: "Land with House",
    size: 35,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Modern House", "Garden", "Security"],
  },
  {
    id: 11,
    title: "Tea Estate with Factory",
    location: "Badulla, Uva Province",
    price: 6500000,
    type: "Tea Estate Land",
    size: 100,
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Processing Factory", "Workers Quarters", "Mountain View"],
  },
  {
    id: 12,
    title: "Beachfront Development Land",
    location: "Trincomalee, Eastern Province",
    price: 5200000,
    type: "Beachfront Land",
    size: 30,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Beach Access", "Tourism Potential", "Clear Title"],
  },
];

const ITEMS_PER_PAGE = 6;

const Lands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Lands");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [filteredLands, setFilteredLands] = useState(sampleLands);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const filtered = sampleLands.filter((land) => {
      const matchesSearch =
        land.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        land.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType =
        selectedType === "All Lands" || land.type === selectedType;
      const matchesPrice =
        (!priceRange.min || land.price >= Number(priceRange.min)) &&
        (!priceRange.max || land.price <= Number(priceRange.max));

      return matchesSearch && matchesType && matchesPrice;
    });

    setFilteredLands(filtered);
  }, [searchQuery, selectedType, priceRange]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredLands.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLands = filteredLands.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaChevronLeft />
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Find Your Perfect Land
          </h1>
        </div>

        {/* Search and Filter Container */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Land Type Filter */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaFilter /> Land Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-gray-700"
              >
                {landCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <FaRupeeSign /> Price Range (per perch)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={priceRange.min}
                  onChange={(e) => {
                    setPriceRange((prev) => ({ ...prev, min: e.target.value }));
                    setCurrentPage(1);
                  }}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={priceRange.max}
                  onChange={(e) => {
                    setPriceRange((prev) => ({ ...prev, max: e.target.value }));
                    setCurrentPage(1);
                  }}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Found {filteredLands.length} properties
        </div>

        {/* Lands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentLands.map((land) => (
            <motion.div
              key={land.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* Land Image */}
              <div className="relative h-48">
                <img
                  src={land.image}
                  alt={land.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {land.type}
                </span>
              </div>

              {/* Land Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {land.title}
                </h3>
                <p className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-gray-400" />
                  {land.location}
                </p>
                <div className="text-green-600 text-2xl font-semibold mb-4">
                  Rs. {land.price.toLocaleString()} / perch
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {land.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredLands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No lands found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredLands.length > 0 && renderPagination()}
      </div>
    </>
  );
};

export default Lands;
