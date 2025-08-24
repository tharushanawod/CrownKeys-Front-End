import React, { useState, useEffect } from "react";
import SidebarOwner from "../../components/SidebarOwner";
import PropertiesLayout from "../../components/PropertiesLayout";
import PropertiesFilter from "../../components/PropertiesFilter";
import AgentPropertiesGrid from "../../components/AgentPropertiesGrid";
import api from "../../api/api";

const statusColors = {
  Rented: "bg-green-100 text-green-700",
  Available: "bg-blue-100 text-blue-700",
  Maintenance: "bg-yellow-100 text-yellow-700",
};

const filterOptions = ["All", "Rented", "Available", "Maintenance"];

const sortOptions = [
  { value: "latest", label: "Sort by: Latest Added" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "status", label: "Status" },
  { value: "rent", label: "Monthly Rent: High to Low" },
];

const OwnerProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState("latest");
  const propertiesPerPage = 8; // Increased for better grid layout

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/owner/properties");
        console.log("API Response:", response.data.data);

        if (response.data.success) {
          // Transform the data to match the expected format
          console.log("Transforming propertie s called ");
          const transformedProperties = response.data.data.properties.map(
            (property) => ({
              ...property,
              price: property.price ? `$${property.price}` : "N/A",
              // monthlyRent: property.monthlyRent || property.price || '0',
              // views: property.views || 0,
              // inquiries: property.inquiries || 0,
              status: property.status || "Available",
              image:
                property.photos?.[0] ||
                "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=800&q=80",
            })
          );

          setProperties(transformedProperties);
          console.log("Transformed properties:", transformedProperties);
        } else {
          setError("Failed to fetch properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError(error.response?.data?.message || "Failed to fetch properties");

        // // Fallback to sample data in case of error
        // setProperties(sampleProperties);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((prop) => {
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

  const handleEdit = (property) => {
    console.log("Edit property:", property);
    // Navigate to edit property page or open modal
  };

  const handleDelete = async (property) => {
    console.log("Delete property:", property);

    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        const response = await api.delete(`/owner/properties/${property.id}`);

        if (response.data.success) {
          // Remove the property from the local state
          setProperties((prevProperties) =>
            prevProperties.filter((p) => p.id !== property.id)
          );
          alert("Property deleted successfully");
        } else {
          alert("Failed to delete property");
        }
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete property");
      }
    }
  };

  const handleViewDetails = (property) => {
    console.log("View property details:", property);
    // Navigate to property details page
  };

  const handleViewAnalytics = (property) => {
    console.log("View property analytics:", property);
    // Navigate to analytics page or open modal
  };

  const handleSortChange = (sortValue) => {
    setCurrentSort(sortValue);
    // Add owner-specific sorting logic here
  };

  const filterActions = (
    <PropertiesFilter
      filter={filter}
      setFilter={setFilter}
      search={search}
      setSearch={setSearch}
      filterOptions={filterOptions}
      sortOptions={sortOptions}
      onSortChange={handleSortChange}
      currentSort={currentSort}
    />
  );

  // Loading state
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#091a2b]">
                My Properties
              </h1>
              <p className="text-[#64748b]">
                Manage your rental properties and track their performance
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0284c7]"></div>
          <span className="ml-2 text-[#64748b]">Loading properties...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#091a2b]">
                My Properties
              </h1>
              <p className="text-[#64748b]">
                Manage your rental properties and track their performance
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error loading properties
              </h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm text-red-600 hover:text-red-500 underline"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Filter Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#091a2b]">My Properties</h1>
            <p className="text-[#64748b]">
              Manage your rental properties and track their performance
            </p>
          </div>
          <div className="text-sm text-[#64748b]">
            Total Properties:{" "}
            <span className="font-semibold text-[#091a2b]">
              {properties.length}
            </span>
          </div>
        </div>
        {filterActions}
      </div>

      {/* Properties Grid */}
      <AgentPropertiesGrid
        properties={currentProperties}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        propertiesPerPage={propertiesPerPage}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
        onViewAnalytics={handleViewAnalytics}
      />
    </div>
  );
};

export default OwnerProperties;
