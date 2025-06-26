import React, { useState } from "react";
import SidebarOwner from "../../components/SidebarOwner";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const sampleProperties = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    address: "123 Main Street, New York, NY 10001",
    price: "$2,500/month",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Beach House",
    address: "456 Ocean Drive, Miami, FL 33101",
    price: "$3,200/month",
    beds: 4,
    baths: 3,
    area: "2,200 sqft",
    status: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Suburban Family Home",
    address: "789 Park Avenue, Chicago, IL 60601",
    price: "$1,800/month",
    beds: 4,
    baths: 2,
    area: "2,000 sqft",
    status: "Vacant",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Urban Loft Space",
    address: "321 City Center, Boston, MA 02108",
    price: "$2,800/month",
    beds: 2,
    baths: 2,
    area: "1,500 sqft",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Mountain View Villa",
    address: "567 Highland Road, Denver, CO 80202",
    price: "$4,500/month",
    beds: 5,
    baths: 4,
    area: "3,500 sqft",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Historic Brownstone",
    address: "890 Heritage Lane, Boston, MA 02115",
    price: "$3,800/month",
    beds: 3,
    baths: 3,
    area: "2,000 sqft",
    status: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Maintenance: "bg-yellow-100 text-yellow-700",
  Vacant: "bg-red-100 text-red-700",
};

const filterOptions = ["All", "Active", "Maintenance", "Vacant"];

const OwnerProperties = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const filteredProperties = sampleProperties.filter((prop) => {
    const matchesFilter = filter === "All" || prop.status === filter;
    const matchesSearch =
      prop.title.toLowerCase().includes(search.toLowerCase()) ||
      prop.address.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f1f3f4] flex">
      <SidebarOwner />
      <div className="flex-1 flex flex-col min-w-0 sm:ml-64">
        {/* Topbar */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-10 gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#091a2b]">
            My Properties
          </h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
            <div className="flex gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 border border-[#a8aeaf] focus:outline-none ${
                    filter === opt
                      ? "bg-[#005163] text-white border-[#005163]"
                      : "bg-white text-[#3b4876] hover:bg-[#f1f3f4]"
                  }`}
                  onClick={() => setFilter(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex items-center bg-[#f1f3f4] rounded-lg px-2">
              <FaSearch className="text-[#a8aeaf] mr-2" />
              <input
                type="text"
                placeholder="Search properties..."
                className="bg-transparent outline-none py-2 text-[#091a2b] w-40 md:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select className="px-4 py-2 rounded-lg border border-[#a8aeaf] text-[#3b4876] bg-white font-semibold">
              <option>Sort by: Latest Added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Status</option>
            </select>
          </div>
        </header>
        {/* Properties Grid */}
        <main className="flex-1 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 border border-[#a8aeaf] flex flex-col"
              >
                {/* Property Image */}
                <div className="relative h-48">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-semibold ${
                      statusColors[prop.status]
                    }`}
                  >
                    {prop.status}
                  </span>
                </div>
                {/* Property Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-[#091a2b] mb-1 line-clamp-1">
                      {prop.title}
                    </h2>
                    <p className="flex items-center gap-2 text-[#3b4876] text-sm mb-2 line-clamp-1">
                      <FaMapMarkerAlt className="text-[#005163]" />
                      <span>{prop.address}</span>
                    </p>
                    <div className="flex gap-4 text-[#3b4876] text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <FaRupeeSign className="text-[#005163]" />
                        {prop.price}
                      </span>
                      <span>{prop.beds} beds</span>
                      <span>{prop.baths} baths</span>
                      <span>{prop.area}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="text-[#a8aeaf] hover:text-[#005163] p-1 rounded transition-colors text-xl">
                      ...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="text-center text-[#a8aeaf] mt-16 text-lg">
              No properties found.
            </div>
          )}

          {/* Pagination */}
          {filteredProperties.length > 0 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
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
                  onClick={() => handlePageChange(index + 1)}
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
                onClick={() => handlePageChange(currentPage + 1)}
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
        </main>
      </div>
    </div>
  );
};

export default OwnerProperties;
