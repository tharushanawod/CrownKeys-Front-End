import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaBed,
  FaBath,
  FaRuler,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../Components/Header";

// House categories
const houseCategories = [
  "All Houses",
  "Apartment",
  "Villa",
  "Bungalow",
  "Townhouse",
  "Luxury House",
  "Beach House",
  "Mountain View House",
  "Modern House",
  "Traditional House",
  "Garden House",
];

// Sample data (replace with actual API data)
const sampleHouses = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Bentota, Western Province",
    price: 85000000,
    type: "Beach House",
    bedrooms: 4,
    bathrooms: 3,
    area: 4500, // in sq ft
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Beach Access", "Swimming Pool", "Garden", "Security"],
  },
  {
    id: 2,
    title: "Modern Apartment in Colombo",
    location: "Colombo 03, Western Province",
    price: 45000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Parking", "Gym", "24/7 Security", "Lift"],
  },
  {
    id: 3,
    title: "Mountain View Bungalow",
    location: "Nuwara Eliya, Central Province",
    price: 65000000,
    type: "Mountain View House",
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mountain View", "Fireplace", "Garden", "Staff Quarters"],
  },
  {
    id: 4,
    title: "Contemporary Villa",
    location: "Dehiwala, Western Province",
    price: 75000000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Swimming Pool", "Smart Home", "Garden", "Parking"],
  },
  {
    id: 5,
    title: "Luxury Townhouse",
    location: "Kotte, Western Province",
    price: 55000000,
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Parking", "Garden", "Security", "Community Pool"],
  },
  {
    id: 6,
    title: "Traditional Garden House",
    location: "Galle, Southern Province",
    price: 48000000,
    type: "Garden House",
    bedrooms: 3,
    bathrooms: 2,
    area: 2800,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Large Garden", "Traditional Design", "Outdoor Kitchen"],
  },
  {
    id: 7,
    title: "Modern Luxury Apartment",
    location: "Colombo 05, Western Province",
    price: 68000000,
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["City View", "Gym", "Rooftop Pool", "Smart Home"],
  },
  {
    id: 8,
    title: "Seaside Villa",
    location: "Mount Lavinia, Western Province",
    price: 72000000,
    type: "Beach House",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Beach Access", "Swimming Pool", "Garden", "Security"],
  },
  {
    id: 9,
    title: "Traditional Bungalow",
    location: "Kandy, Central Province",
    price: 58000000,
    type: "Traditional House",
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Historical Design", "Garden", "Staff Quarters"],
  },
  {
    id: 10,
    title: "Modern Garden Villa",
    location: "Battaramulla, Western Province",
    price: 62000000,
    type: "Garden House",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Modern Design", "Large Garden", "Smart Home"],
  },
  {
    id: 11,
    title: "Luxury Penthouse",
    location: "Colombo 02, Western Province",
    price: 95000000,
    type: "Luxury House",
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["City View", "Private Pool", "Smart Home", "Security"],
  },
  {
    id: 12,
    title: "Mountain Retreat",
    location: "Bandarawela, Uva Province",
    price: 52000000,
    type: "Mountain View House",
    bedrooms: 3,
    bathrooms: 2,
    area: 2500,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Mountain View", "Garden", "Fireplace", "Staff Quarters"],
  },
];

const ITEMS_PER_PAGE = 9;

const Houses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Houses");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [filteredHouses, setFilteredHouses] = useState(sampleHouses);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const filtered = sampleHouses.filter((house) => {
      const matchesSearch =
        house.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        house.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType =
        selectedType === "All Houses" || house.type === selectedType;
      const matchesPrice =
        (!priceRange.min || house.price >= Number(priceRange.min)) &&
        (!priceRange.max || house.price <= Number(priceRange.max));

      return matchesSearch && matchesType && matchesPrice;
    });

    setFilteredHouses(filtered);
  }, [searchQuery, selectedType, priceRange]);

  const totalPages = Math.ceil(filteredHouses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentHouses = filteredHouses.slice(startIndex, endIndex);

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
              ? "bg-[#005163] text-white"
              : "bg-white text-[#3b4876] hover:bg-[#f1f3f4]"
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
              ? "bg-[#f1f3f4] text-[#a8aeaf] cursor-not-allowed"
              : "bg-white text-[#3b4876] hover:bg-[#f1f3f4]"
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
              ? "bg-[#f1f3f4] text-[#a8aeaf] cursor-not-allowed"
              : "bg-white text-[#3b4876] hover:bg-[#f1f3f4]"
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
          <h1 className="text-4xl font-bold text-[#091a2b] text-center mb-4">
            Find Your Dream Home
          </h1>
        </div>

        {/* Search and Filter Container */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a8aeaf]" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-[#005163] text-white rounded-lg font-semibold hover:bg-[#091a2b] transition-colors duration-300"
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* House Type Filter */}
            <div>
              <label className="flex items-center gap-2 text-[#091a2b] font-semibold mb-2">
                <FaFilter className="text-[#005163]" /> House Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] bg-white text-[#3b4876]"
              >
                {houseCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="flex items-center gap-2 text-[#091a2b] font-semibold mb-2">
                <FaRupeeSign className="text-[#005163]" /> Price Range
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
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                />
                <span className="text-[#a8aeaf]">to</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={priceRange.max}
                  onChange={(e) => {
                    setPriceRange((prev) => ({ ...prev, max: e.target.value }));
                    setCurrentPage(1);
                  }}
                  className="w-full p-3 border border-[#a8aeaf] rounded-lg focus:outline-none focus:border-[#005163] text-[#3b4876]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-[#3b4876]">
          Found {filteredHouses.length} properties
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentHouses.map((house) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white h-full flex flex-col  rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              {/* House Image */}
              <div className="relative h-48">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#005163] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {house.type}
                </span>
              </div>

              {/* House Details */}
              <div className="p-6 flex flex-col  flex-grow">
                <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
                  {house.title}
                </h3>
                <p className="flex items-center gap-2 text-[#3b4876] mb-4">
                  <FaMapMarkerAlt className="text-[#005163]" />
                  {house.location}
                </p>
                <div className="flex items-center gap-4 mb-4 text-[#3b4876]">
                  <div className="flex items-center gap-1">
                    <FaBed className="text-[#005163]" />
                    <span>{house.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBath className="text-[#005163]" />
                    <span>{house.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRuler className="text-[#005163]" />
                    <span>{house.area} sq ft</span>
                  </div>
                </div>
                <div className="text-[#005163] text-2xl font-semibold mb-4">
                  Rs. {house.price.toLocaleString()}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {house.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-[#f1f3f4] text-[#3b4876] px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() =>
                    (window.location.href = `/properties/houses/${house.id}`)
                  }
                  className="mt-auto w-full bg-[#005163] text-white py-3 rounded-lg font-semibold hover:bg-[#091a2b] transition-colors duration-300 "
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredHouses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#3b4876] text-lg">
              No houses found matching your criteria. Try adjusting your
              filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredHouses.length > 0 && renderPagination()}
      </div>
    </>
  );
};

export default Houses;
