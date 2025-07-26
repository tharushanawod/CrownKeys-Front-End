import React, { useState } from "react";
import {
  FaDollarSign,
  FaHandshake,
  FaCalendarAlt,
  FaEye,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaClock,
  FaExclamationTriangle,
  FaSearch,
  FaFilter,
  FaDownload,
  FaPlus,
  FaBuilding,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaFileContract,
  FaArrowUp,
  FaArrowDown,
  FaChartLine,
} from "react-icons/fa";

// Mock data for offers and deals
const offersData = [
  {
    id: 1,
    propertyId: 101,
    propertyTitle: "Luxury Downtown Apartment",
    propertyAddress: "123 Main Street, New York, NY 10001",
    propertyImage:
      "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=400&q=80",
    listingPrice: 450000,
    clientName: "Sarah Johnson",
    clientEmail: "sarah.johnson@email.com",
    clientPhone: "+1 (555) 123-4567",
    offerAmount: 425000,
    offerDate: "2025-01-08",
    status: "Pending",
    priority: "High",
    contingencies: ["Inspection", "Financing"],
    closingDate: "2025-02-15",
    earnestMoney: 10000,
    notes: "Client is pre-approved and ready to close quickly.",
    negotiationHistory: [
      {
        date: "2025-01-08",
        action: "Initial Offer",
        amount: 425000,
        party: "buyer",
      },
      {
        date: "2025-01-08",
        action: "Counter Offer",
        amount: 440000,
        party: "seller",
      },
    ],
  },
  {
    id: 2,
    propertyId: 102,
    propertyTitle: "Modern Beach House",
    propertyAddress: "456 Ocean Drive, Miami, FL 33101",
    propertyImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    listingPrice: 750000,
    clientName: "Michael Chen",
    clientEmail: "m.chen@email.com",
    clientPhone: "+1 (555) 987-6543",
    offerAmount: 735000,
    offerDate: "2025-01-07",
    status: "Accepted",
    priority: "Medium",
    contingencies: ["Appraisal"],
    closingDate: "2025-03-01",
    earnestMoney: 20000,
    notes: "Cash offer, no financing contingency.",
    negotiationHistory: [
      {
        date: "2025-01-07",
        action: "Initial Offer",
        amount: 720000,
        party: "buyer",
      },
      {
        date: "2025-01-07",
        action: "Counter Offer",
        amount: 750000,
        party: "seller",
      },
      {
        date: "2025-01-07",
        action: "Final Offer",
        amount: 735000,
        party: "buyer",
      },
      {
        date: "2025-01-07",
        action: "Accepted",
        amount: 735000,
        party: "seller",
      },
    ],
  },
  {
    id: 3,
    propertyId: 103,
    propertyTitle: "Suburban Family Home",
    propertyAddress: "789 Park Avenue, Chicago, IL 60601",
    propertyImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    listingPrice: 380000,
    clientName: "Emily Rodriguez",
    clientEmail: "emily.r@email.com",
    clientPhone: "+1 (555) 456-7890",
    offerAmount: 365000,
    offerDate: "2025-01-06",
    status: "Rejected",
    priority: "Low",
    contingencies: ["Inspection", "Financing", "Sale of Current Home"],
    closingDate: "2025-04-01",
    earnestMoney: 5000,
    notes: "Offer below asking price with multiple contingencies.",
    negotiationHistory: [
      {
        date: "2025-01-06",
        action: "Initial Offer",
        amount: 350000,
        party: "buyer",
      },
      {
        date: "2025-01-06",
        action: "Counter Offer",
        amount: 375000,
        party: "seller",
      },
      {
        date: "2025-01-06",
        action: "Counter Offer",
        amount: 365000,
        party: "buyer",
      },
      {
        date: "2025-01-06",
        action: "Rejected",
        amount: 365000,
        party: "seller",
      },
    ],
  },
  {
    id: 4,
    propertyId: 104,
    propertyTitle: "Urban Loft Space",
    propertyAddress: "321 City Center, Boston, MA 02108",
    propertyImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    listingPrice: 520000,
    clientName: "David Wilson",
    clientEmail: "d.wilson@email.com",
    clientPhone: "+1 (555) 321-0987",
    offerAmount: 510000,
    offerDate: "2025-01-05",
    status: "Under Contract",
    priority: "High",
    contingencies: ["Inspection"],
    closingDate: "2025-02-28",
    earnestMoney: 15000,
    notes: "Inspection completed, moving to closing.",
    negotiationHistory: [
      {
        date: "2025-01-05",
        action: "Initial Offer",
        amount: 500000,
        party: "buyer",
      },
      {
        date: "2025-01-05",
        action: "Counter Offer",
        amount: 515000,
        party: "seller",
      },
      {
        date: "2025-01-05",
        action: "Final Offer",
        amount: 510000,
        party: "buyer",
      },
      {
        date: "2025-01-05",
        action: "Accepted",
        amount: 510000,
        party: "seller",
      },
    ],
  },
  {
    id: 5,
    propertyId: 105,
    propertyTitle: "Mountain View Villa",
    propertyAddress: "567 Highland Road, Denver, CO 80202",
    propertyImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    listingPrice: 850000,
    clientName: "Lisa Thompson",
    clientEmail: "lisa.t@email.com",
    clientPhone: "+1 (555) 654-3210",
    offerAmount: 825000,
    offerDate: "2025-01-04",
    status: "Negotiating",
    priority: "High",
    contingencies: ["Inspection", "Appraisal"],
    closingDate: "2025-03-15",
    earnestMoney: 25000,
    notes: "Multiple offers on this property, need quick response.",
    negotiationHistory: [
      {
        date: "2025-01-04",
        action: "Initial Offer",
        amount: 800000,
        party: "buyer",
      },
      {
        date: "2025-01-04",
        action: "Counter Offer",
        amount: 840000,
        party: "seller",
      },
      {
        date: "2025-01-04",
        action: "Counter Offer",
        amount: 825000,
        party: "buyer",
      },
    ],
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Accepted: "bg-green-100 text-green-700 border-green-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
  "Under Contract": "bg-blue-100 text-blue-700 border-blue-200",
  Negotiating: "bg-purple-100 text-purple-700 border-purple-200",
  Closed: "bg-gray-100 text-gray-700 border-gray-200",
};

const priorityColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const AgentOffers = () => {
  const [offers, setOffers] = useState(offersData);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [showOfferModal, setShowOfferModal] = useState(false);

  const filteredOffers = offers.filter((offer) => {
    const matchesStatus =
      filterStatus === "All" || offer.status === filterStatus;
    const matchesSearch =
      offer.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.propertyAddress.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.offerDate) - new Date(a.offerDate);
      case "amount":
        return b.offerAmount - a.offerAmount;
      case "property":
        return a.propertyTitle.localeCompare(b.propertyTitle);
      default:
        return 0;
    }
  });

  const handleStatusChange = (offerId, newStatus) => {
    setOffers(
      offers.map((offer) =>
        offer.id === offerId ? { ...offer, status: newStatus } : offer
      )
    );
  };

  const handleViewOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const handleEditOffer = (offer) => {
    console.log("Edit offer:", offer);
    // Open edit modal or navigate to edit page
  };

  const handleDeleteOffer = (offerId) => {
    setOffers(offers.filter((offer) => offer.id !== offerId));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <FaClock className="text-yellow-600" />;
      case "Accepted":
        return <FaCheck className="text-green-600" />;
      case "Rejected":
        return <FaTimes className="text-red-600" />;
      case "Under Contract":
        return <FaFileContract className="text-blue-600" />;
      case "Negotiating":
        return <FaHandshake className="text-purple-600" />;
      case "Closed":
        return <FaCheck className="text-gray-600" />;
      default:
        return <FaClock className="text-gray-600" />;
    }
  };

  const calculateDaysOnMarket = (offerDate) => {
    const today = new Date();
    const offer = new Date(offerDate);
    const diffTime = Math.abs(today - offer);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Summary statistics
  const totalOffers = offers.length;
  const acceptedOffers = offers.filter(
    (offer) => offer.status === "Accepted"
  ).length;
  const pendingOffers = offers.filter(
    (offer) => offer.status === "Pending"
  ).length;
  const totalValue = offers.reduce((sum, offer) => sum + offer.offerAmount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748b] text-sm">Total Offers</p>
              <p className="text-2xl font-bold text-[#091a2b]">{totalOffers}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaHandshake className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748b] text-sm">Accepted</p>
              <p className="text-2xl font-bold text-[#091a2b]">
                {acceptedOffers}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FaCheck className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748b] text-sm">Pending</p>
              <p className="text-2xl font-bold text-[#091a2b]">
                {pendingOffers}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FaClock className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748b] text-sm">Total Value</p>
              <p className="text-2xl font-bold text-[#091a2b]">
                {formatCurrency(totalValue)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaDollarSign className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#091a2b]">
              Offers & Deals
            </h1>
            <p className="text-[#64748b]">
              Manage property offers and track negotiations
            </p>
          </div>
          <button
            onClick={() => setShowOfferModal(true)}
            className="bg-[#0284c7] text-white px-4 py-2 rounded-lg hover:bg-[#0369a1] transition-colors flex items-center gap-2"
          >
            <FaPlus />
            New Offer
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              placeholder="Search offers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Under Contract">Under Contract</option>
              <option value="Negotiating">Negotiating</option>
              <option value="Closed">Closed</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="property">Sort by Property</option>
            </select>
            <button className="px-4 py-2 bg-[#f1f3f4] text-[#0284c7] rounded-lg hover:bg-[#e0f2fe] transition-colors flex items-center gap-2">
              <FaDownload />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        {sortedOffers.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl text-[#e0f2fe] mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
              No offers found
            </h3>
            <p className="text-[#64748b]">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          sortedOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Property Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={offer.propertyImage}
                      alt={offer.propertyTitle}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-[#091a2b]">
                            {offer.propertyTitle}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              priorityColors[offer.priority]
                            }`}
                          >
                            {offer.priority}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#64748b] mb-2">
                          <div className="flex items-center gap-1">
                            <FaBuilding />
                            {offer.propertyAddress}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#64748b]">
                          <div className="flex items-center gap-1">
                            <FaUser />
                            {offer.clientName}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt />
                            {formatDate(offer.offerDate)} (
                            {calculateDaysOnMarket(offer.offerDate)} days ago)
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div
                          className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                            statusColors[offer.status]
                          }`}
                        >
                          {getStatusIcon(offer.status)}
                          <span className="text-sm font-medium">
                            {offer.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Offer Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="bg-[#f8fafc] rounded-lg p-3">
                        <div className="text-xs text-[#64748b] mb-1">
                          Listing Price
                        </div>
                        <div className="text-lg font-semibold text-[#091a2b]">
                          {formatCurrency(offer.listingPrice)}
                        </div>
                      </div>
                      <div className="bg-[#f8fafc] rounded-lg p-3">
                        <div className="text-xs text-[#64748b] mb-1">
                          Offer Amount
                        </div>
                        <div className="text-lg font-semibold text-[#0284c7]">
                          {formatCurrency(offer.offerAmount)}
                        </div>
                        <div
                          className={`text-xs flex items-center gap-1 ${
                            offer.offerAmount >= offer.listingPrice
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {offer.offerAmount >= offer.listingPrice ? (
                            <FaArrowUp />
                          ) : (
                            <FaArrowDown />
                          )}
                          {(
                            ((offer.offerAmount - offer.listingPrice) /
                              offer.listingPrice) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                      <div className="bg-[#f8fafc] rounded-lg p-3">
                        <div className="text-xs text-[#64748b] mb-1">
                          Earnest Money
                        </div>
                        <div className="text-lg font-semibold text-[#091a2b]">
                          {formatCurrency(offer.earnestMoney)}
                        </div>
                      </div>
                    </div>

                    {/* Contingencies */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-[#091a2b] mb-2">
                        Contingencies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offer.contingencies.map((contingency, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                          >
                            {contingency}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    {offer.notes && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-[#091a2b] mb-1">
                          Notes:
                        </div>
                        <p className="text-sm text-[#64748b]">{offer.notes}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleViewOffer(offer)}
                        className="bg-[#0284c7] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0369a1] transition-colors flex items-center gap-2"
                      >
                        <FaEye />
                        View Details
                      </button>
                      <button
                        onClick={() => handleEditOffer(offer)}
                        className="bg-[#f1f3f4] text-[#0284c7] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e0f2fe] transition-colors flex items-center gap-2"
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#64748b]">Status:</span>
                        <select
                          value={offer.status}
                          onChange={(e) =>
                            handleStatusChange(offer.id, e.target.value)
                          }
                          className="px-3 py-1 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Under Contract">Under Contract</option>
                          <option value="Negotiating">Negotiating</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                      <button
                        onClick={() => handleDeleteOffer(offer.id)}
                        className="text-red-600 hover:text-red-800 px-2 py-1 text-sm"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AgentOffers;
