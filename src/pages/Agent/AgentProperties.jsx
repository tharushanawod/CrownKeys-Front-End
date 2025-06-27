import React, { useState } from "react";
import SidebarAgent from "../../components/SidebarAgent";
import PropertiesLayout from "../../components/PropertiesLayout";
import PropertiesFilter from "../../components/PropertiesFilter";
import PropertiesGrid from "../../components/PropertiesGrid";

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
    status: "Pending",
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
    status: "Sold",
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
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Waterfront Condo",
    address: "234 Harbor View, San Diego, CA 92101",
    price: "$3,500/month",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Garden Townhouse",
    address: "456 Green Street, Seattle, WA 98101",
    price: "$2,900/month",
    beds: 3,
    baths: 2.5,
    area: "1,800 sqft",
    status: "Sold",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
];

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Sold: "bg-blue-100 text-blue-700",
};

const filterOptions = ["All", "Active", "Pending", "Sold"];

const sortOptions = [
  { value: "latest", label: "Sort by: Latest Added" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "status", label: "Status" },
  { value: "commission", label: "Commission: High to Low" },
];

const AgentProperties = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState("latest");
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

  const handlePropertyAction = (property) => {
    console.log("Agent property action clicked:", property);
    // Add agent-specific action logic here
  };

  const handleSortChange = (sortValue) => {
    setCurrentSort(sortValue);
    // Add agent-specific sorting logic here
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

  return (
    <PropertiesLayout
      sidebar={SidebarAgent}
      title="My Listings"
      subtitle="Manage your property listings and track their performance"
      actions={filterActions}
    >
      <PropertiesGrid
        properties={currentProperties}
        statusColors={statusColors}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPropertyAction={handlePropertyAction}
        showActions={true}
        propertiesPerPage={propertiesPerPage}
      />
    </PropertiesLayout>
  );
};

export default AgentProperties;
