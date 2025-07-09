import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaBuilding,
  FaCalendarAlt,
  FaEye,
  FaReply,
  FaCheck,
  FaTimes,
  FaFilter,
  FaSearch,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const sampleInquiries = [
  {
    id: 1,
    propertyId: 101,
    propertyTitle: "Luxury Downtown Apartment",
    propertyAddress: "123 Main Street, New York, NY 10001",
    propertyPrice: "$2,500/month",
    propertyImage:
      "https://images.unsplash.com/photo-1560184897-6a8c1b1e1c8b?auto=format&fit=crop&w=400&q=80",
    clientName: "Sarah Johnson",
    clientEmail: "sarah.johnson@email.com",
    clientPhone: "+1 (555) 123-4567",
    message:
      "Hi, I'm very interested in this apartment. Could we schedule a viewing for this weekend? I'm looking for a place to move in by next month.",
    inquiryDate: "2025-01-08",
    status: "New",
    priority: "High",
    isRead: false,
  },
  {
    id: 2,
    propertyId: 102,
    propertyTitle: "Modern Beach House",
    propertyAddress: "456 Ocean Drive, Miami, FL 33101",
    propertyPrice: "$3,200/month",
    propertyImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    clientName: "Michael Chen",
    clientEmail: "m.chen@email.com",
    clientPhone: "+1 (555) 987-6543",
    message:
      "I would like to know more about the lease terms and whether pets are allowed. Also, is parking included?",
    inquiryDate: "2025-01-07",
    status: "Responded",
    priority: "Medium",
    isRead: true,
  },
  {
    id: 3,
    propertyId: 103,
    propertyTitle: "Suburban Family Home",
    propertyAddress: "789 Park Avenue, Chicago, IL 60601",
    propertyPrice: "$1,800/month",
    propertyImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    clientName: "Emily Rodriguez",
    clientEmail: "emily.r@email.com",
    clientPhone: "+1 (555) 456-7890",
    message:
      "This looks perfect for my family! We have two kids and are looking for good schools nearby. Can you provide information about the school district?",
    inquiryDate: "2025-01-06",
    status: "Follow-up",
    priority: "High",
    isRead: true,
  },
  {
    id: 4,
    propertyId: 104,
    propertyTitle: "Urban Loft Space",
    propertyAddress: "321 City Center, Boston, MA 02108",
    propertyPrice: "$2,800/month",
    propertyImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    clientName: "David Wilson",
    clientEmail: "d.wilson@email.com",
    clientPhone: "+1 (555) 321-0987",
    message:
      "I'm interested in a long-term lease. What's the minimum lease duration, and are there any move-in specials?",
    inquiryDate: "2025-01-05",
    status: "Closed",
    priority: "Low",
    isRead: true,
  },
  {
    id: 5,
    propertyId: 105,
    propertyTitle: "Mountain View Villa",
    propertyAddress: "567 Highland Road, Denver, CO 80202",
    propertyPrice: "$4,500/month",
    propertyImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    clientName: "Lisa Thompson",
    clientEmail: "lisa.t@email.com",
    clientPhone: "+1 (555) 654-3210",
    message:
      "Absolutely stunning property! I'd love to schedule a virtual tour first. Are you available this Thursday evening?",
    inquiryDate: "2025-01-04",
    status: "New",
    priority: "Medium",
    isRead: false,
  },
];

const statusColors = {
  New: "bg-blue-100 text-blue-700 border-blue-200",
  Responded: "bg-green-100 text-green-700 border-green-200",
  "Follow-up": "bg-yellow-100 text-yellow-700 border-yellow-200",
  Closed: "bg-gray-100 text-gray-700 border-gray-200",
};

const priorityColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const AgentInquiries = () => {
  const [inquiries, setInquiries] = useState(sampleInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesStatus =
      filterStatus === "All" || inquiry.status === filterStatus;
    const matchesSearch =
      inquiry.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleMarkAsRead = (inquiryId) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === inquiryId ? { ...inquiry, isRead: true } : inquiry
      )
    );
  };

  const handleStatusChange = (inquiryId, newStatus) => {
    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === inquiryId ? { ...inquiry, status: newStatus } : inquiry
      )
    );
  };

  const handleReply = (inquiry) => {
    console.log("Reply to inquiry:", inquiry);
    // Here you would open a reply modal or navigate to a reply page
  };

  const handleViewProperty = (inquiry) => {
    console.log("View property:", inquiry.propertyId);
    // Here you would navigate to the property details page
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return <FaEnvelope className="text-blue-600" />;
      case "Responded":
        return <FaReply className="text-green-600" />;
      case "Follow-up":
        return <FaCalendarAlt className="text-yellow-600" />;
      case "Closed":
        return <FaCheck className="text-gray-600" />;
      default:
        return <FaEnvelope className="text-blue-600" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#091a2b]">
              Property Inquiries
            </h1>
            <p className="text-[#64748b]">
              Manage and respond to client inquiries
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#64748b]">
              Total Inquiries:{" "}
              <span className="font-semibold text-[#091a2b]">
                {inquiries.length}
              </span>
            </span>
            <span className="text-sm text-[#64748b]">
              Unread:{" "}
              <span className="font-semibold text-red-600">
                {inquiries.filter((i) => !i.isRead).length}
              </span>
            </span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b]" />
            <input
              type="text"
              placeholder="Search inquiries..."
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
              <option value="New">New</option>
              <option value="Responded">Responded</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Closed">Closed</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 bg-[#f1f3f4] text-[#0284c7] rounded-lg hover:bg-[#e0f2fe] transition-colors flex items-center gap-2"
            >
              <FaFilter />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filteredInquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl text-[#e0f2fe] mb-4">📧</div>
            <h3 className="text-xl font-semibold text-[#091a2b] mb-2">
              No inquiries found
            </h3>
            <p className="text-[#64748b]">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          filteredInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className={`bg-white rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md ${
                !inquiry.isRead
                  ? "border-l-4 border-l-blue-500"
                  : "border-gray-200"
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Property Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={inquiry.propertyImage}
                      alt={inquiry.propertyTitle}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-[#091a2b]">
                            {inquiry.clientName}
                          </h3>
                          {!inquiry.isRead && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          )}
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              priorityColors[inquiry.priority]
                            }`}
                          >
                            {inquiry.priority} Priority
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#64748b] mb-2">
                          <div className="flex items-center gap-1">
                            <FaEnvelope />
                            {inquiry.clientEmail}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaPhone />
                            {inquiry.clientPhone}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#64748b]">
                          <FaCalendarAlt />
                          {formatDate(inquiry.inquiryDate)}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div
                          className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                            statusColors[inquiry.status]
                          }`}
                        >
                          {getStatusIcon(inquiry.status)}
                          <span className="text-sm font-medium">
                            {inquiry.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="bg-[#f8fafc] rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <FaBuilding className="text-[#0284c7]" />
                        <h4 className="font-semibold text-[#091a2b]">
                          {inquiry.propertyTitle}
                        </h4>
                        <span className="text-sm font-semibold text-[#0284c7]">
                          {inquiry.propertyPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#64748b]">
                        <FaMapMarkerAlt />
                        {inquiry.propertyAddress}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <h5 className="font-medium text-[#091a2b] mb-2">
                        Message:
                      </h5>
                      <p className="text-[#64748b] text-sm leading-relaxed">
                        {inquiry.message}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleReply(inquiry)}
                        className="bg-[#0284c7] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0369a1] transition-colors flex items-center gap-2"
                      >
                        <FaReply />
                        Reply
                      </button>
                      <button
                        onClick={() => handleViewProperty(inquiry)}
                        className="bg-[#f1f3f4] text-[#0284c7] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e0f2fe] transition-colors flex items-center gap-2"
                      >
                        <FaEye />
                        View Property
                      </button>
                      {!inquiry.isRead && (
                        <button
                          onClick={() => handleMarkAsRead(inquiry.id)}
                          className="bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-100 transition-colors flex items-center gap-2"
                        >
                          <FaCheck />
                          Mark as Read
                        </button>
                      )}
                      <select
                        value={inquiry.status}
                        onChange={(e) =>
                          handleStatusChange(inquiry.id, e.target.value)
                        }
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#0284c7] focus:border-transparent"
                      >
                        <option value="New">New</option>
                        <option value="Responded">Responded</option>
                        <option value="Follow-up">Follow-up</option>
                        <option value="Closed">Closed</option>
                      </select>
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

export default AgentInquiries;
