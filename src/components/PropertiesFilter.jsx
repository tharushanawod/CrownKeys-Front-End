import React from "react";
import { FaSearch } from "react-icons/fa";

const PropertiesFilter = ({
  filter,
  setFilter,
  search,
  setSearch,
  filterOptions,
  sortOptions = [],
  onSortChange,
  currentSort,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
      {/* Status Filters */}
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

      {/* Search */}
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

      {/* Sort Dropdown */}
      {sortOptions.length > 0 && (
        <select
          className="px-4 py-2 rounded-lg border border-[#a8aeaf] text-[#3b4876] bg-white font-semibold"
          value={currentSort}
          onChange={(e) => onSortChange && onSortChange(e.target.value)}
        >
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default PropertiesFilter;
